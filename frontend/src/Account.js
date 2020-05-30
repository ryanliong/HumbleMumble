import React from "react";
import NavBar from "./NavBar/NavBar";
import AccountTitle from "./AccountInfo/AccountTitle/AccountTitle";
import Shows from "./AccountInfo/ShowInfo/Shows";
import Movies from "./AccountInfo/MovieInfo/Movies";
import Games from "./AccountInfo/GameInfo/Games";
import DescriptionImage from "./DescriptionImage";

function Account() {
  return (
    <div>
      <NavBar name="SmallLogo" />
      <AccountTitle />
      <Shows />
      <Movies />
      <Games />
    </div>
  );
}

export default Account;
