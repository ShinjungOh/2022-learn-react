import React, {useEffect, useRef, useState} from "react";
import './App.css';
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";

// https://jsonplaceholder.typicode.com/comments

function App() {
    const [data, setData] = useState([]);

    const dataId = useRef(0);

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json());

        const initData = res.slice(0, 20).map(e => {
            return {
                author: e.email,
                content: e.body,
                emotion: Math.floor(Math.random() * 5) + 1,
                created_date: new Date().getTime(),
                id: dataId.current++,
            }
        });

        setData(initData);
    }

    useEffect(() => {
        getData();
    }, []);

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
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
}

export default App;
