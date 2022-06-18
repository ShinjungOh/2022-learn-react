import React, {useRef, useState} from "react";
import './App.css';
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";
import Lifecycle from "./component/Lifecycle";

// const dummyList = [
//     {
//         id: 1,
//         author: "SJ",
//         content: "hello",
//         emotion: 1,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 2,
//         author: "SJ",
//         content: "hello",
//         emotion: 2,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 3,
//         author: "SJ",
//         content: "hello",
//         emotion: 3,
//         created_date: new Date().getTime(),
//     },
//     {
//         id: 4,
//         author: "SJ",
//         content: "hello",
//         emotion: 4,
//         created_date: new Date().getTime(),
//     },
// ];

function App() {
    const [data, setData] = useState([]);

    const dataId = useRef(0);

    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            created_date,
            id: dataId.current
        }
        dataId.current += 1;
        setData([newItem, ...data]);
    }

    const onRemove = (targetId) => {
        console.log(`${targetId}가 삭제됨`);
        const newDiaryList = data.filter(e => e.id !== targetId);
        setData(newDiaryList);
    }

    const onEdit = (targetId, newContent) => {
        setData(
            data.map(e => e.id === targetId ? {...e, content: newContent} : e)
        );
    }

    return (
        <div className="App">
            <Lifecycle/>
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
}

export default App;
