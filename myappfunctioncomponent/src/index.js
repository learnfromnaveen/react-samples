import React from 'react'
import ReactDOM from 'react-dom'


/* 
    We are going to learn  
    1. How to creat a function component  
    2. Using function component inside JSX  
 
*/ 

//function component syntax  
/*
    function <ComponentName>(props){
      return (
        //JSX 
      );
    }
*/

//Function Component 
function Welcome(props){ 
  return (
    <h1>Welcome to function component</h1>
  );
}

//consuming function component in JSX 
const rootElement = (
  <div> 
    <Welcome/>
  </div>
);


ReactDOM.render(rootElement, document.getElementById('root'));
