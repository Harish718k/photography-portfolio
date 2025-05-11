var menu = document.querySelector(".menu");
var navBox = document.querySelector(".nav-box");
var num = 1;
menu.addEventListener("click", ()=>{
    navBox.classList.toggle("hide")
})

navBox.addEventListener("click", ()=>{
    navBox.classList.toggle("hide")
})

function nextImg(event){
    var image = document.querySelector("#slider1");
    num = num==3 ? 1 : num+1
    image.innerHTML = `<img src="img/full-slide/thumb-${num}.jpg" alt="" >`
}

function previousImg(event){
    num = num==1 ? 3 : num-1
    var image = document.querySelector("#slider1");
    image.innerHTML = `<img src="img/full-slide/thumb-${num}.jpg" alt="" >`
}

function nImg(event){
    var image = document.querySelector("#slider2");
    num = num==4 ? 1 : num+1
    image.innerHTML = `<img src="img/three-slide/thumb-${num}.jpg" alt="" >`
}

function pImg(event){
    num = num==1 ? 4 : num-1
    var image = document.querySelector("#slider2");
    image.innerHTML = `<img src="img/three-slide/thumb-${num}.jpg" alt="" >`
}