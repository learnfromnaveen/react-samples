import React from 'react'
import ReactDOM from 'react-dom'


/* 
    syntax:  
    class <ComponentName> extends React.Component{ 
      render() { 
        return(
          //JSX 
        )  
      }
    }
*/
class Welcome extends React.Component{
  render(){
    //To access the attributes passed to component  
    // use this.props.<attribute_name>
    return(
      <h1>Welcome to class component, {this.props.name}</h1>
    )
  }
}

const element = (
  <div>
    <Welcome name="Smith"/> 
  </div>
);

ReactDOM.render(element, document.getElementById("root"));