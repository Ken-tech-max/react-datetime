import React from "react";
import ReactDOM from "react-dom";
import ReactCalendar from "react-calendar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelect = (month, year) => {
    console.log(month, year);
  };

  render() {
    return (
      <ReactCalendar
        className="align-right"
        maxDetail="year"
        maxDate={new Date()}
        id="string"
        className="form-control"
        value={new Date()}
        onChange={function(selectedYear, selectedMonth) {
          console.log(selectedYear, selectedMonth);
        }}
        closeOnSelect
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
