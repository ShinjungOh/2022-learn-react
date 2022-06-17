import React from "react";
import './App.css';
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";

const dummyList = [
    {
        id: 1,
        author: "SJ",
        content: "hello",
        emotion: 1,
        created_date: new Date().getTime(),
    },
    {
        id: 2,
        author: "SJ",
        content: "hello",
        emotion: 2,
        created_date: new Date().getTime(),
    },
    {
        id: 3,
        author: "SJ",
        content: "hello",
        emotion: 3,
        created_date: new Date().getTime(),
    },
    {
        id: 4,
        author: "SJ",
        content: "hello",
        emotion: 4,
        created_date: new Date().getTime(),
    },
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <DiaryEditor/>
                <DiaryList diaryList={dummyList}/>
            </header>
        </div>
    );
}

export default App;
