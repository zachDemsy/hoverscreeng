function aud_play_pause(get) {
    if (get.className == "fa fa-play") get.classList.replace("fa-play", "fa-pause");
    else get.classList.replace("fa-pause", "fa-play");

}

