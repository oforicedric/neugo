function random() {
    document.getElementById("one").innerHTML = Math.floor(Math.random() * 1000) + Math.random().toString(36).substr(2, 5);;
}