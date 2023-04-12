import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
      <header>
        <nav>
        <a href="#1"><h2 className='name'>AMIRIAR</h2></a>
          <ul>
            <li><a href='#1'>Home</a></li>
            <li><a href='#2'>Works</a></li>
            <li><a href='#3'>About</a></li>
          </ul>
        </nav>
        <article id='1'>
          <div className="id">
            <div className='left'>
              <h2 className='tozih'>Hi, My name is Amirreza Abdolrahimi and i'm a frontend web devloper! and i know some of them languages like:</h2>
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
          <span className='follow'><a href='#2' className='ff' >follow me down here!</a></span>
        </article>
        <article id='2' className='article2'>
          <div className='about'>

          </div>
        </article>
        <article id='3'>

        </article>
      </header>
      <main>

      </main>
    </div>
  )
}

export default App
