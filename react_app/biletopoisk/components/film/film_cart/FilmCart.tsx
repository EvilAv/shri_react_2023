"use client"

import { FunctionComponent, Key } from "react";

import style from "./cartstyle.module.css"
import { FilmInfo } from "../film_info/FilmInfo";
import { ButtonGroup } from "../../buttons/ButtonGroup";
import { CloseIcon } from "../../icons/CloseIcon";
import { Modal } from "../../modal/Modal";

import { useState } from "react";
import { createPortal } from "react-dom";

interface FilmItem  {id: string; genre: string; title: string; posterUrl: string; };
interface smth {
    id: string,
    openModal: () => void,
    onClose: () => void,
    root: Element | null,
}

export const FilmCart: FunctionComponent<{films : any}> = ({films}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalId, setModalId] = useState('');

    const closeModal = () => setIsModalOpen(false);
    const openModal = (id:string) => {
        setIsModalOpen(true),
        setModalId(id);
    }
    const root = document.querySelector('#root');

    return (
        <>
        {films.map((film: FilmItem) => {
            return  (
                <div className={style.container} key={film.id}>
                    {isModalOpen && root && modalId && createPortal(<Modal onClose={closeModal} id={modalId}/>, root)}
                    <FilmInfo id={film.id} genre={film.genre} 
                    title={film.title} posterUrl={film.posterUrl} />
                    <div className={style.control_panel}>
                        <ButtonGroup id={film.id} onDelete={{openModal}}/>
                        <span className={style.reset} onClick={() => openModal(film.id)}><CloseIcon height="20" width="20"/></span>
                    </div>
                </div>
            )
        })}
        </>
    )
}