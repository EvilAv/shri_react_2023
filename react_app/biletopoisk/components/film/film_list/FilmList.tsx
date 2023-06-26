"use client"

import { FunctionComponent, Key } from "react";

import style from "./liststyle.module.css"
import { FilmInfo } from "../film_info/FilmInfo";
import { ButtonGroup } from "../../buttons/ButtonGroup";

import { useDispatch } from "react-redux";

interface FilmItem  {id: string; genre: string; title: string; posterUrl: string; }

export const FilmList: FunctionComponent<{films : any}> = ({films}) => {

    const dispatch = useDispatch();

    return (
        <div className={style.wrapper}>
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
        </div>
    )
}