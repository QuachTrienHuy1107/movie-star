import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

import MovieList from "../../components/MovieList";
import Carousel from "../../components/Carousel";
import axios from "axios";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getAllMovies() {
            const request = await axios.get("http://svcy.myclass.vn/api/Movie/GetMovie");
            setMovies(request.data);
        }
        return getAllMovies();
    }, []);

    return (
        <div>
            {console.log("movies", movies)}
            <Carousel />
            <Container fluid style={{ width: "85%" }}>
                <MovieList title={"Reccommend"} />
                <MovieList title={"Top Rating"} logo={"1"} items={10} allMovie={movies} />
            </Container>
        </div>
    );
}

export default Home;
