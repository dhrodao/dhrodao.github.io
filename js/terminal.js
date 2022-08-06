/* Mensajes predefinidos */
var welcomeMsg = `
              .:'
          __ :'__            _ _                   _
       .'\`__\`-'__\`\`.        | | |                 | |
      :__________.-'      __| | |__  _ __ ___   __| | __ _  ___   
      :_________:        /  \` | '_ \\| '__/ _ \\ / _\` |/ _\` |/ _ \\
       :_________\`-;    | (_| | | | | | | (_) | (_| | (_| | (_) | 
        \`.__.-.__.'      \\__,_|_| |_|_|  \\___/ \\__,_|\\__,_|\\___/                 
`

const banner = [
    '            .:',
    '         __:\'__            _ _             _',
    '       .\'`__`-\'__``..         | | |             | |',
    '       :_______.-\'       __| | |__ __ ___  __| | ___  ___',
    '       :_______:       /  ` | \'_ | \'__|/ _ \\ / _\` |/ _\` |/ _ \\',
    '       :_______\`-;     | (_| | | | | |  | (_) | (_| | (_| | (_) |',
    '        \`.__.-.__.\'      \\__,_|_| |_|_|  \\___/ \\__,_|\\__,_|\\____/'
]

/* Elementos */
const terminalScreen = document.getElementById("terminal")

/* Funciones */
function putLine(line, textStyle, time){
    var text = ""

    for(var i = 0; i < line.length; i++){
        if(line.charAt(i) == " " && line.charAt(i + 1)){
            text += "&nbsp;&nbsp;"
        }else{
            text += line.charAt(i)
        }
    }
    
    setTimeout(function () {
        var newLine = document.createElement("p")
        newLine.innerHTML = text
        newLine.className = textStyle

        terminalScreen.append(newLine)
    }, time)
}

function putLines(lines, textStyle, time){
    lines.forEach(function(line, index) {
        console.log(line, index)
        putLine(line, textStyle, time * index)
    });
}

