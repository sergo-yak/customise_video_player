var v = document.querySelector("video");
var t = document.querySelector("track");
var b = document.querySelector("#bar");

// v.addEventListener('click',play,false);
v.addEventListener('timeupdate',update,false);
t.addEventListener('loaded',render,false); // Bug in FF31 MAC: wrong event name
t.addEventListener('load',render,false);

function play() {
    if(v.paused) { v.play(); } else { v.pause(); }
}

function update() {
    var p = v.currentTime/v.duration*100;
    // b.style.background = "linear-gradient(to right, #500 "+p+"%, #000 "+p+"%)";
}

function render() {
    var c = v.textTracks[0].cues;
    for (var i=0; i<c.length; i++) {
        var s = document.createElement("span");
        s.innerHTML = c[i].text;
        s.setAttribute('data-start',c[i].startTime);
        // s.style.width = ((c[i].endTime-c[i].startTime)/888*3932-7)+'px';
        s.addEventListener("click",seek);
        b.appendChild(s);
    }
}

function seek(e) {
    v.currentTime = this.getAttribute('data-start');
    if(v.paused) { v.play(); }
}

var api = 'https://content-eu-1.content-cms.com/api/2b02a3e0-0b88-47df-ad46-4d72278932bc';
let source_url = 'https://content-eu-1.content-cms.com/api/2b02a3e0-0b88-47df-ad46-4d72278932bc/delivery/v1/rendering/context/fc299e68-c195-4225-8200-55011a10af20';

document.getElementById("page_source").innerText = source_url;
fetch(source_url)
    .then(res => res.json())
    .then((out) => {
        var response = out.elements.headerVideo;
        // console.log('Checkout this JSON! ', response);

        var resp_video_source = api + response.asset.resourceUri;
        document.getElementById("video_source").innerText = resp_video_source;

        var video = document.getElementById('vplayer');
        var video_source = document.createElement('source');
        video_source.setAttribute('src', resp_video_source);
        video.appendChild(video_source);
    })
    .catch(err => { throw err });