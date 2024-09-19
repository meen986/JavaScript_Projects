// local testimonial data
const testimonial = [
    {
        name: "Suraj Chauhan",
        userImage: "images/user1.jpg",
        designation: "Frond-end Developer",
        message: "A top-tier software development company with a dedicated and skilled team. They provide innovative solutions, consistently delivering projects on time and within budget. Their professionalism, attention to detail, and customer-focused approach make them an excellent choice for any software needs.",
        date: "25-January-2024"
    },
    {
        name: "Radhika Shipra",
        userImage: "images/user2.jpg",
        designation: "Backend Developer",
        message: "This software development company excels in delivering high-quality solutions. Their team is professional, reliable, and skilled in meeting project goals. They consistently meet deadlines and offer excellent communication throughout the process. A trustworthy partner for innovative and efficient software development.",
        date: "18-February-2024"
    },
    {
        name: "Tajendra Singh",
        userImage: "images/user3.jpg",
        designation: "Graphic Designer",
        message: "Highly reliable software development company with a talented team. They deliver exceptional solutions, meeting deadlines with precision and efficiency. Their communication is clear, and their customer service is excellent. A great choice for anyone seeking innovative, tailored software development services.",
        date: "03-March-2024"
    },
    {
        name: "Pooja Bhatia",
        userImage: "images/user4.jpg",
        designation: "Motion Graphic Designer",
        message: "This software development company stands out for its expertise and professionalism. Their team delivers tailored solutions with precision, always meeting deadlines. Excellent communication and customer service make them a trusted partner for efficient, high-quality software development projects.",
        date: "28-April-2024"
    }
]

// select elements
const name = document.getElementById("name")
const userImage = document.getElementById("userImage")
const designation = document.getElementById("designation")
const message = document.getElementById("message")
const date = document.getElementById("date")

// select buttons
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const random = document.getElementById("random")

// testimonial function
let contentID = 0

const testimonialData = () => {
    data = testimonial[contentID]
    name.textContent = data.name
    userImage.src = data.userImage
    designation.textContent = data.designation
    message.textContent = data.message
    date.textContent = data.date
}

window.addEventListener("DOMContentLoaded", testimonialData)

// next button
next.addEventListener("click", () => {
    contentID++
    if (contentID > testimonial.length - 1) {
        contentID = 0
    }
    testimonialData()
})

// previous button
prev.addEventListener("click", () => {
    contentID--
    if (contentID < 0) {
        contentID = testimonial.length - 1
    }
    testimonialData()
})

// random button
random.addEventListener("click", () => {
    contentID = Math.floor(Math.random() * testimonial.length)
    testimonialData()
})