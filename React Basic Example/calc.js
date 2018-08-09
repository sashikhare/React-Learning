import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const rootElement = document.getElementById("root");
class Calculator extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { answer: '', firstNumber: '', secondNumber: '', operation: '' };

    this.handleFirstNumber =this.handleFirstNumber.bind(this);
    this.handleSecondNumber = this.handleSecondNumber.bind(this);
    this.handleOperation=this.handleOperation.bind(this);
  }
  //alert(h1);
  
  handleFirstNumber(event) {
    this.setState({ firstNumber: event.target.value });
  }
  handleSecondNumber(event) {
    this.setState({ secondNumber: event.target.value });
  }
  handleOperation = event => {
    this.setState({ operation: event.target.value });
  }
  handleSubmit =event=>{
    alert(this.state.operation);
    alert(this.state.firstNumber);
    alert(this.state.secondNumber);

    if (this.state.operation === "Addition") {
      this.state.answer = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
      this.setState({ answer: this.state.answer });
    } else if (this.state.operation === "Subtraction") {
      this.state.answer = this.state.firstNumber - this.state.secondNumber;
      this.setState({ answer: this.state.answer });
    } else if (this.state.operation === "Multiplication") {
      this.state.answer = this.state.firstNumber * this.state.secondNumber;
      this.setState({ answer: this.state.answer });
    } else {
      this.state.answer = this.state.firstNumber / this.state.secondNumber;
      this.setState({ answer: this.state.answer });
    }
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <label>Enter First Number</label>
            </td>
            <td>
              <input type="text" value={this.state.firstNumber} onChange={this.handleFirstNumber} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Enter Second Number</label>
            </td>
            <td>
              <input type="text" value={this.state.secondNumber} onChange={this.handleSecondNumber} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Operation</label>
            </td>
            <td colSpan='2'>
              <select
                id="operation"
                value={this.state.operation}
                onChange={this.handleOperation}
              >
                <option>Select</option>
                <option value="Addition">Addition</option>
                <option value="Subtraction">Subtraction</option>
                <option value="Multiplication">Multiplication</option>
                <option value="Division">Division</option>
              </select>
              <td>
              <input type="submit" value="Submit" onClick={this.handleSubmit} />
              </td>
            </td>
          </tr>   
          <tr>
            <td>
              <label>Answer is</label>
            </td>
            {this.state.answer.toString()}
            <td />
          </tr>
        </table>
      </div>
    );
  }
}
ReactDOM.render(<Calculator />, rootElement);

