import { ADD_ARTICLE, DELETE_ARTICLE, FETCH_ARTICLES, FETCH_GAMES, FETCH_GENRES, FETCH_GENRES_GAMES } from "../constants/action-types";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = article =>({type: DELETE_ARTICLE, payload: article});

export const fetchArticles = () => ({type: FETCH_ARTICLES});

export const fetchGenres = () => ({type: FETCH_GENRES});
export const fetchGenresGames = () => ({type: FETCH_GENRES_GAMES});
export const fetchGames = () => ({type: FETCH_GAMES});