window.orientation.onchange = function () {
    if(screen.width > screen.height){
        document.getElementById("landscape").style.visibility = "hidden";
    } else {
        document.getElementById("landscape").style.visibility = "visible";
    }
}