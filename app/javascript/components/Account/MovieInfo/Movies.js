import React, { Component } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  return (
    <div id="AccountInfo">
      <h1 id="title" style={{ marginTop: "2em" }}>
        Movies
      </h1>
      <div class="card" style={{ width: "82rem", marginTop: "1em" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <MovieCard imgUrl="https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450"></MovieCard>
          </li>
          <li class="list-group-item">
            <MovieCard imgUrl="https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450"></MovieCard>
          </li>
          <li class="list-group-item">
            <MovieCard imgUrl="https://lumiere-a.akamaihd.net/v1/images/movie_poster_zootopia_866a1bf2.jpeg?region=0%2C0%2C300%2C450"></MovieCard>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Movies;
