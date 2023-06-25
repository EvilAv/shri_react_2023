"use client"

import { FunctionComponent } from "react";

import style from "./modalstyle.module.css"
import { CloseIcon } from "../icons/CloseIcon";

import { ticketsActions } from "../../redux/features/tickets";
import { useDispatch } from "react-redux";

interface Props {onClose: () => void, id: string}

export const Modal: FunctionComponent<Props> = ({
    onClose,
    id
}) => {

    const dispatch = useDispatch();

    const onSubmit = () =>{
        dispatch(ticketsActions.resetItem(id));
        onClose();
    }

    return (
        <div className={style.screen} onClick={onClose}>
            <div className={style.window} onClick={(event) => event.stopPropagation()}>
                <div className={style.title_container}>
                    <div className={style.title}>Удаление билета</div>
                    <div className={style.icon} onClick={onClose}>
                        <CloseIcon height="20" width="20" />
                    </div>
                </div>
                <div className={style.text}>Вы уверены, что хотите удалить билет?</div>
                <div className={style.buttons}>
                    <div className={style.orange} onClick={onSubmit}>Да</div>
                    <div className={style.outline} onClick={onClose}>Нет</div>
                </div>
            </div>
        </div>
    )
}