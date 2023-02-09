import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("clicked the button 2")
    }
  render() {
    return (
      <div>
        <button onClick = {this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
