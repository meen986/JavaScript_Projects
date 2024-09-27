// ID selection
const add_item_input = document.getElementById("add_item_input")
const add_item_button = document.getElementById("add_item_button")
const to_do_list = document.getElementById("to_do_list")

// add_to_do function
const add_to_do = () => {
    if (add_item_input.value === "") {
        alert("Write something in Input Field")
    } else {
        // create li
        let li = document.createElement("li")
        li.innerHTML = add_item_input.value
        to_do_list.appendChild(li)

        // create close button
        let span = document.createElement("span")
        span.innerHTML = "x"
        li.appendChild(span)
        save_data() // save data to localstorage
    }
    add_item_input.value = "" // Clear input field
}

// Event listeners

// Add item on button click
add_item_button.addEventListener("click", add_to_do)

// Event delegation for toggling 'done' and removing items
to_do_list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done")
        save_data() // save data to localstorage
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove() // Remove the parent <li> element
        save_data() // save data to localstorage
    }
},false)

// Save to localStorage
const save_data = () => {
    localStorage.setItem("data", to_do_list.innerHTML)
}

// Load saved data from localStorage
const show_data = () => {
    // const saved_data = localStorage.getItem("data")
    // if (saved_data){
    //     to_do_list.innerHTML = localStorage.getItem("data")
    // }
    to_do_list.innerHTML = localStorage.getItem("data")
}

// Run show_data when the page is loaded to populate the list
// window.addEventListener("DOMContentLoaded",show_data)
show_data()