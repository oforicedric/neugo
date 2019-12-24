// show the timer
function hidediv () {
    

}
function showtimer(){
document.getElementById('countdown').style.display = "block";

  document.getElementById('countdown_number').style.display = "block";
  document.getElementById('finish_session_button_div').style.display = "block";
  document.getElementById('timerform').style.display = "none";
 
  sessionStorage.setItem('timerstuff', true);  
}
window.onload = function () {
    
    var data = sessionStorage.getItem('timerstuff');
    if (data == 'true') {
        showtimer();
        countdownTimeStart();  
    }
    sessionStorage.clear();
    
    
};



// Set the date we're counting down to
function countdownTimeStart() {

     
    var currentDate = new Date();
    var twentyMinutesLater = new Date(currentDate.getTime() + (20 * 60 * 1000));
	
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = twentyMinutesLater - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("countdown_number").innerHTML = minutes + ":" + seconds;
		
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown_number").innerHTML = "EXPIRED";
        }
    }, 1000);
}