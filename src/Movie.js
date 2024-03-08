import React from "react";
import PropTypes from "prop-types";
import './Movie.css';

function Movie({title, year, summary, poster}) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
        </div>
        
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired, // API 에서 넘어오는 id 숫자야
    year: PropTypes.number.isRequired, // year 도 숫자고
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, // title, summary 는 문자열
    poster: PropTypes.string.isRequired, // poster 에는 이미지 주소(문자열)가 저장될 거야
};

export default Movie;