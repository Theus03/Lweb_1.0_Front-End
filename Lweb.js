let time = 3000, 
    currentImageLweb = 0,
    images = document.querySelectorAll(".slider img")
    max = images.length;

function nextImage() {
    images[currentImageLweb].classList.remove("selected")
    
    currentImageLweb++

    if(currentImageLweb >= max)
        currentImageLweb =  0

    images[currentImageLweb].classList.add("selected")
}

function start() {
    setInterval(() => {
        //Troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)