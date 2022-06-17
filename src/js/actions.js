import { ADD_MOVIE, FILTERBYNAME } from "./actiontypes"



export const addMovie = (newmovie) => { 
    return { type: ADD_MOVIE,payload:newmovie }
}
export const filterbyname  = (name) => { 
    return {
        type:FILTERBYNAME, payload:name
    }
 } 

