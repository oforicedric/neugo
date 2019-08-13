var now = new Date();
var diff = 15;
var deadline = new Date(now.getTime() + diff*60000);
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now;  
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s "; 
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "EXPIRED"; 
    } 
}, 1000); 