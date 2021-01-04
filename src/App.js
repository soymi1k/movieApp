import PropTypes from "prop-types";
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => { //인자값을 갖지않는 add라는 이름의 function 생성
    this.setState(current => ({ count : current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count : current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
