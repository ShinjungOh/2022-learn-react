import React from 'react';
import styles from './editor.module.css';
import CardEditForm from "../card-edit-form/card-edit-form";
import CardAddForm from "../card-add-form/card-add-form";

const Editor = ({cards, addCard, updateCard, deleteCard}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {Object.keys(cards).map(key => (
            <CardEditForm key={key} card={cards[key]}
                          updateCard={updateCard} deleteCard={deleteCard}/>
        ))}
        <CardAddForm onAdd={addCard}/>
    </section>
);

export default Editor;