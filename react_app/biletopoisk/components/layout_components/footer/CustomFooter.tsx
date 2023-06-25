"use client"

import { FunctionComponent } from "react";

import style from "./stylefooter.module.css"
import Link from "next/link";

export const CustomFooter: FunctionComponent = () => {
    return (
        <footer className={style.container}>
            <div className={style.title}>
                <Link href="/qa">Вопросы-ответы</Link>
            </div>
            <div className={style.title}>
                <Link href="/about">О нас</Link>
            </div>
        </footer>
    )
}