import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface BtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: 'primary' | 'ghost',
    children: ReactNode,
    arrow?: 'right' | 'down' | 'none'
}