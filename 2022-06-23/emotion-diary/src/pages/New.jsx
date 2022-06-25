import React, {useState} from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import {useNavigate} from "react-router-dom";


const getStringDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
        month = `0${month}`;
    }
    if (day < 10) {
        day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
    // return date.toISOString().slice(0, 10);
}


const New = () => {
    const [date, setDate] = useState(getStringDate(new Date()));
    const navigate = useNavigate();

    return (
        <div>
            <MyHeader
                headText={"새 일기쓰기"}
                leftChild={<MyButton text={"뒤로가기"} onClick={() => navigate(-1)}/>}
            />
            <div>
                <section>
                    <h4>오늘은 며칠인가요?</h4>
                    <div className="input_box">
                        <input className="input_date"
                               value={date}
                               type="date"
                               onChange={e => setDate(e.target.value)}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default New;