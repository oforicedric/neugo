function timer(){
    var D = parseInt(document.getElementById("days").value, 0);
    var H = parseInt(document.getElementById("hours").value, 0);
    var M = parseInt(document.getElementById("minutes").value, 0);
    var S = parseInt(document.getElementById("seconds").value, 0);

    var current = ((D * 86400) + (H * 3600) + (M * 60) + S);  //the current time left in seconds
    if (current > 0) {
        //take one second away, and rerender the seconds split into d, h, m, and s in the html, which you will reuse next time timer() runs
    } else {
        //expired
    }
}