import React, { Component } from 'react'
import Hello from "./Hello";

class App extends Component {
  state = {
    greeting: 'Hi', 
    receiver: 'AppUser'
  }
  onChangeGreeting = () => {
    this.setState({
      greeting: 'Good afternoon'
    })
  }
  onChangeReceiver = () => {
    this.setState({
      receiver: 'Emiliano'
    })
  }
  render() {
    return (
      <div>
        {this.state.greeting} {this.state.receiver} <br/>
        <button onClick={this.onChangeGreeting}>Change greeting!</button>
        <br/>
        <button onClick={this.onChangeReceiver}>Change receiver</button>
        <Hello person = {this.state.receiver}/>
      </div>
    )
  }
}

export default App



