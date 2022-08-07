/* Constantes */
const email = "danielhervasrodao(at)gmail.com"
const github = "https://github.com/dhrodao"
const linkedin = "https://www.linkedin.com/in/danielhervasrodao/"

/* Mensajes predefinidos */
const banner = [
    'Made by dhrodao. All rights reserved',
    '</br>',
    'Welcome to my interactive terminal',
    'To see the available commands you can type <span class="command">\'help\'</span>',
    '</br>'
]

const help = [
    '<br>',
    'Available commands list:',
    '     <span class="command">\'help\'</span>           To see a list with the available commands',
    '     <span class="command">\'whoami\'</span>         To see more info about the creator',
    '     <span class="command">\'socials\'</span>        To see my socials links',
    '     <span class="command">\'projects\'</span>       To see my personal projects',
    '<br>',
]

const whoami = [
    '<br>',
    '     Hey, I\'m Daniel Hervás Rodao, the creator of this simple app.',
    '<br>',
    '     I\'m a Telematics Engineer passionated about technology and I\'m currently',
    '     working as a Junior Engineer @ Indra.',
    '<br>',
    '     If you want to know more about me, you can visit my socials.',
    '<br>',
]

const socials = [
    '<br>',
    `     email            <a class="link" href="mailto:${email.replace("(at)", "@")}">${email}</a>`,
    `     github           <a class="link" href="${github}" target="_blank">github/dhrodao</a>`,
    `     linkedin         <a class="link" href="${linkedin}" target="_blank"">linkedin/danielhervasrodao</a>`,
    '<br>',
]

const projects = [
    '<br>',
    `     You can see my projects by visiting my github profile.`,
    '     Redirecting to dhrodao\'s github profile...',
    '<br>',
]

/* Estilos de los mensajes */
const bannerStyle = ['bold','','','','',]
const helpStyle = ['','','','','','','']
const whoamiStyle = ['','','','','','','','']
const socialsStyle = ['','','','','']
const projectsStyle = ['','','','']