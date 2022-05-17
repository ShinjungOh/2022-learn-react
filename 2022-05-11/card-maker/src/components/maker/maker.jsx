import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import {useNavigate} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({FileInput, authService}) => {
    const [cards, setCards] = useState({
        '1': {
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
        '2': {
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
        '3': {
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
    });

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

    const addOrUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards}
            updated[card.id] = card;
            return updated;
        });
        console.log(card);
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards}
            delete updated[card.id];
            return updated;
        });
        console.log(card);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor FileInput={FileInput}
                        cards={cards} addCard={addOrUpdateCard} updateCard={addOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    );
}

export default Maker;