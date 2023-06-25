"use client"

import { FunctionComponent, Key } from "react";

import style from "./cartstyle.module.css"
import { FilmInfo } from "../film_info/FilmInfo";
import { ButtonGroup } from "../../buttons/ButtonGroup";
import { CloseIcon } from "../../icons/CloseIcon";

import { ticketsActions } from "../../../redux/features/tickets";

import { useDispatch } from "react-redux";

interface FilmItem  {id: string; genre: string; title: string; posterUrl: string; }

export const FilmCart2: FunctionComponent<{films : any}> = ({films}) => {

    const dispatch = useDispatch();

    return (
        <>
        {films.map((film: FilmItem) => {
            return  (
                <div className={style.container} key={film.id}>
                    <FilmInfo id={film.id} genre={film.genre} 
                    title={film.title} posterUrl={film.posterUrl} />
                    <div className={style.control_panel}>
                        <ButtonGroup id={film.id}/>
                    </div>

                </div>
            )
        })}
        </>
    )
}