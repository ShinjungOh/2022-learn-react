import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log("id : ", id);

    const mode = searchParams.get('mode');
    console.log(mode);

    return (
        <div>
            <h1>Edit</h1>
            <p>edit</p>
            <button onClick={() => setSearchParams({who: 'SJ'})}>QS 바꾸기</button>
            <button onClick={() => {
                navigate("/home");
            }}>
                🏠 Home으로 가기
            </button>
            <button onClick={() => {
                navigate(-1);
            }}>
                뒤로가기
            </button>
        </div>
    );
}

export default Edit;