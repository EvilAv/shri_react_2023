"use client";

import { useSelector } from "react-redux"

import { selectTotal, selectMovieCount } from "../../redux/features/tickets/selector"

import { useGetMoviesQuery } from "../../redux/services/movieApi"

import { FilmCart2 } from "../../components/film/film_cart/FilmCart2";

export default function Home() {

  const {data, isLoading, error} = useGetMoviesQuery('');

  if (isLoading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <FilmCart2 films={data}/>
    </div>
  )
}
