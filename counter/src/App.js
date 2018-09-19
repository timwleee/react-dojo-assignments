import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
      count: 0
    };

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.count}
        <br/>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

// state = {
//   count: 0
// };

// increment = () => {
//   this.setState({ count: this.state.count + 1 });
// }

// render() {
//   return(
//     <div>
//       <button onClick={this.increment}>Increment</button>
//       {this.state.count}
//     </div>
//   )
// }
// }

export default App;
