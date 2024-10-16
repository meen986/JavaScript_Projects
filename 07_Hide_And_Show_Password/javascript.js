const password = document.getElementById("password")
const eye_icon = document.getElementById("eye_icon")
const password_strength = document.getElementById("password_strength")
const strength_div = password_strength.parentElement
const strength_line = document.getElementById("strength_line")

password.addEventListener("input", () => {
    const password_len = password.value.length

    if (password_len <= 0) {
        password_strength.innerText = ""
        strength_div.style.display = "None"
        strength_line.style.width = "1%"
        strength_line.style.backgroundColor = "transparent"
    } else if ((password_len > 0) && (password_len <= 5)) {
        password_strength.innerText = "Weak"
        strength_div.style.color = "red"
        strength_div.style.display = "block"
        strength_line.style.width = "33%"
        strength_line.style.backgroundColor = "red"
    } else if ((password_len > 5) && (password_len <= 8)) {
        password_strength.innerText = "Medium"
        strength_div.style.color = "orange"
        strength_line.style.width = "66%"
        strength_line.style.backgroundColor = "orange"
    } else if (password_len > 8) {
        password_strength.innerText = "Strong"
        strength_div.style.color = "green"
        strength_line.style.width = "100%"
        strength_line.style.backgroundColor = "green"
    }
})


eye_icon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text"
        eye_icon.src = "images/show.png"
    } else {
        password.type = "password"
        eye_icon.src = "images/hide.png"

    }
})