import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NasaDatepicker = (props) => {
    return (
        <DatePicker className="nav-bar" selected={props.startDate} onChange={(date) => props.setStartDate(date)} />
    )
}

export default NasaDatepicker;