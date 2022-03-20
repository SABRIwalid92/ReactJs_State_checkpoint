import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Profile from "./components/Profile";
import Button from "react-bootstrap/Button";
class App extends React.Component {
  state = {
    shows: true,
    time: 0,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      let count = 0;
      count = this.state.time + 1;
      this.setState({ time: count });
    }, 1000);
  }
  handleClick1 = () => {
    this.setState({ shows: false });
    clearInterval(this.interval);
  };
  handleClick2 = () => {
    this.setState({ time: 0, shows: true });
    this.interval = setInterval(() => {
      let count = 0;
      count = this.state.time + 1;
      this.setState({ time: count });
    }, 1000);
  };

  render() {
    const { shows, time } = this.state;

    return (
      <div>
        {shows ? (
          <button onClick={this.handleClick1}>Hide</button>
        ) : (
          <button onClick={this.handleClick2}>Show</button>
        )}
        {shows ? (
          <Profile />
        ) : (
          <>
            <img src="https://miro.medium.com/max/700/0*P8MYjEWMUJ-At_Mu.jpeg" />
            <p>This is actually me</p>
          </>
        )}
        <h2>{time}ms</h2>
      </div>
    );
  }
}
export default App;
