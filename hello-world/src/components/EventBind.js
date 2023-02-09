import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "hello"
      }
    }
    clickHandler(){
        this.setState({
            message : "Goodbye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Button 3 </button> 
      </div>
    )
  }
}

export default EventBind
