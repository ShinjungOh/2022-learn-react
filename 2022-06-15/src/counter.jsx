import React, {useState} from "react";

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const onIncrease1 = () => {
        setCount1(count1 + 1);
    }

    const onDecrease1 = () => {
        setCount1(count1 - 1);
    }

    const onIncrease2 = () => {
        setCount2(count2 + 1);
    }

    const onDecrease2 = () => {
        setCount2(count2 - 1);
    }

    return (
        <div>
            <h2>{count1}</h2>
            <button onClick={onIncrease1}>+</button>
            <button onClick={onDecrease1}>-</button>
            
            <h2>{count2}</h2>
            <button onClick={onIncrease2}>+</button>
            <button onClick={onDecrease2}>-</button>
        </div>

    );
}

export default Counter;