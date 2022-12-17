import './commands.css'

function Projects() {
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

  return (
    <div className="projects">
      <span>m@ciek:~$ </span>
      <span>ls -l projects/</span><br />
      <table>
        <tbody>
          {projects.map((project, i) =>
            <tr key={i}>
              <td>{project.date}</td>
              <td>{project.time}</td>
              <td><a href={project.href}>{project.name}</a></td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default Projects