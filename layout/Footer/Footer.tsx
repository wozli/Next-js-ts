import React from 'react';
import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return <div className={cn(className, styles.footer)} {...props}>
        <div className={styles.footer__text}>
            OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
        </div>
        <a href="#" className={styles.footer__text}>
            Пользовательское соглашение
        </a>
        <a href="#" className={styles.footer__text}>
            Политика конфиденциальности
        </a>
    </div>;
};