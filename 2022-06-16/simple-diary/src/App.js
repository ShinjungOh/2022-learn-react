import React, {useEffect, useMemo, useRef, useState} from "react";
import './App.css';
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";
import OptimizeTest from "./component/OptimizeTest";

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
        const newDiaryList = data.filter(e => e.id !== targetId);
        setData(newDiaryList);
    }

    const onEdit = (targetId, newContent) => {
        setData(
            data.map(e => e.id === targetId ? {...e, content: newContent} : e)
        );
    }

    const getDiaryAnalysis = useMemo(
        () => {
            const goodCount = data.filter(e => e.emotion >= 3).length;
            const badCount = data.length - goodCount;
            const goodRatio = (goodCount / data.length) * 100;
            return {goodCount, badCount, goodRatio}
        }, [data.length]);

    const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

    return (
        <div className="App">
            <OptimizeTest/>
            <DiaryEditor onCreate={onCreate}/>
            <div>전체 일기 : {data.length}</div>
            <div>기분 좋은 일기 개수 : {goodCount}</div>
            <div>기분 나쁜 일기 개수 : {badCount}</div>
            <div>기분 좋은 일기 비율 : {goodRatio}</div>
            <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
}

export default App;
