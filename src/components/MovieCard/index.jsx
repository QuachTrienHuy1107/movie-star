import React, { useEffect, useDispatch } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import WOW from "wowjs";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import productApi from "../../services/movie";
MovieCard.propTypes = {};

function MovieCard(props) {
    // const dispatch = useDispatch();

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const { movie } = props;

    return (
        <>
            <Col lg="2" md="4" sm="12" className="movie-card">
                <Link to={`/movie/${movie.ID}`}>
                    <div className="item">
                        <div className="item__info">
                            <div className="item__info__img">
                                <img
                                    src="https://photo-cms-anninhthudo.zadn.vn/w660/Uploaded/2021/abhusbb/2020_08_29/phim-thang-may-3333.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="item__info__detail">
                                <Animated animationIn="zoomIn" animationInDuration={500}>
                                    <h1>{movie.Title}</h1>
                                    <div className="item__info__detail__desc">
                                        <p>{movie.Description}</p>
                                    </div>
                                </Animated>
                            </div>

                            <div className="item__info__overlay text-light ">
                                <p>
                                    <i class="fa fa-heart"></i>{" "}
                                </p>
                                <i className="fa fa-play"></i>
                                <div className="item__info__overlay__detail">
                                    <h1>{movie.Title}</h1>

                                    <p>{movie.Description}</p>
                                    <p className="d-flex justify-content-between align-items-center">
                                        <span>
                                            <span className="item__info__overlay__detail__logo">1</span>
                                            <span>Beginner</span>
                                        </span>
                                        <span>
                                            <i className="fa fa-clock"></i>
                                            <span>1h30</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Col>
        </>
    );
}

export default MovieCard;
