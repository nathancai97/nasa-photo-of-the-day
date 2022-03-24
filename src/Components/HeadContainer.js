import React from 'react'
import NasaDatePicker from './NasaDatepicker'
import styled from 'styled-components'

const StyledDatePicker = styled.div`
.datepicker-react {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1.5%;
}
`

const StyledHeader = styled.div`
  .nasa-logo {
    display: flex;
    width: 5%;
    margin-left: 5%;
  }
  
  .nav-bar a {
    display:flex;
    margin-left: 90%;
  }

  a {
      display: flex;
      justify-content: flex-end;
      margin-right: 5%;
  }

  `

const HeadContainer = (props) => {
    return (
        <div className="head-container">
            <StyledHeader>
            <img className="nasa-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">NASA API</a>
            <StyledDatePicker className="datepicker-react">
                <NasaDatePicker className="nasa-nav-bar" startDate={props.startDate} setStartDate={props.setStartDate} />
            </StyledDatePicker>
            </StyledHeader>
            </div>
    );
};

export default HeadContainer;