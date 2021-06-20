import React from 'react';
import {HhDataProps} from "./HhData.props";
import styles from './HhData.module.css';
import cn from 'classnames';
import {Card} from "..";
import StarSvg from './../../public/icons/star.svg';
import {priceRu} from "../../helpers/helpers";

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count} >
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>

            <Card className={styles.salary} >
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <StarSvg className={styles.filled}/>
                        <StarSvg/>
                        <StarSvg/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={styles.rate}>
                        <StarSvg className={styles.filled}/>
                        <StarSvg className={styles.filled}/>
                        <StarSvg/>
                    </div>
                </div>
                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <StarSvg className={styles.filled}/>
                        <StarSvg className={styles.filled}/>
                        <StarSvg className={styles.filled}/>
                    </div>
                </div>
            </Card>
        </div>
    );
};