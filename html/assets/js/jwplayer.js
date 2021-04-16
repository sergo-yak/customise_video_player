function initJWPlayer(videoRes) {
    jwplayer("myElement").setup({
        "playlist": [{
            "file": api + videoRes.url,
            "tracks": [
                // {
                //     "default": true,
                //     "kind": "captions",
                //     "file": "https://content.jwplatform.com/tracks/tu2Xn7C9.srt",
                //     "label": "English"
                // },
                {
                    "kind": "chapters",
                    "file": "https://content.jwplatform.com/tracks/rymxDnAJ.vtt",
                },
                // {
                //     "kind": "captions",
                //     "file": "https://content.jwplatform.com/tracks/dVtVoxYs.vtt",
                //     "label": "German"
                // },
                // {
                //     "file": "https://cdn.jwplayer.com/strips/rw9yl7gT-120.vtt",
                //     "kind": "thumbnails"
                // }
            ]
        }],
        "width": "100%",
        "aspectratio": "16:9"
    });
}