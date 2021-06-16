import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: 'black'
    }
  }

  increment = () => {
    this.setState({...this.state,
      count: this.state.count += 1
    })
    if(this.state.count > 0){
      this.setState({...this.state, color: 'green'})
    }
  };
  
  decrement = () => {
    this.setState({...this.state,
      count: this.state.count -= 1
    })
    if(this.state.count < 0){
      this.setState({...this.state, color: 'red'})
    }
  };

  reset = () => {
    this.setState({...this.state,
      count: 0,
      color: 'black'
    })
  };

  
  render(){
    let count = this.state.count;
    return(
      <div className="App">
        <h2>Count:</h2>
        <h2 style={{color: this.state.color}}>{count}</h2>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
};

export default App;
