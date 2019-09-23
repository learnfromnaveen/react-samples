import React from 'react'
import ReactDOM from 'react-dom'

function ActionLink(){

  function onLinkClick(e){
    console.log("Click event was fired");  
  }

  return(
    <a href="#" onClick={onLinkClick}>Click Here</a> 
  );
}

ReactDOM.render(<ActionLink/>, document.getElementById('root'));