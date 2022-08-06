const textarea = document.getElementById("input")
const command = document.getElementById("typer")

window.addEventListener("keyup", inputKey)

function inputKey(key){
    console.log("Key: ", key.keyCode)
    if(key.keyCode == 13){ // Enter
        textarea.value = ""
        command.innerHTML = textarea.value
    }
}

function focusInput(){
    const textarea = document.getElementById("input")
    textarea.focus()
}

function typeIt(element, event){
    const text = element.value
    const key = event.key
    const typer = document.getElementById("typer")
    
    console.log("Key: " + key, " Text: " + text)

    switch (key) {
        case "Backspace":
            element.value = text.slice(0, text.length)
            typer.textContent = element.value
            break;
        case "Enter":

            break;
        default:
            typer.textContent += key
            console.log("Typer: " + typer.textContent)
            break;
    }    
}

function main(){
    // Clear input
    textarea.value = ""
    command.innerHTML = textarea.value

    // Display welcome messaje
    putLines(banner, "bold", 50)

    focusInput()
}

// init
main()