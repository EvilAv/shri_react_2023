"use client"

import { FunctionComponent, useCallback, useState } from "react";

import style from "./accordeon.module.css"
import { ArrowIcon } from "../icons/ArrowIcon";

interface Props {children?: React.ReactNode, title: string}

export const AccordeonCard: FunctionComponent<Props> = ({children, title}) => {

    let [isActive, setActive] = useState(false);

    const switchCard = useCallback((() => {setActive((isActive) => !isActive)}), []);

    return (
        <div className={style.container} onClick={switchCard}>
            <div className={style.header}>
                <div className={style.title}>{title}</div>
                <ArrowIcon height="32" width="32" color="black" isRoate={isActive}/>
            </div>
            {isActive && <div className={style.text}>{children}</div>}
        </div>
    )
}