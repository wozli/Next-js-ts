import React from 'react';
import {AdvantagesProps} from "./Advantages.props";
import styles from './Advantages.module.css';
import CheckSvg from './../../public/icons/check.svg';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages && advantages.map(a => (
                <div key={a._id} className={styles.advantage}>
                    <CheckSvg/>
                    <div className={styles.title}>
                        {a.title}
                    </div>
                    <hr className={styles.vLine}/>
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    );
};