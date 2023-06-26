"use client"

import { FunctionComponent, useState, useEffect } from "react";

import style from "./selectstyle.module.css"
import { ArrowIcon } from "../../icons/ArrowIcon";
import React from "react";

interface Props {children?: React.ReactNode, title: string, onSubmit?: (value: string) => void}

export const SelectContext = React.createContext<{curTitle: string, titleHandler?: (text: string, trueText?: string) => void}>({curTitle: ''});

export const SelectFilter: FunctionComponent<Props> = ({children, title, onSubmit}) => {

    const [isActive, setActive] = useState(false);
    const [curTitle, setTitle] = useState('');

    let titleHandler: (text: string, trueText?: string) => void;
    if (onSubmit){
        titleHandler = (text: string, trueText?: string) => {
            if (trueText){
                onSubmit(trueText);
            } else {
                onSubmit(text);
            }
            setTitle(text);
        };
    } else {
        titleHandler = (text: string) => setTitle(text);
    }

    const placeholderState = isActive ? 'active_placeholder' : 'disabled_placeholder';

    let titletext;
    if (!curTitle){
        titletext = 'Выберите ' + title.toLowerCase();
    } else{
        titletext = curTitle;
    }

    const closePopup = () => setActive(false);

    useEffect(() => {
        document.addEventListener('click', closePopup);
        return () => {
          document.removeEventListener('click', closePopup);
        };
      }, [ isActive ]);

    return (
        <div className={style.container}>
            <div className={style.filter_name}>{title}</div>
            <div className={style.container} onClick={(event) => event.stopPropagation()}>
                <div className={`${style.placeholder} ${style[placeholderState]}`} onClick={() => setActive(!isActive)}>
                    <div>{titletext}</div>
                    <ArrowIcon height="20" width="20" color="#999FA6" isRoate={isActive}/>
                </div>
                {isActive && children && <div className={style.popup}>
                    <SelectContext.Provider value={{curTitle, titleHandler}}>
                        <div onClick={closePopup}>
                            <div className={style.popup_item} onClick={() => titleHandler('')}>Не выбран</div>
                            {children}
                        </div>
                    </SelectContext.Provider>
                </div>}
            </div>
        </div>
    )
}