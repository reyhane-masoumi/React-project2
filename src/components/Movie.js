import React from 'react'
import Background from "./Background";

const Movie = ({movie}) => {
    const {
        title, runtime, revenue,
        overview, release_date, poster_path,vote_average,genres,production_companies,tagline
    } = movie;

      return (
        <div className={"row"}>
        <Background posterPath={poster_path}/>
        </div>
        
        );
    };

export default Movie



