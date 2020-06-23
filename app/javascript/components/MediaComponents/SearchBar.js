import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect } from "react-router";

function SearchBar(props) {
  const movies = ["The Avengers", "Game", "Tv-Show"];
  const games = ["Grand Theft Auto V"];
  const tvShow = [];
  const [text, changeText] = useState("");
  const category = ["Movie", "Game", "Tv-Show"];
  const options = movies.concat(games).concat(tvShow);

  if (movies.includes(text)) {
    return <Redirect to={"/" + category[0] + "/" + text} />;
  } else if (games.includes(text)) {
    return <Redirect to={"/" + category[1] + "/" + text} />;
  } else if (tvShow.includes(text)) {
    return <Redirect to={"/" + category[2] + "/" + text} />;
  }

  return (
    <div className={props.style}>
      <Autocomplete
        id="free-solo-demo"
        options={options}
        onChange={(event, value) => changeText(value)}
        autoHighlight={true}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search movies, games, tv-shows"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}

export default SearchBar;
