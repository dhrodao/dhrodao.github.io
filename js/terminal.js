/* Constantes */
const prompt = "guest@welcome:~$ "
const textarea = document.getElementById("input")
const command = document.getElementById("typer")
const cursor = document.getElementById("cursor")

const terminalScreen = document.getElementById("screen-shell")
const terminal = document.getElementById("terminal")
const typer = document.getElementById("typer")
const before = document.getElementById("before")

function initCursor(){
    cursor.style.left = "0px"
}

function executeCommand(cmd){
    if(cmd.toLowerCase() != 'clear')
        putLine(prompt + cmd, [], 0)

    switch(cmd.toLowerCase()){
        case 'help':
            putLines(help, helpStyle, 200)
            break
        case 'whoami':
            putLines(whoami, whoamiStyle, 200)
            break
        case 'socials':
            putLines(socials, socialsStyle, 200)
            break
        case 'projects':
            putLines(projects, projectsStyle, 200)
            newTab(github, 2500)
            break
        case 'clear':
            terminal.innerHTML = ""
            putLines(banner, bannerStyle, 80)
            break
        default:
            const errorMsg = [`Command: <span class="command">'${cmd}'</span> not found`]
            putLines(errorMsg, [''], 250)
            break
    }

    textarea.value = ""
    command.innerHTML = textarea.value
}

function typeIt(element, event){
    const text = element.value
    .replaceAll(" ", "&nbsp;")
    .replace(/\n/g, '')
    
    typer.innerHTML = text
}

/* Funciones */
function putLine(line, textStyle, time){
    var text = ""
// <span 
    for(var i = 0; i < line.length; i++){
        if(line.charAt(i) === " "){            
            if(!["span", "link", "ink\"", "  <a"].includes(line.substring(i-4, i)))
                text += "&nbsp;"
            else text += line.charAt(i)
        }else{
            text += line.charAt(i)
        }
    }
    
    setTimeout(function () {
        var newLine = document.createElement("p")
        newLine.innerHTML = text
        newLine.className = textStyle

        terminal.append(newLine)
        //before.parentNode.insertBefore(newLine, before);

        terminalScreen.scrollTo(0, terminalScreen.offsetHeight)
    }, time)
}

function putLines(lines, textStyle, time){
    if(lines.length === textStyle.length){
        lines.forEach(function(line, index) {
            console.log(line, index)
            putLine(line, textStyle[index], time * index)
        });
    }
}

function arrowActions(event){
    const curr = parseInt(cursor.style.left.replace("px", ""))
    const pixelsToMove = 9 // 8px each letter
    const maxPx = textarea.value.length * pixelsToMove
    console.log("Key: " + event.key)
    /* Move the cursor over the text */
    if(event.keyCode === 37 && Math.abs(curr) < maxPx){ // Left
        cursor.style.left = (curr - pixelsToMove) + "px"
    }
    if(event.keyCode === 39 && curr < 0){ // Right
        cursor.style.left = (curr + pixelsToMove) + "px"
    }
}

function newTab(url, time){
    setTimeout(function() {
        window.open(url, "_blank").focus()
    }, time)
}