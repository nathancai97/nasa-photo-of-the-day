import React from 'react'

const NasaPhoto = (props) => {
    return (
        <div className='nasa-photo-container'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className="img-explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;