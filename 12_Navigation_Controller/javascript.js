const nav = document.querySelectorAll("li a")
const wrap = document.querySelectorAll(".wrap")

// click event
nav.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        wrap[index].scrollIntoView({
            behavior: "smooth",
        })
    })
})

// scroll event
document.addEventListener("scroll", (e) => {
    wrap.forEach((page, index) => {
        let pagePosition = page.getBoundingClientRect()

        if (pagePosition.top < 200) {
            nav.forEach((link) => {
                link.classList.remove("active")
            })
            nav[index].classList.add("active")
        } else {
            nav[index].classList.remove("active")
        }
    })
})