import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";


const MovieList = ({ movies }) => {
  const MovieList = useSelector(state => state.list)
  console.log(MovieList)
  return (
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
      {movies.map((el, i) => (
        <MovieCard el ={el} key={i}/>
      ))}
    </div>
  );
};

export default MovieList;
