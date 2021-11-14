// Hamburger
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 




// Active Copyright 
let date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;

// Inventory



