import { FunctionComponent } from "react";

import style from "./arrow.module.css";

interface Props {height: string, width: string, color: string, isRoate: boolean}

export const ArrowIcon: FunctionComponent<Props> = ({
    height,
    width,
    color,
    isRoate,
}) => {
    return (
        <svg className={isRoate ? style.icon: ""} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 30.3334H20C27.24 30.3334 30.3333 27.2401 30.3333 20.0001V12.0001C30.3333 4.76008 27.24 1.66675 20 1.66675H12C4.75996 1.66675 1.66663 4.76008 1.66663 12.0001V20.0001C1.66663 27.2401 4.75996 30.3334 12 30.3334ZM3.66663 12.0001C3.66663 5.85341 5.85329 3.66675 12 3.66675H20C26.1466 3.66675 28.3333 5.85341 28.3333 12.0001V20.0001C28.3333 26.1467 26.1466 28.3334 20 28.3334H12C5.85329 28.3334 3.66663 26.1467 3.66663 20.0001V12.0001ZM15.2933 19.5868C15.4933 19.7868 15.7466 19.8801 15.9999 19.8801C16.2533 19.8801 16.5066 19.7868 16.7066 19.5868L21.4133 14.8801C21.7999 14.4934 21.7999 13.8534 21.4133 13.4668C21.0266 13.0801 20.3866 13.0801 20 13.4668L15.9999 17.4668L11.9999 13.4668C11.6133 13.0801 10.9733 13.0801 10.5866 13.4668C10.1999 13.8534 10.1999 14.4934 10.5866 14.8801L15.2933 19.5868Z" fill={color}/>
        </svg>
    )
}