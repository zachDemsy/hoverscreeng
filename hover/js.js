function aud_play_pause() {
    var myAudio = document.getElementsById("fa fa-play");
    if (myAudio.paused) {
        $('#stateicon').removeClass('fa fa-play');
        $('#stateicon').addClass('fa fa-pause');
        myAudio.play();
    } else {
        $('#stateicon').removeClass('fa fa-pause');
        $('#stateicon').addClass('fa fa-play');
        myAudio.pause();   
    } 
}