"use client"

import { FunctionComponent } from "react";
import Link from "next/link";

import style from "./infostyle.module.css"

interface Props {id: string, title: string, posterUrl: string, genre: string}

export const FilmInfo: FunctionComponent<Props> = ({
    id, 
    title,
    posterUrl,
    genre,
}) => {
    const link = '/film/' + id; 
    return (
        <div className={style.container}>
            <img className={style.poster} src={posterUrl} alt="UwU" />
            <div>
                <div className={style.title}>
                    <Link href={link}>{title}</Link>
                </div>
                <div className={style.text}>{genre}</div>
            </div>
        </div>
    )
}