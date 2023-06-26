"use client"

import { FunctionComponent } from "react";

import style from "./inputstyle.module.css"

interface Props {inputHandler: (event: React.FormEvent<HTMLInputElement>) => void}

export const InputFilter: FunctionComponent<Props> = ({inputHandler}) => {

    const temp = (event: React.FormEvent<HTMLSelectElement>) =>{
        console.log(event.currentTarget.value);
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="input" className={style.filter_name}>Название</label>
            <input type="text" id="input" className={style.input} placeholder="Введите название" onChange={inputHandler}/>
        </form>
    )
}