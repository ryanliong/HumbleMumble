import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect, useHistory } from "react-router";
import { useEffect } from "react";

function SearchBar(props) {
  const topMovies = [
    "What She Said: The Art of Pauline Kael",
    "The Ghost of Peter Sellers",
    "Knives Out",
    "Premature",
  ];
  const topGames = [
    "The Last of Us: Part II",
    "Streets of Rage 4",
    "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated",
    "Ghost of Tsushima",
  ];
  const topTvShow = [
    "P-Valley",
    "Legendary",
    "The Baby-Sitters Club",
    "High Fidelity",
  ];
  // working on adding past search terms to auto correct, not working yet
  const movies =
    localStorage.getItem("moviesList") === null
      ? topMovies
      : topMovies.concat(localStorage.getItem("moviesList"));
  const games =
    localStorage.getItem("gamesList") === null
      ? topGames
      : topGames.concat(localStorage.getItem("gamesList"));
  const tvShow =
    localStorage.getItem("tvShowList") === null
      ? topTvShow
      : topTvShow.concat(localStorage.getItem("tvShowList"));

  const [text, changeText] = useState("");
  const category = "Results";
  const options = movies.concat(games).concat(tvShow);
  const [textBox, changeTextBox] = useState("");
  const [topSearchBarText, changeTopSearchBarText] = useState("");
  const [enterPressed, pressedEnter] = useState(false);
  const navBarSearchBar = (
    <Autocomplete
      id="custom-input-demo"
      options={options}
      onChange={(event, value) => changeText(value)}
      onInputChange={(event, value) => {
        changeTopSearchBarText(value);
      }}
      style={{ display: "absolute", width: 300 }}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            style={{
              width: 300,
              color: "black",
              textJustify: "auto",
              padding: 5,
            }}
            type="text"
            {...params.inputProps}
            placeholder="Search here!"
            onKeyDown={keyPressed}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Search here!")}
          />
        </div>
      )}
    />
  );

  useEffect(() => pressedEnter(false), [enterPressed]);

  if (movies.includes(text)) {
    return (
      <div>
        <Redirect to={"/" + category + "/" + text} />
        {navBarSearchBar}
      </div>
    );
  } else if (games.includes(text)) {
    return <Redirect to={"/" + category + "/" + text} />;
  } else if (tvShow.includes(text)) {
    return <Redirect to={"/" + category + "/" + text} />;
  }
  const keyPressed = (keyStroke) => {
    if (keyStroke.keyCode == 13) {
      pressedEnter(true);
    }
  };

  if (enterPressed) {
    return (
      <div>
        <Redirect
          to={
            "/" + category + "/" + (textBox == "" ? topSearchBarText : textBox)
          }
        />
        {navBarSearchBar}
      </div>
    );
  }

  return props.type == "MainPage" ? (
    <div className={props.style}>
      <Autocomplete
        id="free-solo-demo"
        options={options}
        onChange={(event, value) => changeText(value)}
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
  ) : (
    { ...navBarSearchBar }
  );
}

export default SearchBar;
