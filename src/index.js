import React from "react";

import ReactDOM from "react-dom";

import ZeroMonthPicker from "./ZeroMonthPicker";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSelect = (month, year) => {
        console.log(month, year);
    };

    render() {
        return ( <ZeroMonthPicker 
            className = "monthPicker"
            yearFlag={true}
            onChange = {
                function(selectedYear, selectedMonth) {
                    console.log(selectedYear, selectedMonth);
                }
            }
            closeOnSelect/>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render( <App/> , rootElement);