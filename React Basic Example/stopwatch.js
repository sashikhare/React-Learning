import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var t = null;
const rootElement = document.getElementById("root");
class StopWatch extends React.Component {
  //alert(h1);
  state = { minutes: 0, hours: 0, seconds: 0 };
  startwatch = event => {
    var minutes = this.state.minutes;
    var hours = this.state.hours;
    var seconds = this.state.seconds;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    this.setState({ minutes: minutes, hours: hours, seconds: seconds });
  };
  start = event => {
    if (t === null) {
      t = setInterval(this.startwatch, 1000);
    }
  };
  //start();
  clear = event => {
    this.setState({ minutes: 0, hours: 0, seconds: 0 });
    //h1.textContent = "00:00:00";
  };
  stop = event => {
    clearInterval(t);
    t = null;
  };
  render() {
    return (
      <div>
        <h1 id="number">
          <time>
            {this.state.hours.toString().padStart(2, "0")}:{this.state.minutes
              .toString()
              .padStart(2, "0")}:{this.state.seconds
              .toString()
              .padStart(2, "0")}
          </time>
        </h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.clear}>Reset</button>
      </div>
    );
  }
}
ReactDOM.render(<StopWatch />, rootElement);

