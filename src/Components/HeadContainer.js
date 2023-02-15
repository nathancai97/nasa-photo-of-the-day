import React from "react";
import NasaDatePicker from "./NasaDatepicker";
import styled from "styled-components";
import { UncontrolledAlert } from "reactstrap";

const StyledDatePicker = styled.div`
  .datepicker-react {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1.5%;
  }
`;

const StyledHeader = styled.div`
  .nasa-logo {
    display: flex;
    width: 5%;
    margin-left: 5%;
  }

  a {
    display: flex;
    justify-content: flex-end;
    margin-right: 5%;
    align-items: center;
    flex-direction: row;
  }
`;

const HeadContainer = (props) => {
  return (
    <div className="head-container">
      <StyledHeader>
        <img
          className="nasa-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="nasa logo"
        />
        <a href="https://api.nasa.gov/">NASA API</a>
        <StyledDatePicker className="datepicker-react">
          <div>
            <UncontrolledAlert color="secondary">
              Choose a different date!
            </UncontrolledAlert>
          </div>
          <NasaDatePicker
            className="nasa-nav-bar"
            startDate={props.startDate}
            setStartDate={props.setStartDate}
          />
        </StyledDatePicker>
      </StyledHeader>
    </div>
  );
};

export default HeadContainer;
