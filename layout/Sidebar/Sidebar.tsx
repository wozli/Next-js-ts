import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import cn from 'classnames';
import {Menu} from "../Menu/Menu";
import LogoSvg from "../../public/icons/logo.svg";

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return <div {...props} className={cn(className, styles.sidebar)}>
        <LogoSvg className={styles.logo}/>
        <div>
            search
        </div>

        <Menu/>
    </div>;
};