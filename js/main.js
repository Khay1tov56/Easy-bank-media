// alert("Xatoliklarga uzur so'raymiz e'tiboringiz uchun rahmat")
var elHeader = document.querySelector(".site-header")
var elBars = document.querySelector(".bars")

elBars.addEventListener("click", ()=> {
    elHeader.classList.toggle("site-nav-on")
})