import { ADD_MOVIE,EDIT_MOVIE,DELETE_MOVIE,SEARCH_TITLE,SEARCH_RATING } from './actionTypes'

export const addMovie=(payload)=>{
    return {type:ADD_MOVIE,payload}
}

export const editMovie=(payload)=>{
    return {type:EDIT_MOVIE,payload}
}

export const deleteMovie=(payload)=>{
  return {type:DELETE_MOVIE,payload}
}

export const searchTitle =(payload)=>{
  return {type:SEARCH_TITLE,payload}
}
  
export const searchRating=(payload)=>{
    return {type:SEARCH_RATING, payload}
}