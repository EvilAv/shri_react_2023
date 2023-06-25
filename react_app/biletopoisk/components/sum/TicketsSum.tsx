"use client"

import { FunctionComponent } from "react";

import style from "./sum.module.css"


export const TicketsSum: FunctionComponent<{sum: number}> = ({sum}) => {
    return (
        <div className={style.container}>
            <div className={style.text}>Итого билетов:</div>
            <div className={style.text}>{sum}</div>
        </div>
    )
}