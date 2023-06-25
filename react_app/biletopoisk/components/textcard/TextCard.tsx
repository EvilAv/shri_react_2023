"use client"

import { FunctionComponent } from "react";

import style from "./text.module.css"

interface Props {children?: React.ReactNode, title: string}

export const TextCard: FunctionComponent<Props> = ({children, title}) => {
    return (
        <div className={style.container}>
            <div className={style.title}>{title}</div>
            {children}
        </div>
    )
}