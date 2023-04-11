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
              <h1 className='tozih'>Hi, My name is Amirreza Abdolrahimi and i'm a frontend web devloper!</h1>
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
