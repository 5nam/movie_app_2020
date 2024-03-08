import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
import { Link } from "react-router-dom";

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
            >
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index} className="movie__genre">
                                {genre}
                            </li>
                        );
                    })}
                </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired, // API 에서 넘어오는 id 숫자야
    year: PropTypes.number.isRequired, // year 도 숫자고
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired, // title, summary 는 문자열
    poster: PropTypes.string.isRequired, // poster 에는 이미지 주소(문자열)가 저장될 거야
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // arrayOf(PropTypes.string) 은 문자열을 원소로하는 배열을 의미
};

export default Movie;