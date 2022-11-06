
var myAudio = document.getElementById("play");
function aud_play_pause() {
    if (myAudio.value == undefined) myAudio.value = "0";
    if (myAudio.value === "0") {
        myAudio.setAttribute("class", 'fa fa-pause');
        myAudio.value = "1";
    } else {
        myAudio.setAttribute("class", 'fa fa-play');
        myAudio.value = "0";
    } 
}

