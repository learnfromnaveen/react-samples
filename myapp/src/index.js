import React from  'react'
import ReactDOM from 'react-dom'

import './index.css'


//JSX - Javascript Expression  // Extension 
const element = <div id="container" className="container">
                  <h2>Welcome to React!!!</h2>
                  <h3>Time now is {new Date().toLocaleTimeString()}</h3>
                 </div>


ReactDOM.render(
        element, 
        document.getElementById("root")
);