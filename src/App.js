import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class SubmitResult extends Component {
  constructor() {
    super();
    this.props.result = 'No results yet';
  }


}

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname : 'Hola',
      lastname : 'Mundo'
    }
    
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    e.preventDefault();
    let target = e.target.name;
    
    let temp = this.state[target];
    
    this.setState(this.state[target] = e.target.value)
    
    
    // console.log(e);
    // console.log(this.state.firstname, this.state.lastname);
    // event.target.setState({});
    // this.setState({});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <form>
            <span>First name:</span><br/>
            <input type="text" name="firstname" onChange={this.handleChange} value={this.state.firstname}/>
            <br/>
            Last name:<br/>
            <input type="text" name="lastname" value={this.state.lastname}/>
            <br/><br/>
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>

          <submitResult result={this.props.result}></submitResult>
        </div>
      </div>
    );
  }
}

export default App;
