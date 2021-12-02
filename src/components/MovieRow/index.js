import React, { useState } from "react";
import './MovieRow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight, faChevronLeft);

const MovieRow = ({ title, content }) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);

        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = content.results.length * 150;

        if ((window.innerWidth - listW) > x) {
            console.log(window.innerWidth - listW)
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <FontAwesomeIcon icon="chevron-left" />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <FontAwesomeIcon icon="chevron-right" />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: content.results.length * 150
                }}>
                    {content.results.length > 0 && content.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow;