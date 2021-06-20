import {DetailedHTMLProps, ReactNode, HTMLAttributes} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color?: 'white' | 'blue',
    children: ReactNode
}