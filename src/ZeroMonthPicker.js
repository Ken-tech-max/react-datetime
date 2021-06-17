import React from "react";

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

import "./styles.css";

let inputProps={ placeholder:'MaxDate',
onChange:(date)=>{alert("AC")}
}

export default class ZeroMonthPicker extends React.Component {
    
    constructor(props) {
        super(props);
    };
    
    onChangeDate = (date) => {
        console.log('onChange:',  date.format("YYYY"));
    }


    render(){
        return <Datetime
        className="zero-month-picker"
        dateFormat={!this.props.yearFlag?"YYYY":"YYYY-MM"} 
        timeFormat={false}
        onChange={this.onChangeDate}
        inputProps={inputProps}
        closeOnClickOutside
        closeOnSelect
        />;
    }
}