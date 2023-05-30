import React, { useEffect, useState } from 'react'
import '../AStyles/MemoryGame.css'

import one from '../Assets/html.png'
import Two from '../Assets/css.png'
import Three from '../Assets/js.png'
import Four from '../Assets/scss.png'
import Five from '../Assets/react.png'
import Six from '../Assets/vue.png'
import Seven from '../Assets/angular.png'
import Eight from '../Assets/nodejs.png'

const MemoryGame = () => {

  const [prev, setPrev] = useState(-1)
  const [items, setItems] = useState([
    { id: 1, image: <img src={one} alt="aliali" />, stat: "" },
    { id: 1, image: <img src={one} alt="aliali" />, stat: "" },
    { id: 2, image: <img src={Two} alt="aliali" />, stat: "" },
    { id: 2, image: <img src={Two} alt="aliali" />, stat: "" },
    { id: 3, image: <img src={Three} alt="aliali" />, stat: "" },
    { id: 3, image: <img src={Three} alt="aliali" />, stat: "" },
    { id: 4, image: <img src={Four} alt="aliali" />, stat: "" },
    { id: 4, image: <img src={Four} alt="aliali" />, stat: "" },
    { id: 5, image: <img src={Five} alt="aliali" />, stat: "" },
    { id: 5, image: <img src={Five} alt="aliali" />, stat: "" },
    { id: 6, image: <img src={Six} alt="aliali" />, stat: "" },
    { id: 6, image: <img src={Six} alt="aliali" />, stat: "" },
    { id: 7, image: <img src={Seven} alt="aliali" />, stat: "" },
    { id: 7, image: <img src={Seven} alt="aliali" />, stat: "" },
    { id: 8, image: <img src={Eight} alt="aliali" />, stat: "" },
    { id: 8, image: <img src={Eight} alt="aliali" />, stat: "" },
  ].sort(() => Math.random() - 0.5));

  const checkPair = (current) => {
    if (items[current].id == items[prev].id) {
      items[current].stat = "success"
      items[prev].stat = "success"
      setItems([...items]);
      setPrev(-1)
    }
    else {
      items[current].stat = "wrong"
      items[prev].stat = "wrong"
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = ""
        items[prev].stat = ""
        setItems([...items]);
        setPrev(-1)
      }, 1000);
    }
  }

  const handleClick = (id) => {
    if (prev === -1) {
      items[id].stat = "active"
      setItems([...items]);
      setPrev(id)
    }
    else {
      checkPair(id)
    }
  };



  return (
    <div className='memory_game_main_div'>

      <div className="app_memory_game_heading">
        Memory Game - React
      </div>

      {/* <MemoryCards /> */}
      <div className="memory_game_container">
        {
          items.map((post, index, id) => {
            const itemClass = post.stat ? `active ${post.stat}` : "";
            return (
              <div
                className={`single_card_memory ${itemClass} `}
                key={index}
                post={post}
                id={index}
                onClick={() => handleClick(index)}
              >
                {post.image}
              </div>
            );
          })
        }

      </div>
    </div>
  )
}

export default MemoryGame