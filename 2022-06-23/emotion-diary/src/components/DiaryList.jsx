import React, {useState} from "react";
import MyButton from "./MyButton";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
    {value: 'latest', name: '최신순',},
    {value: 'oldest', name: '오래된순',},
];

const filterOptionList = [
    {value: 'all', name: "전부다"},
    {value: 'good', name: "좋은 감정만"},
    {value: 'bad', name: "안좋은 감정만"},
];


const ControlMenu = ({value, onChange, optionList}) => {
    return (
        <select className="ControlMenu"
                value={value}
                onChange={e => onChange(e.target.value)}>
            {optionList.map((e, idx) =>
                <option key={idx} value={e.value}>{e.name}</option>)}
        </select>
    );
}


const DiaryList = ({diaryList}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState('all');

    const getProcessedDiaryList = () => {
        const filterCallback = (item) => {
            if (filter === 'good') {
                return parseInt(item.emotion) <= 3;
            } else {
                return parseInt(item.emotion) > 3;
            }
        }

        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        }

        const copyList = JSON.parse(JSON.stringify(diaryList));

        const filteredList = filter === 'all' ?
            copyList : copyList.filter(e => filterCallback(e));

        const sortedList = filteredList.sort(compare);
        return sortedList;
    }

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ControlMenu value={sortType}
                                 onChange={setSortType}
                                 optionList={sortOptionList}/>
                    <ControlMenu value={filter}
                                 onChange={setFilter}
                                 optionList={filterOptionList}/>
                </div>
                <div className="right_col">
                    <MyButton type={'positive'} text={'새 일기쓰기'}
                              onClick={() => navigate('/new')}/>
                </div>
            </div>


            {getProcessedDiaryList().map(e => (
                <DiaryItem key={e.id} {...e}/>
            ))}
        </div>
    );
}

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;