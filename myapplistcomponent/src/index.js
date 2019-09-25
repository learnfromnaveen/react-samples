import React from 'react'
import ReactDOM from 'react-dom'


const numbers  = [1,2,3,4,5];  


const listItems  = numbers.map ( (n) => <li>{n}</li>);

const element =  <ul>{
  listItems
}  
</ul>


ReactDOM.render(element, document.getElementById('root'));


/*
function ReactList(props){

  const listItems  =  props.numbers 
                     ? props.numbers.map((n) => <li key={n.toString()}>{n}</li>)
                      : <li key="-1">No numbers passed</li>;
   

  return(
    <ul>
      {listItems}
    </ul>
  )

}


const reactListElement =  <ReactList numbers={numbers}/>

ReactDOM.render(reactListElement, document.getElementById('root'));

*/