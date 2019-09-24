import React from 'react'
import ReactDOM from 'react-dom'

function GreetGuest(){
  return (<h1>Welecom Guest!!!!</h1>)
}

function GreetUser(props){ 
  return(<h1>Welcome {props.user}</h1>)
}

function Greeting(props){ 
   return props.user ? (<GreetUser user={props.user}/>) : (<GreetGuest/>);
}


const element =  <div>
  <Greeting/>
  <Greeting user='Smith'/> 
</div>

ReactDOM.render(element, document.getElementById('root'));