import React, {useEffect, useState} from "react";

const UnmountTest = () => {
    useEffect(() => {
        console.log("Mount!!");

        return () => {
            console.log("Unmount!!"); // Unmount 시점에 실행
        }
    }, []);

    return <div>Unmount Testing Component</div>
}


const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isVisible, setVisible] = useState(false);
    const toggle = () => setVisible(!isVisible);

    useEffect(() => {
        console.log("Mount");
    }, []);

    useEffect(() => {
        console.log("Update");
    });

    useEffect(() => {
        console.log(`Count is update : ${count}`);
        if (count > 5) {
            alert("count가 5를 넘었습니다. 1로 초기화 됩니다.");
            setCount(1);
        }
    }, [count]);

    useEffect(() => {
        console.log(`Text is update : ${text}`);
    }, [text]);

    return (
        <div style={{padding: 20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest/>}
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    );
}

export default Lifecycle;