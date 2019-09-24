import React from 'react'
import ReactDOM from 'react-dom'

class ToggleButton extends React.Component{

  constructor(props){
    super(props);  

    this.state =  { 
      isToggleOn : true
    }

    //Register onButtonClick event  
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  //onButtonClick event
  onButtonClick(){ 
      this.setState( state => (
        {
          isToggleOn : !state.isToggleOn
        }
      ));
  }

  render() { 
    return (
      <button onClick={this.onButtonClick}>{ this.state.isToggleOn ? "ON" : "OFF" }</button>
    )
  }
}

ReactDOM.render(<ToggleButton/>, document.getElementById('root'));