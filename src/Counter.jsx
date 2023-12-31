import React, {useState} from 'react';
import './index.css'
const Counter = () =>{
    const [count, setCount] = useState(0);
    
    let increment = () =>{
        setCount(count + 1);
    }
    let decrement = () =>{
        setCount(count - 1);
    }


    return(

        <>
        <div className='container'>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>IDecrement</button>
        </div>
        </>
    )
}
export default Counter;