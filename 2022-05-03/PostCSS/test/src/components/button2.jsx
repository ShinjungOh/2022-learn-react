import React, {Component} from "react";
import styles from './button2.module.css';

class Button2 extends Component {
    render() {
        return (
            <div className={styles.button}>
                <span className={styles.text}>Button2</span>
            </div>
        );
    }
}

export default Button2;