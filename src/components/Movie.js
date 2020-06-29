import React from 'react'
import Background from "./Background";
import Explain from "./Explain";

const Movie = ({movie}) => {
    const {
        title, runtime, revenue,
        overview, release_date, poster_path,vote_average,genres,production_companies,tagline
    } = movie;
    return (
        <div className={"row"}>
            <Background posterPath={poster_path}/>
            <Explain title={title}
                         runtime={runtime}
                         revenue={revenue}
                         overview={overview}
                         releaseDate={release_date}
                         voteAverage={vote_average}
                         genres={genres}
                         productionCompanies={production_companies}
                         tagline={tagline}
                  />
        </div>
    );
};


export default Movie