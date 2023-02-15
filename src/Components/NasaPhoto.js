import React from 'react'
import styled from 'styled-components'

const StyledNasa = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: ${pr => pr.theme.purple};
    }

    h3 {
        color: ${pr => pr.theme.lightPurple};
    }

    p {
        color: ${pr => pr.theme.lilac};
    }
    img {
        max-width: 100%;
        height: 100vh;
      }
    .img-explanation {
        width: 50%;
      }
`

const NasaPhoto = (props) => {
    return (
        <StyledNasa className='nasa-photo-container'>
            <h1>NASA Photo Of The Day</h1>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} alt="nasa" />
            <p className="img-explanation">{props.photo.explanation}</p>
        </StyledNasa>
    )
}

export default NasaPhoto;