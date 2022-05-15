import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import {useNavigate} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'SJ1',
            company: 'ABC',
            title: 'Engineer',
            theme: 'light',
            email: 'tlswjd9260@gmail.com',
            message: 'Hello',
            fileName: 'SJ',
            fileURL: null,
        },
        {
            id: '2',
            name: 'SJ2',
            company: 'ABC',
            title: 'Engineer',
            theme: 'dark',
            email: 'tlswjd9260@gmail.com',
            message: 'Hello',
            fileName: 'SJ',
            fileURL: 'SJ.png',
        },
        {
            id: '3',
            name: 'SJ3',
            company: 'ABC',
            title: 'Engineer',
            theme: 'colorful',
            email: 'tlswjd9260@gmail.com',
            message: 'Hello',
            fileName: 'SJ',
            fileURL: null,
        }
    ]);
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                navigate('/');
            }
        });
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;