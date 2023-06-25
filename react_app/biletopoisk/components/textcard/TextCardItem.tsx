"use client"

import { FunctionComponent } from "react";

import style from "./text.module.css"

interface Props {children?: React.ReactNode}

export const TextCardItem: FunctionComponent<Props> = ({children}) => {
    return (
        <div>
            {Boolean(children) && <div className={style.text}>{children}</div>}
        </div>
    )
}