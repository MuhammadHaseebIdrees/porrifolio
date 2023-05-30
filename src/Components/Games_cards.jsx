import React from 'react'
import '../AStyles/WorkCard.css'

import miqo from '../Assets/miqo.jpeg'
import kingofprizes from '../Assets/kingofprizes.jpeg'
import bakery from '../Assets/bakery.jpeg'
import { Link } from 'react-router-dom'

const GameCard = (props) => {
    return (
        <div className="projects_card">
            <img src={props.imgsrc} alt="Image" />
            <h2 className='card_title_work'>{props.title}</h2>
            <div className='workCard_deatails'>
                <p className='work_description'>{props.text}</p>
                <div className="work_card_btns">
                    <Link to={props.view} target='blank' className='work_card_single_btn'>
                        View
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GameCard