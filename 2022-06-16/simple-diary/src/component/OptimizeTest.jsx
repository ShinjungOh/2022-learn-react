import React, {useEffect, useState} from "react";

const CounterA = React.memo(({count}) => {
        useEffect(() => {
            console.log(`A update : ${count}`);
        });
        return <div>{count}</div>;
    }
);

const CounterB = ({obj}) => {
    useEffect(() => {
        console.log(`B update : ${obj.count}`);
    });
    return <div>{obj.count}</div>;
}

const areEqual = (prevProps, nextProps) => {
    return prevProps.obj.count === nextProps.obj.count;
}

const MemoizeCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1,
    });

    return (
        <div style={{padding: 50}}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count}/>
                <button onClick={() => setCount(count)}>A Btn</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizeCounterB obj={obj}/>
                <button onClick={() => setObj({
                    count: obj.count,
                })}>B Btn
                </button>
            </div>
        </div>
    );
}

export default OptimizeTest;