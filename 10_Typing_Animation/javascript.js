// Typing animation (typing and deleting letters)
const typingBox = document.getElementById("typing")
const typingText = typingBox.textContent
const typingArr = typingText.split(", ")

let wordIndex = 0

const printCharacter = () => {
    if (wordIndex < typingArr.length) {
        typingBox.innerHTML = ""
        let character = typingArr[wordIndex].split("")
        let charIndex = 0

        // addCharacter
        const addCharacter = () => {
            if(charIndex < character.length){
                typingBox.innerHTML += character[charIndex]
                charIndex++
                setTimeout(addCharacter, 100);
            }else{
                setTimeout(deleteCharacter, 500);
            }
        } // addCharacter()

        // deleteCharacter
        const deleteCharacter = () => {
            let deleteIndex = character.length-1
            const backSpace = () => {
                if(deleteIndex >= 0){
                    typingBox.innerHTML = typingBox.innerHTML.slice(0,-1) // removing character one by one
                    deleteIndex--
                    setTimeout(backSpace, 100);
                }else{
                    wordIndex++
                    if(wordIndex >= typingArr.length){
                        wordIndex = 0 // checking for infinite loop
                    }
                    setTimeout(printCharacter, 100);
                }
            } // backSpace()
            backSpace()
        } // deleteCharacter()
        addCharacter()
    }
} // printCharacter()

printCharacter()