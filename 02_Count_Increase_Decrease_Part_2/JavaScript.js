const number = document.getElementById("number")  // number box
const btns = document.querySelectorAll(".btn")  // all buttons

let count = 0  // number to increase or decrease

// function running on click event
const action = (e) => {
    // number increasing decreasing condition
    if (e.target.value === "Increase") {
        count += 1
    } else if (e.target.value === "Decrease") {
        count -= 1
    } else if (e.target.value === "Reset") {
        count = 0
    }
    number.innerText = count

    // number color condition
    if (number.innerText < 0) {
        number.style.color = "red"
    } else if (number.innerText > 0) {
        number.style.color = "green"
    } else {
        number.style.color = "black"
    }
}

btns.forEach(btn => btn.addEventListener("click", action))  // btn clicking event