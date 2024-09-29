// password character
const upper_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower_letter = "abcdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbol = "!@#$%^&*()_+~{}|<>[]/-="
const all_characters = upper_letter + lower_letter + number + symbol
const password_length = "15"

// id selection
const password_input = document.getElementById("password_input")
const generate_password = document.getElementById("generate_password")
const copy = document.getElementById("copy")

// password generating funciton
const password_generator_func = () => {
    let password = ""
    password += upper_letter[Math.floor(Math.random()*upper_letter.length)]
    password += lower_letter[Math.floor(Math.random()*lower_letter.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password += symbol[Math.floor(Math.random()*symbol.length)]

    while(password_length > password.length){
        password += all_characters[Math.floor(Math.random()*all_characters.length)]
    }
    password_input.value = password
}

// copy password function
const copy_func = () => {
    password_input.select()
    document.execCommand("copy")
}

// Event Listeners
generate_password.addEventListener("click",password_generator_func)
copy.addEventListener("click",copy_func)