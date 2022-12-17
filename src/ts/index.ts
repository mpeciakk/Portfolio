import Typewriter from 'typewriter-effect/dist/core'

const typewriter = new Typewriter('#container', {
    delay: 50
})

function consolePrompt() {
    typewriter.typeString('m@ciek:~$ ').start()
}

function projects() {
    const projects = [
        {
            name: 'elite dangeous rich presence',
            date: 'Mar 25',
            time: '12:56',
            href: 'https://github.com/mpeciakk/EliteDangerousRichPresence'
        },
        {
            name: 'portfolio',
            date: 'Oct 17',
            time: '01:12',
            href: 'https://github.com/mpeciakk/Portfolio'
        }
    ]

    typewriter.typeString('ls -l projects/').changeDelay(1).typeString('<br />')

    for (const project of projects) {
        typewriter.typeString(project.date + ' ')
        typewriter.typeString(project.time + ' ')
        typewriter.typeString(`<a href="${project.href}">${project.name}</a>`)
        typewriter.typeString('<br />')
    }

    typewriter.typeString('<br />')

    typewriter.changeDelay(50).start()

    consolePrompt()
}

function aboutMe() {
    typewriter
        .typeString('cat aboutme.md')
        .changeDelay(1)
        .typeString('<br />')
        .typeString('young developer from Poland focusing mostly on websites and applications <br />')
        .typeString('skills: <br />')
        .typeString('html, css, ts, java <br />')
        .typeString('mostly using reactjs <br />')
        .typeString('mysql, mongodb <br />')
        .typeString('<br />')
        .changeDelay(50)
        .start()

    consolePrompt()
}

function contact() {
    typewriter
        .typeString('cat contact.txt')
        .changeDelay(1)
        .typeString('<br />')
        .typeString('<a href="https://discord.com/users/415202237720297473">discord</a><br />')
        .typeString('<a href="https://open.spotify.com/user/f9jsk7x61ohzosycevxt5b1af">spotify</a><br />')
        .typeString('<a href="https://github.com/mpeciakk">github</a><br />')
        .typeString('<br />')
        .changeDelay(50)
        .start()

    consolePrompt()
}

document.getElementById('projects')?.addEventListener('click', projects)
document.getElementById('about-me')?.addEventListener('click', aboutMe)
document.getElementById('contact')?.addEventListener('click', contact)

consolePrompt()