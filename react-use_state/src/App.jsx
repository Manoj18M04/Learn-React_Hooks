import './App.css'
import {useState} from 'react'

function App() {

//  hooks cannot be inside the conditional clause and also cannot be inside the class components
//  Every function run, all the hooks inside the function must run, so no inside the conditional clause as it may or may not run.
//  And for every update in state, the component will re-render.

//   if(1 === 1) {
//     useState();
//   }

  const [state, setState] = useState({count: 0, sent: 'count'});
  const count = state.count;
  const sent = state.sent;

  function decrement() {
    // setCount(count - 1); //this is not the right way to set the state, because it will be same state before re-rendering, so the second use will be neglected.
    // spred operator {...} iused to maintain the unchanged state still.
    if(count > 0) {
      setState(prevState => {
        return {...prevState, count: prevState.count - 1}
      })
    }
    else {
      alert("Count is already Zero, Can't set Negative values")
    }
  }

  function increment() {
    setState(prevState => {
      return {...prevState, count: prevState.count + 1}
    })
  }

  return (
    <>
    <div className='cont'>
      <button onClick={decrement} className='button neg'> - </button>
      <span className='span'>{sent} is {count} </span>
      <button onClick={increment} className='button'> + </button>
    </div> 
    </>
  )
}

export default App
