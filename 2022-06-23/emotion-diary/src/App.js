import React, {useReducer, useRef} from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from './pages/New';
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
    let newState = [];
    switch (action.type) {
        case 'INIT': {
            return action.data;
        }
        case 'CREATE': {
            newState = [action.data, ...state];
            break;
        }
        case 'REMOVE': {
            newState = state.filter(e => e.id !== action.targetId);
            break;
        }
        case 'EDIT': {
            newState = state.map(e => e.id === action.data.id ? {...action.data} : e);
            break;
        }
        default:
            return state;
    }
    return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
    {
        id: 1,
        content: "오늘의 일기 1번",
        emotion: 1,
        date: 1656074747514,
    },
    {
        id: 2,
        content: "오늘의 일기 2번",
        emotion: 2,
        date: 1656074747515,
    },
    {
        id: 3,
        content: "오늘의 일기 3번",
        emotion: 3,
        date: 1656074747516,
    },
    {
        id: 4,
        content: "오늘의 일기 4번",
        emotion: 4,
        date: 1656074747517,
    },
    {
        id: 5,
        content: "오늘의 일기 5번",
        emotion: 5,
        date: 1656074747518,
    },
];

function App() {
    const [data, dispatch] = useReducer(reducer, dummyData);

    console.log(new Date().getTime());

    const dataId = useRef(0);

    const onCreate = (date, content, emotion) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: dataId.current,
                date: new Date(date).getTime(),
                content,
                emotion,
            }
        });
        dataId.current += 1;
    }

    const onRemove = (targetId) => {
        dispatch({type: 'REMOVE', targetId});
    }

    const onEdit = (targetId, date, content, emotion) => {
        dispatch({
            type: 'EDIT',
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotion,
            }
        });
    }

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={{onCreate, onRemove, onEdit}}>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/new" element={<New/>}/>
                            <Route path="/edit/:id" element={<Edit/>}/>
                            <Route path="/diary/:id" element={<Diary/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default App;