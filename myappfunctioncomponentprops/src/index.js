import React from 'react'
import ReactDOM from 'react-dom'


const user = {
  firstName: 'Scott',
  lastName: 'Jordan'
};

function formatName(user) {
  return user.firstName + ", " + user.lastName;
}

/* 
    We are going to learn  
    1. How to creat a function component  
    2. Using function component inside JSX  
    3. How to pass properties to function components  
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
    <h1>Welcome to function component { formatName(props.userDetail) } </h1>
  );
}

//consuming function component in JSX 
const rootElement = (
  <div> 
    <Welcome userDetail={user}/>
  </div>
);


ReactDOM.render(rootElement, document.getElementById('root'));
