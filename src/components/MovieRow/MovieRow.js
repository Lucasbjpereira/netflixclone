import React from "react";
import './MovieRow.css';

const MovieRow = ({title, content}) => {

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {content.results.length > 0 && content.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow;