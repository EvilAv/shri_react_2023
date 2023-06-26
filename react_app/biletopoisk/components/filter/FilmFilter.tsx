"use client"

import { FunctionComponent } from "react";

import style from "./filterstyle.module.css"
import { InputFilter } from "./input_filter/InputFilter";
import { SelectFilter } from "./select_filter/SelectFilter";
import { PopupItem } from "./select_filter/PopupItem";

interface Props {inputHandler: (event: React.FormEvent<HTMLInputElement>) => void, genreArr: Array<string>}

export const FilmFilter: FunctionComponent<Props> = ({inputHandler, genreArr}) => {


    return (
        <div className={style.container}>
            <div className={style.title}>Фильтр поиска</div>
            <div className={style.filter_container}>
                <InputFilter inputHandler={inputHandler}/>
                <SelectFilter title="Жанр">
                    {genreArr.map(genre => <PopupItem title={genre} key={genre}/>)}
                </SelectFilter>
                <SelectFilter title="Кинотеатр"/>
            </div>
        </div>
    )
}