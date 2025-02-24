// select buttons
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const random = document.getElementById("random")
const review = document.getElementById("reviews")
const item = review.children


// testimonial function
let contentID = 0

// next button
next.addEventListener("click",()=>{
    item[contentID].classList.remove("active")
    contentID ++
    console.log(item.length)
    if(contentID > item.length - 1){
        contentID = 0
    }
    item[contentID].classList.add("active")
})

// previous button
prev.addEventListener("click",()=>{
    item[contentID].classList.remove("active")
    contentID --
    console.log(item.length)
    if(contentID < 0){
        contentID = item.length - 1
    }
    item[contentID].classList.add("active")
})

// random button
random.addEventListener("click",()=>{
    item[contentID].classList.remove("active")
    contentID = Math.floor(Math.random()*item.length)
    item[contentID].classList.add("active")
})