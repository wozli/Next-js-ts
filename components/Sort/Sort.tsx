import React from 'react';
import {SortEnum, SortProps} from "./Sort.props";
import styles from './Sort.module.css';
import cn from 'classnames';
import SortSvg from './../../public/icons/sort.svg';

export const Sort = ({setSort, sort, className, ...props}: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)} {...props}>
            <span onClick={() => setSort(SortEnum.Rating)}
            className={cn({
                [styles.isActive]: sort === SortEnum.Rating
            })}>
                <SortSvg className={styles.sortIcon}/> По рейтингу
            </span>
            <span onClick={() => setSort(SortEnum.Price)}
                  className={cn({
                      [styles.isActive]: sort === SortEnum.Price
                  })}>
                <SortSvg className={styles.sortIcon}/> По цене
            </span>
        </div>
    );
};