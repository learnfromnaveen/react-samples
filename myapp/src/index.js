import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const user = {
  firstName: 'Vivaan',
  lastName: 'Naveen',
  dob: '06/08/2013'
};

function formatName(user) {
  return user.firstName + ", " + user.lastName;
}
//ReactDOM.render(element, document.getElementById('root'));

/*
function tick() {

  const element = (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <h2>Time now is : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(() => {
  tick();
  console.log('Ticker is called');
}, 1000);

*/




//function component 
//syntax  
/*
    function <ComponentName>(props){
      return (
        //JSX 
      );
    }
*/

/*
function Welcome(props){ 
  return (
    <h1>Welcome to function component, {formatName(props.userDetail)}</h1>
  );
}


const rootElement = (
  <div> 
    <Welcome userDetail={user}/>
  </div>
);


ReactDOM.render(rootElement, document.getElementById('root'));
*/
