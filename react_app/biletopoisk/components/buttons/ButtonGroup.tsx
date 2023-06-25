"use client"

import { FunctionComponent, ReactPortal, useCallback, useState } from "react";
import { selectMovieCount } from "../../redux/features/tickets/selector";

import style from "./buttonsstyle.module.css"

import { MinusIcon } from "../icons/MinusIcon";
import { PlusIcon } from "../icons/PlusIcon";

import { ticketsActions } from "../../redux/features/tickets";

import { useDispatch, useSelector } from "react-redux";

interface modalProp {
    openModal: () => void,
}

export const ButtonGroup: FunctionComponent<{id: string, onDelete?: modalProp}> = ({id, onDelete}) => {

    const dispatch = useDispatch();

    const count = useSelector((state) => selectMovieCount(state, id));

    const minusState = count > 0 ? 'active' : 'disabled';
    const plusState = count < 30 ? 'active' : 'disabled';

    let modalOpen = false;
    

    if (onDelete && count === 1){
        modalOpen = true;
    }

    return (
        <div className={style.container}>
            <div className={`${style.button} ${style[minusState]}`} onClick={modalOpen ? () => onDelete?.openModal(): () => dispatch(ticketsActions.decrement(id))}><MinusIcon /></div>
            <div>{count}</div>
            <div className={`${style.button} ${style[plusState]}`} onClick={() => dispatch(ticketsActions.increment(id))}><PlusIcon /></div>
        </div>
    )
}