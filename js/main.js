window.addEventListener("keyup", inputKey)

function inputKey(key){
    if (key.keyCode == 181) {
        document.location.reload(true);
    }
    if(key.keyCode == 13){ // Enter
        executeCommand(textarea.value.trim())
    }
}

function focusInput(){
    const textarea = document.getElementById("input")
    textarea.focus()
}

function main(){
    // Clear input
    textarea.value = ""
    command.innerHTML = textarea.value

    // Display welcome messaje
    putLines(banner, bannerStyle, 80)

    initCursor()
    focusInput()
}

// init
main()