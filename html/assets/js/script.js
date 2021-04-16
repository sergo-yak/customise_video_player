var jwb = document.querySelector("#jwbar");

function addJWChapterMenuItem(cue) {
    var s = document.createElement("span");
    s.innerHTML = cue.text;
    s.setAttribute('onclick', "jwplayer().seek(" + cue.startTime + ")");
    jwb.appendChild(s);
}

var api = 'https://content-eu-1.content-cms.com/api/2b02a3e0-0b88-47df-ad46-4d72278932bc/delivery/v1/resources?path=';
let source_url = 'https://content-eu-1.content-cms.com/api/2b02a3e0-0b88-47df-ad46-4d72278932bc/delivery/v1/rendering/context/fc299e68-c195-4225-8200-55011a10af20';

document.getElementById("page_source").innerText = source_url;
fetch(source_url)
    .then(res => res.json())
    .then((out) => {
        var response = out.elements.headerVideo;
        // console.log('Checkout this JSON! ', response);

        var resp_video_source = api + response.url;
        document.getElementById("video_source").innerText = resp_video_source;
        initJWPlayer(response);
    })
    .catch(err => { throw err });

function parse_timestamp(s) {
    //var match = s.match(/^(?:([0-9]{2,}):)?([0-5][0-9]):([0-5][0-9][.,][0-9]{0,3})/);
    // Relaxing the timestamp format:
    var match = s.match(/^(?:([0-9]+):)?([0-5][0-9]):([0-5][0-9](?:[.,][0-9]{0,3})?)/);
    if (match == null) {
        throw 'Invalid timestamp format: ' + s;
    }
    var hours = parseInt(match[1] || "0", 10);
    var minutes = parseInt(match[2], 10);
    var seconds = parseFloat(match[3].replace(',', '.'));
    return seconds + 60 * minutes + 60 * 60 * hours;
}

// https://w3c.github.io/webvtt/
// https://developer.mozilla.org/en/docs/Web/API/Web_Video_Text_Tracks_Format
// https://en.wikipedia.org/wiki/WebVTT
//
// For better parsers, look at:
// https://github.com/annevk/webvtt
// https://github.com/mozilla/vtt.js
function quick_and_dirty_vtt_or_srt_parser(vtt) {
    var lines = vtt.trim().replace('\r\n', '\n').split(/[\r\n]/).map(function(line) {
        return line.trim();
    });
    var cues = [];
    var start = null;
    var end = null;
    var payload = null;
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('-->') >= 0) {
            var splitted = lines[i].split(/[ \t]+-->[ \t]+/);
            if (splitted.length != 2) {
                throw 'Error when splitting "-->": ' + lines[i];
            }

            // Already ignoring anything past the "end" timestamp (i.e. cue settings).
            start = parse_timestamp(splitted[0]);
            end = parse_timestamp(splitted[1]);
        } else if (lines[i] == '') {
            if (start && end) {
                var cue = new VTTCue(start, end, payload);
                cues.push(cue);
                start = null;
                end = null;
                payload = null;
            }
        } else if(start && end) {
            if (payload == null) {
                payload = lines[i];
            } else {
                payload += '\n' + lines[i];
            }
        }
    }
    if (start && end) {
        var cue = new VTTCue(start, end, payload);
        cues.push(cue);
    }

    return cues;
}

var inner_chapters = document.getElementById('innerChapters');
if (inner_chapters != null) {
    quick_and_dirty_vtt_or_srt_parser(inner_chapters.innerHTML).map(function(cue) {
        addJWChapterMenuItem(cue);
    });
}