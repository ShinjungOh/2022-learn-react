import React from 'react';
import styles from './editor.module.css';
import Card from "../card/card";
import CardEditForm from "../card-edit-form/card-edit-form";

const Editor = ({cards}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {cards.map(card => (
            <CardEditForm card={card}/>
        ))}
    </section>
);

export default Editor;