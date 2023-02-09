import React, { Component } from 'react'
import ChildCompoent from './ChildCompoent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childname){
        alert(`hello ${this.state.parentName} from ${childname}`)
    }
    
  render() {
    return (
      <div>
        <ChildCompoent greetHandler = {this.greetParent}></ChildCompoent>
      </div>
    )
  }
}

export default ParentComponent
