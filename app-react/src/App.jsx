import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
      <header>
        <nav>
        <a href="#1"><h2 className='name'>AMIRIAR</h2></a>
          <ul>
            <li>Home</li>
            <li>Works</li>
            <li>About</li>
          </ul>
        </nav>
        <article id='1'>
          <div className="id">
            <div className='left'>
              <h2 className='tozih'>Hi, My name is Amirreza Abdolrahimi and i'm a frontend web devloper! <br /> i know some of them languages like:</h2>
              <div className='langs'>
                <img src="/html.png" alt="html" className='langpic' draggable="false"/>
                <img src="/css.png" alt="css" className='langpic' draggable="false"/>
                <img src="/sass.png" alt="sass" className='langpic' draggable="false"/>
                <img src="js.png" alt="js" className='langpic' draggable="false"/>
                <img src="react-img.png" alt="react" className='langpic' draggable="false" />
              </div>
            </div>
            <div className='right'><img className='meimg' src="/icon.png" alt="amir's photo"/></div>
          </div>
        </article>
      </header>
      <main>

      </main>
    </div>
  )
}

export default App
