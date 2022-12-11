// ReactDOM.render(<h1>hello, everyone</h1>,document.getElementById("root"))

// ReactDOM.render(
// <ul><li>Thing 1 </li>
// <li>thing 2</li></ul>,
// document.getElementById("root")
// )

//doesn't work
// import React,{useState,useEffect } from 'react';

// function Maincontent() {
//     return {
//         <h1>afdafs</h1>
//     }
// }


// ReactDOM.render(
//     <div> <Maincontent /></div>,document.getElementById("root")
// )



const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"

document.getElementById("root").append(h1)