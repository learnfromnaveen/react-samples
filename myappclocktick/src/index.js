import React from 'react'
import ReactDOM from 'react-dom'


/*
   The beauty of react is that, whene element is rendered to DOM  
   it's going to updates only the once which is changed from previous update.  

   We are going to demonstrate this by writing simple clock tick code which refereshes the  
   DOM every 1 second using setInterval javascript method 
    
*/
const user = {
  firstName: 'Scott',
  lastName: 'Jordan'
};

function formatName(user) {
  return user.firstName + ", " + user.lastName;
}

function tick() {

  const element = (
    <div>
      <h1>Hello {formatName(user)}</h1>
      <h2>Time now is : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(() => {
  tick();
  console.log('Ticker is called');
}, 1000);
