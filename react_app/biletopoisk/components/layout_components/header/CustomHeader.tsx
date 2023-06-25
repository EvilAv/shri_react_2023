"use client"

import { FunctionComponent } from "react";

import style from "./styleheader.module.css"
import { CartIcon } from "../../icons/CartIcon";
import Link from "next/link";

import { useSelector } from "react-redux"

import { selectTotal } from "../../../redux/features/tickets/selector"

export const CustomHeader: FunctionComponent = () => {
    const total = useSelector((state) => selectTotal(state));
    return (
        <header className={style.container}>
            <div className={style.title}>
                <Link href="/">Билетопоиск</Link>
            </div>
            <Link href="/cart" className={style.cart_container}>
                {!!total && <div className={style.counter}>{total}</div>}
                <CartIcon height="32" width="32" color="white"/>
            </Link>
        </header>
    )
}