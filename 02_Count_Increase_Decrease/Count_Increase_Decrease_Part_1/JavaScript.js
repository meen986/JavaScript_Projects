const resetNumber = document.getElementById("resetNumber")  // reset button
const decreaseNumber = document.getElementById("decreaseNumber")  // decrease button
const increaseNumber = document.getElementById("increaseNumber")  // increase button
const number = document.getElementById("number")  // number box


let count = 0  // number to increase or decrease
let increaseNum  // to stop increase number
let decreaseNum  // to stop decrease number

// increase function
const increase = () => {
    clearInterval(decreaseNum)
    increaseNum = setInterval(() => {
        count++
        number.textContent = count
    }, 100);
}

// decrease function
const decrease = () => {
    clearInterval(increaseNum)
    decreaseNum = setInterval(() => {
        count--
        number.textContent = count
    }, 100);
}

// stop function
const stop = () => {
    clearInterval(increaseNum)
    clearInterval(decreaseNum)
    count = 0
    number.textContent = count
}

// all click events
increaseNumber.addEventListener("click", increase)
decreaseNumber.addEventListener("click", decrease)
resetNumber.addEventListener("click", stop)

// color conditions
setInterval(() => {
    if(count == 0){
        number.style.color = "black"
    }else if (count < 0){
        number.style.color = "red"
    }else{
        number.style.color = "green"
    }
}, 100);