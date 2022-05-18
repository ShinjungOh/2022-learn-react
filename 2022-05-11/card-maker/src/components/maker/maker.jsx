import React, {useEffect, useState} from 'react';
import styles from './maker.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({FileInput, authService, cardRepository}) => {
    const navigate = useNavigate();
    const navigateState = useLocation().state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(navigateState && navigateState.id);

    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
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
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards}
            delete updated[card.id];
            return updated;
        });
        console.log(card);
        cardRepository.removeCard(userId, card);
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