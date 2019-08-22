window.onload = function() {
    document.getElementById("itemImage").onchange = showFormatImage;
 };
function showFormatImage() {
   var image = document.getElementById("changeImage");
   image.src = $('select[name=itemImage] option:selected').attr('data-img');
   return false;
}