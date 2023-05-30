import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Projects from './Routes/Projects'
import About from './Routes/About'
// import Extra from './Routes/Extra.jsx'
// import Bakery from './Routes/Bakery'
// import ImageSlider from './Routes/ImageSlider'
// import UrbanGarden from './Routes/UrbanGarden'
// import PexaPark from './Routes/PexaPark'
import TicTacToe from './Components/TicTacToe'
// import SliderPrac from './Components/SliderPrac'
import Weather from './Routes/Weather'
import MemoryGame from './Components/MemoryGame'

const App = () => (

    <div className='app_main'>

        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            {/* <Route exact path='/ext' element={<Extra />} /> */}
            {/* <Route exact path='/bakery' element={<Bakery />} /> */}
            {/* <Route exact path='/d' element={<ImageSlider />} />
            <Route exact path='/garden' element={<UrbanGarden />} />
            <Route exact path='/pexapark' element={<PexaPark />} /> */}
            <Route exact path='/tictactoe' element={<TicTacToe />} />
            {/* <Route exact path='/slider' element={<SliderPrac />} /> */}
            <Route exact path='/weather' element={<Weather />} />
            <Route exact path='/memorygame' element={<MemoryGame />} />
        </Routes>
    </div>

)

export default App;