import React from 'react'

const Explain = ({
                         title, runtime, revenue,
                         overview, releaseDate, voteAverage, genres, productionCompanies,tagline
                     }) => {
    return (
        <div className={"movieExplain"}>
            <h1  className={"h1"}>{title}</h1>
            <p className="movieExplain__information">
                {tagline}
            </p>
            <p className={"strong"} style={{marginBottom: 30}}>{overview}</p>
            <p className="movieExplain__information">
                {genres
                    .map(genre => genre.name)
                    .join(", ")}
            </p>
            <p className={"strong"} style={{marginBottom: 30}}>
                {productionCompanies
                    .map(company => company.name)
                    .join(", ")}
            </p>
            <div className={"row"}>
                <span style={{flex: 1}}>
            <p className={"strong"}>Original Release:</p>
            <p className="movieExplain__information">
                {releaseDate}
            </p>
                </span><span style={{flex: 1}}>
                <p className={"strong"}>Running Time:</p>
                <p className="movieExplain__information">
                    {runtime} minutes
                </p>
            </span>
            </div>
            <div className={"row"}>
                <span style={{flex: 1}}>
            <p className={"strong"} >Box Office:</p>
            <p className="movieExplain__information">
                {revenue > 0 ? revenue.toLocaleString() : "Unknown"}
            </p>
                </span><span style={{flex: 1}}>
                <p className={"strong"}>Vote Average:</p>
                <p className="movieExplain__information">
                    {voteAverage} / 10
                </p>
            </span>
            </div>
        </div>
    );
};


export default Explain