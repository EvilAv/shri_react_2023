"use client";

import { FilmDetail } from "../../../../components/film/film_detail/FilmDetail";

export default function FilmPage({params} : { params : { id : string } }) {
  return (
    <div>
        <FilmDetail id={params.id} />
    </div>
  )
}
