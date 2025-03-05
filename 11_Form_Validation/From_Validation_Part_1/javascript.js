const form = document.querySelector("form")

const formValidation = (e) => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    const country = document.getElementById("country").value
    const message = document.getElementById("message").value

    e.preventDefault()
    if (name === "") {
        alert("Enter Name")
    } else if (email === "") {
        alert("Enter Email ID")
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Enter Valid Email ID")
    } else if (phone === "") {
        alert("Enter Phone Number")
    } else if (phone.length < 10) {
        alert("Enter Valid Phone Number")
    } else if (phone.length >= 10) {
        Number(phone)
        if(isNaN(phone)){
            alert("Enter Valid Phone Number")
        }else if (country === "") {
            console.log(phone.length)
            alert("Enter Country Name")
        } else if (message === "") {
            alert("Type your message!")
        }
    } 
}

form.addEventListener("submit", formValidation)