import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Redirect } from "react-router";

function SearchBar() {
  const options = ["Movie", "Game", "Tv-Show"];
  const [text, changeText] = useState("");
  console.log(text);
  if (options.includes(text)) {
    return <Redirect to={"/" + text} />;
  }
  return (
    <div className="flex">
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
