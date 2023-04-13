import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className="App">
      <header>
        <div className='navv'>
        <nav>
          <ul>
            <li><a href='#1'>Home</a></li>
            <li><a href='#2'>About</a></li>
            <li><a href='#1' className='name'>AMIRIAR</a></li>
            <li><a href='#3'>Works</a></li>
            <li><a href='#4'>Contact</a></li>
          </ul>
        </nav>
        </div>
        <article id='1'>
          <div className="id">
            
            <div className='right'><img className='meimg' src="/icon.png" alt="amir's photo" draggable="false" /></div>
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
          </div>
          <span className='follow'><a href='#2' className='ff' >follow me down here!</a></span>
        </article>
        </header>
        <article id='2' className='article2'>
          <div className='about'>
          <div className='left2'>i'm amirreza abdolrahimi and my mission today is to stay mitovated and move forward as the technology and world goes !
           i've been coding and working as a frontend web developer and trying to live of off that !(if you know what i mean..)<br/>
            ilon musk once said : try to be useful. are you contributing more than you consume? i wanna know it !</div>
            <div className="right2">
              <div className="coolpic">
              {/* <img src="/Sup.jpg" alt="amiriar is is" className='img' draggable="false" /> */}
              
                
               <svg>
                <defs>
                  <filter id="noise">
                    <feTurbulence
                      baseFrequency="0.7,0.8"
                      seed="0"
                      type="fractalNoise"
                      result="static"
                    >
                      <animate
                        attributeName="seed"
                        values="0;100"
                        dur="800ms"
                        repeatCount="1" 
                        begin="card.mouseenter"                           
                      />
                    </feTurbulence>
                     <feDisplacementMap in="SourceGraphic" in2="static">
                       <animate
                         attributeName="scale"
                         values="0;40;0"
                         dur="800ms"
                         repeatCount="1" 
                         begin="card.mouseenter"                           
                       />
                     </feDisplacementMap>
                  </filter>  
                </defs>
              </svg>
              <div id="card">
                <img 
                  src="/Sup.jpg" 
                  alt="Neon sign in woods" 
                  className='coolme'
                />
              </div> 

              </div>
              </div>
          </div>
        </article>
        <article id='3'>

        </article>
        <footer id='4'>

        </footer>
      
    </div>
  )
}

export default App
