function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 




/* Active Copyright */
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;