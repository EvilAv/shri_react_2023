import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/'}),
    endpoints: (builder) => ({
        getMovies: builder.query({ query: () => "movies" }),
        getMovie:  builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
        getCommentOfMovie:  builder.query({ query: (movieId) => `reviews?movieId=${movieId}` }),
        getCinemas:  builder.query({ query: () => 'cinemas' }),
        getMoviesByCinema:  builder.query({ query: (cinemaId) => `movies?cinemaId=${cinemaId}` }),
    }),
});

export const {useGetMoviesQuery, useGetMovieQuery, useGetCommentOfMovieQuery, useGetCinemasQuery, useGetMoviesByCinemaQuery} = movieApi;