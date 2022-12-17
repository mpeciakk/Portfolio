import './Navbar.css'

function Navbar({ selectOption }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={selectOption.bind(this, "about me")}><span>[ About me ]</span></li>
        <li onClick={selectOption.bind(this, 'projects')}><span>[ Projects ]</span></li>
        <li onClick={selectOption.bind(this, "contact")}><span>[ Contact ]</span></li>
      </ul>
    </nav>
  )
}

export default Navbar