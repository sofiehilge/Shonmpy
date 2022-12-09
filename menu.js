let btn = document.getElementById("menu-btn")

let items = document.getElementById("menu-items")

btn.onclick = function(){
    items.classList.toggle("visible")
}