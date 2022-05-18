import React from 'react';
import styles from './card-edit-form.module.css';
import Button from "../button/button";
import {useRef} from "react";

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const {name, company, title, email, message, theme, fileName, fileURL} = card;

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        });
    }

    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    }

    const onSubmit = () => {
        deleteCard(card);
    }

    return (
        <form className={styles.form}>
            <input className={styles.input} ref={nameRef} type="text" name="name" value={name} onChange={onChange}/>
            <input className={styles.input} ref={companyRef} type="text" name="company" value={company}
                   onChange={onChange}/>
            <select className={styles.select} ref={themeRef} name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} ref={titleRef} type="text" name="title" value={title} onChange={onChange}/>
            <input className={styles.input} ref={emailRef} type="text" name="email" value={email} onChange={onChange}/>
            <textarea className={styles.textarea} ref={messageRef} name="message" value={message} onChange={onChange}/>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}/>
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
}

export default CardEditForm;