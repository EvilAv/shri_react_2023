"use client"

import { FunctionComponent, useContext } from "react";

import style from "./selectstyle.module.css"
import { SelectContext } from "./SelectFilter";

interface Props {title: string, value?: string}

export const PopupItem: FunctionComponent<Props> = ({title, value}) => {

    const {titleHandler} = useContext(SelectContext);
    if (!titleHandler) {return null}
    return (
        <div className={style.popup_item} onClick={() => titleHandler(title, value)}>{title}</div>
    )
}