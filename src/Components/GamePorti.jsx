import React from 'react'
import GameCard from './Games_cards'
import GameCarData from './GAmes_data'
import '../AStyles/WorkCard.css'

const GamePorti = () => {
    return (
        <div className='Work_div'>
            <h1 className="project_heading" >
                Games
            </h1>

            <div className="porjects_container">
                {GameCarData.map((value, index) => {
                    return (
                        <GameCard
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}
                            view={value.view}
                            source={value.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default GamePorti