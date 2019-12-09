function setCar() {
   var img = document.getElementById("image");
   img.src = this.value;
   return false;
}
document.getElementById("CarList").onchange = setCar;