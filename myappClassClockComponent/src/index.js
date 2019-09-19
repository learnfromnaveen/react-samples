import React from 'react'
import ReactDOM from 'react-dom'



class Clock extends React.Component{

  //should declare constructor with keyword constructor
  constructor(props){
    //1. Pass props to base class constructor 
    super(props);
    //2.create a state
    this.state  = { 
      date : new Date()
    } ;
  }

 
  /*
    The componentDidMount() method runs after
     the component output has been rendered to the DOM.
     This is a good place to set up a timer:
  */
  componentDidMount(){
   this.timerID =   setInterval(() => {
      this.tick();
    }, 1000);
  }

  /*
    If the Clock component is ever removed from the DOM, 
    React calls the componentWillUnmount() lifecycle method 
    so the timer is stopped.
  */
 
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    var newState =   {
      date: new Date()
    } ;

    this.setState(newState);
  }


  render(){ 

    return(
      <div> 
        <h1>Hello {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )

  }

}

const element = (
 <div>
   <Clock name="Smith"/>
 </div>
);

ReactDOM.render(element, document.getElementById("root"));