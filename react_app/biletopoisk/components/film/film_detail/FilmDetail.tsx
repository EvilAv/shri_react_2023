"use client"

import { FunctionComponent } from "react";


import style from "./detailstyle.module.css"
import { useGetMovieQuery, useGetCommentOfMovieQuery } from "../../../redux/services/movieApi";
import { ButtonGroup } from "../../buttons/ButtonGroup";
import { EmptyIcon } from "../../icons/EmptyIcon";

interface Props {id: string};
interface DataProps {data: any};
interface CommentsProps {comments: Array<any>}

const Comments: FunctionComponent<CommentsProps> = ({comments}) =>{

    return (
        <>
            {
                comments.map((comment) => {
                    return (
                        <div className={style.container} key={comment.id}>
                            <div className={style.person_icon}>
                                <EmptyIcon />
                            </div>
                            <div className={style.comment_info}>
                                <div className={style.title_container}>
                                    <div className={`${style.font} ${style.description_title}`}>{comment.name}</div>
                                    <div>
                                        <span className={`${style.font} ${style.rate}`}>Оценка: </span>
                                        <span className={`${style.font} ${style.description_title}`}>{comment.rating}</span>
                                    </div>
                                </div>
                                <div className={`${style.font} ${style.description_text}`}>{comment.text}</div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


const FilmCard: FunctionComponent<DataProps> = ({data}) =>{

    return (
        <div className={style.container}>
            <img src={data.posterUrl} alt="UwU" className={style.poster}/>
            <div className={style.info}>
                <div className={style.section}>
                    <div className={style.title_container}>
                        <div className={`${style.font} ${style.main_title}`}>{data.title}</div>
                        <ButtonGroup id={data.id}/>
                    </div>
                    <div>
                        <span className={`${style.font} ${style.title}`}>Жанр: </span>
                        <span className={`${style.font} ${style.text}`}>{data.genre}</span>
                    </div>
                    <div>
                        <span className={`${style.font} ${style.title}`}>Год выпуска: </span>
                        <span className={`${style.font} ${style.text}`}>{data.releaseYear}</span>
                    </div>
                    <div>
                        <span className={`${style.font} ${style.title}`}>Рейтинг: </span>
                        <span className={`${style.font} ${style.text}`}>{data.rating}</span>
                    </div>
                    <div>
                        <span className={`${style.font} ${style.title}`}>Режиссер: </span>
                        <span className={`${style.font} ${style.text}`}>{data.director}</span>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={`${style.font} ${style.description_title}`}>Описание</div>
                    <div className={`${style.font} ${style.description_text}`}>{data.description}</div>
                </div>
            </div>
        </div>
    )
}

export const FilmDetail: FunctionComponent<Props> = ({ id }) => {
    const {data, isLoading, error} = useGetMovieQuery(id);
    const {data: comments, isLoading: isCommentsLoading, error: commentsError} = useGetCommentOfMovieQuery(id);

    if (isLoading || isCommentsLoading){
        return <div>Loading...</div>
    }

    return (
        <>
            <FilmCard data={data}/>
            <Comments comments={comments} />
        </>
    )
}