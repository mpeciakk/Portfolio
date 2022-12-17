import { useState } from 'react';
import AboutMe from '../commands/AboutMe';
import Contact from '../commands/Contact';
import Projects from '../commands/Projects';
import Navbar from '../navbar/Navbar'
import './App.css'

function App() {
  const [children, setChildren] = useState([])

  return (
    <div className="app">
      <div className='app-container'>
        <Navbar selectOption={(option) => {
          if (option === 'projects') {
            setChildren([...children, <Projects />])
          } else if (option === 'contact') {
            setChildren([...children, <Contact />])
          } else if (option === 'about me') {
            setChildren([...children, <AboutMe />])
          }
        }} />

        {children}
      </div>
    </div>
  );
}

export default App;
