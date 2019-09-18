import React from 'react'
import ReactDOM from 'react-dom'

/*
   After coding below lines we will learn  
   1. How to write JSX having expressions calling function 
   2. Passing JSON objects to function within JSX
*/

const user = {
  firstName: 'Scott',
  lastName: 'Jordon'
};

function formatName(user) {
  return user.firstName + ", " + user.lastName;
}

const element = ( 
  <h1>Welcome to React { formatName(user) } </h1> 
);

ReactDOM.render(element, document.getElementById('root'));