import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect, useHistory } from "react-router";

function SearchBar(props) {
  const movies = ["The Avengers", "Game", "Tv-Show"];
  const games = ["Grand Theft Auto V"];
  const tvShow = [];
  const [text, changeText] = useState("");
  const category = "Results";
  const options = movies.concat(games).concat(tvShow);
  const [textBox, changeTextBox] = useState("");

  if (movies.includes(text)) {
    return <Redirect to={"/" + category + "/" + text} />;
  } else if (games.includes(text)) {
    return <Redirect to={"/" + category + "/" + text} />;
  } else if (tvShow.includes(text)) {
    return <Redirect to={"/" + category + "/" + text} />;
  }

  let history = useHistory();
  const keyPressed = (keyStroke) => {
    if (keyStroke.keyCode == 13) {
      console.log(textBox);
      history.push("/" + category + "/" + textBox);
    }
  };

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
            onKeyDown={keyPressed}
            onChange={(event) => changeTextBox(event.target.value)}
          />
        )}
      />
    </div>
  );
}

export default SearchBar;
