var myTime = {};

function time() {
    var myMinutes = Number(document.getElementById("myMinutes").value);
    var mySeconds = Number(document.getElementById("mySeconds").value);
    localStorage.setItem("myMinutes", myMinutes);
    localStorage.setItem("mySeconds", mySeconds);
    openWindow()
};

function getTime() {
    
};

function displayTime() {
    display = document.querySelector('#time');
    localStorage.setItem("display", display);

    var myMinutes = localStorage.getItem("myMinutes");
    var mySeconds = localStorage.getItem("mySeconds");
    myVideo = localStorage.getItem("myVideoLink");
    myImage = localStorage.getItem("myImage");
    var duration = (60 * Number(myMinutes)) + Number(mySeconds);

    localStorage.setItem("duration", duration);

    var timer = duration,
        minutes, seconds;

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    
}

var colorGradient = [{
    start: "#ff9a9e",
    end: "#fad0c4"
}, {
    start: "#a18cd1",
    end: "#fbc2eb"
}, {
    start: "#84fab0",
    end: "#8fd3f4"
}, {
    start: "a6c0fe",
    end: "#f68084"
}];
var orientation = "45deg";
var colors = ['#FAE03C', '#59C9D5', '#EF5229', '#86AF49', '#00939A', '#EF5C6E'];

var active = 0;
var b = 1;
var a = 1;
setInterval(function () {
    if (b != 1) {
        b = 1;
        a = 2;
    } else {
        b = 2;
        a = 1;
    }
    var currentBack = ".background" + b;
    // change background color of body
    //document.querySelector('body').style.backgroundimage = colors[active];
    document.querySelector(currentBack).style.backgroundImage = getCssValuePrefix() + 'linear-gradient(' + orientation + ', ' + colorGradient[active].start + ', ' + colorGradient[active].end + ')';
    //change button text hover color
    $("#myStyle").html('.button:hover {color: ' + colorGradient[active].start + '}');
    setTimeout(function () {
        document.querySelector('.background' + b).style.opacity = 1;
        document.querySelector('.background' + a).style.opacity = 0;
    }, 2000);

    active++;
    if (active == colorGradient.length) active = 0;
}, 20000);

function startTimer(duration, display) {
    display = document.querySelector('#time');
    var timer = duration,
        minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
};

function openWindow() {

    var width = 1920;
    var left = 1000;

    left += window.screenX;

    window.open("kello.html", 'countdown', 'resizable=1,scrollbars=1,fullscreen=0,height=1080,width=' + width + '  , left=' + left + ', toolbar=0, menubar=0,status=1');
    return 0;

}

function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    getTime();
}

