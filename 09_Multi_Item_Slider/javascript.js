const galleryItems = document.querySelector(".galleryItems")
const items = galleryItems.children

// buttons
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")

// counter
let count = 0
const size = items[0].clientWidth + 20

// next button function
nextBtn.addEventListener("click", (e) => {
    e.preventDefault()
    count++
    if(count > items.length-5){
        nextBtn.style.display = "none"
        prevBtn.style.display = "block"
        console.log(`next: ${count}`)
    }else{
        nextBtn.style.display = "block"
        prevBtn.style.display = "block"
    }
    galleryItems.style.transition = "all 0.3s"
    galleryItems.style.transform = `translateX(${-size * count}px)`
})

// prev button function
prevBtn.addEventListener("click", (e) => {
    e.preventDefault()
    count--
    if(count < 1){
        prevBtn.style.display = "none"
        nextBtn.style.display = "block"
        console.log(`prev: ${count}`)
    }else{
        prevBtn.style.display = "block"
        nextBtn.style.display = "block"
    }
    galleryItems.style.transition = "all 0.3s"
    galleryItems.style.transform = `translateX(${-size * count}px)`
})