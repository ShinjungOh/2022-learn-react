import React from 'react';
import styles from './editor.module.css';
import Card from "../card/card";
import CardEditForm from "../card-edit-form/card-edit-form";
import CardAddForm from "../card-add-form/card-add-form";

const Editor = ({cards, addCard}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {cards.map(card => (
            <CardEditForm key={card.id} card={card}/>
        ))}
        <CardAddForm onAdd={addCard}/>
    </section>
);

export default Editor;