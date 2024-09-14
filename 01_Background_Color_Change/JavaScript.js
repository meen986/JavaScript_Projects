//color array
const color = ["blue", "yellow", "pink", "purple", "red"]

// color code
const colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"]

// color change button
const colorChangeButton = document.getElementById("change_color")

// background color name
const colorName = document.getElementById("color_name")

// switch button
const switchButton = document.getElementById("switch_button")

colorChangeButton.addEventListener("click",()=>{
    if (colorChangeButton.value === "Change Background Color by Name") {
        // random number of color array length
        const random = Math.floor(Math.random() * color.length)
        document.body.style.backgroundColor = color[random]  // change background
        colorName.innerText = color[random]  // change color name
    
    } else {
        // generating random code
        let code = ""
        for (let i = 0; i < 6; i++) {
            const digit = Math.floor(Math.random() * colorCode.length)
            code += colorCode[digit]
        }

        document.body.style.backgroundColor = "#"+code  // change background
        colorName.innerText = "#"+code  // change color name
    }
})

// change button text on clicking switch button
switchButton.addEventListener("click", () => {
    if (colorChangeButton.value === "Change Background Color by Name") {
        colorChangeButton.value = "Change Background Color by Color Code"
    } else {
        colorChangeButton.value = "Change Background Color by Name";
    }
})