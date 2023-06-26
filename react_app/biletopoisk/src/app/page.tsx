"use client";

import { useGetCinemasQuery, useGetMoviesByCinemaQuery } from "../../redux/services/movieApi"

import { FilmList } from "../../components/film/film_list/FilmList";
import { InputFilter } from "../../components/filter/input_filter/InputFilter";
import { SelectFilter } from "../../components/filter/select_filter/SelectFilter";
import { PopupItem } from "../../components/filter/select_filter/PopupItem";

import style from "./mainstyle.module.css"
import { useState } from "react";
import React from "react";

export default function Home() {
  const genreSet = new Set<string>();
  const cinemaDict: {[key: string] : string} = {};
  let cinemaArr: Array<Array<string>> = [];

  const [filmName, setName] = useState('');
  const [curGenre, setGenre] = useState('');
  const [curCinema, setCinema] = useState('');

  const changeGenre = (genre: string) => {
    setGenre(genre);
  }

  const changeCinema = (cinema: string) => {
    setCinema(cinema);
  }

  const inputhandler = (event: React.FormEvent<HTMLInputElement>) =>{
    setName(event.currentTarget.value);
  }

  let {data, isLoading, error} = useGetMoviesByCinemaQuery(curCinema);

  let {data: cinemas, isLoading: isCinemaLoading, error: cinemaError} = useGetCinemasQuery('');

  if (isLoading && isCinemaLoading){
    return <div>Loading...</div>
  }

  if (cinemas){
    for (const cinema of cinemas) {
      cinemaDict[cinema.name] = cinema.id;
    }
    cinemaArr = Object.entries(cinemaDict);
  }

  for (const film of data) {
    genreSet.add(film.genre);
  }
  const genreArr = Array.from(genreSet);

  if (filmName.trim()){
    const prettyName = filmName.trim().toLowerCase()
    data = data.filter((film: {title: string}) => film.title.toLowerCase().includes(prettyName))
  }

  if (curGenre.trim()){
    const prettyGenre = curGenre.trim().toLowerCase()
    data = data.filter((film: {genre: string}) => film.genre.trim().toLowerCase() === prettyGenre)
  }


  return (
    <>
        <div className={style.container}>
            <div className={style.title}>Фильтр поиска</div>
            <div className={style.filter_container}>
                <InputFilter inputHandler={inputhandler}/>
                <SelectFilter title="Жанр" onSubmit={changeGenre}>
                    {genreArr.map(genre => <PopupItem title={genre} key={genre}/>)}
                </SelectFilter>
                <SelectFilter title="Кинотеатр" onSubmit={changeCinema}>
                  {cinemaArr.map(cinema => <PopupItem title={cinema[0]} key={cinema[1]} value={cinema[1]}/>)}
                </SelectFilter>
            </div>
        </div>
      <FilmList films={data}/>
    </>
  )
}
