import React from 'react'
import {connect} from 'react-redux'
// import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './Actions/'
import './App.css';

function App({count,increment,decrement}) {
  

  return (
    <div className="App">
      <button onClick={()=> decrement(5)} > - </button>
      <span> {count} </span>
      <button onClick={()=> increment(10) }> + </button>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    count : state.count
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{   
    increment : (payload)=> dispatch(increment(payload)),
    decrement : (payload)=>dispatch(decrement(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
