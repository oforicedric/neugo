// show the timer
function hidediv() {


}
function showtimer() {
    document.getElementById('countdown').style.display = "block";

    document.getElementById('countdown_number').style.display = "block";
    document.getElementById('finish_session_button_div').style.display = "block";
    document.getElementById('timerform').style.display = "none";

    sessionStorage.setItem('timerstuff', true);
}
window.onload = function () {

    document.getElementById('countdown').style.display = "block";

    document.getElementById('countdown_number').style.display = "block";
    document.getElementById('finish_session_button_div').style.display = "block";
    document.getElementById('timerform').style.display = "none";

    sessionStorage.setItem('timerstuff', true);
    var data = sessionStorage.getItem('timerstuff');
    if (data == 'true') {
        showtimer();
        countdownTimeStart();
    }
    sessionStorage.clear();


};