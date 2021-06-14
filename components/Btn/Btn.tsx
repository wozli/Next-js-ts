import React from 'react';
import {BtnProps} from "./Btn.props";
import styles from './Btn.module.css';
import cn from 'classnames';
import ArrowSvg from './arrow.svg';

export const Btn = ({appearance, children, arrow = 'none', className, ...props}: BtnProps): JSX.Element => {
    return (
        <button className={cn(styles.btn, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })} {...props}>{children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
                [styles.right]: arrow === 'right',
            })}><ArrowSvg/></span>}
        </button>
    );
};