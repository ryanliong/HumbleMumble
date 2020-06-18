import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect } from "react-router";

function SearchBar(props) {
  const options = ["The Avengers", "Game", "Tv-Show"];
  const [text, changeText] = useState("");
  const catogery = ["Movie", "Game", "Tv-Show"];

  if (options.includes(text)) {
    return <Redirect to={"/" + catogery[0] + "/" + text} />;
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
