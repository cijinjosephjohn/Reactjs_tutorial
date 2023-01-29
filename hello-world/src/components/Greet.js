import React from 'react'
import App from '../App'

//functional component
const Greet = (props) =>{ 
// console.log(props)
return (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroname}</h1>
        {props.children}
    </div>
    )
}
export default Greet