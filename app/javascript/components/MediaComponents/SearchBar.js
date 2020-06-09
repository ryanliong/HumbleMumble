import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect } from "react-router";

function SearchBar(props) {
  const options = ["Movie", "Game", "Tv-Show"];
  const [text, changeText] = useState("");

  if (options.includes(text)) {
    return <Redirect to={"/" + text} />;
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
