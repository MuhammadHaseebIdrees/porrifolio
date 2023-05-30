import React from 'react'
import WorkCard from './WorkCard'
import WorkCarData from './WorkCardData'
import '../AStyles/WorkCard.css'

const Work = () => {
    return (
        <div className='Work_div'>
            <h1 className="project_heading" >
                Projects
            </h1>

            <div className="porjects_container">
                {WorkCarData.map((value, index) => {
                    return(
                        <WorkCard 
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

export default Work