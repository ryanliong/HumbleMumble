import React from "react";
import NavBar from "../NavBar/NavBar";
import AccountTitle from "../Account/AccountTitle/AccountTitle";
import Shows from "../Account/ShowInfo/Shows";
import Movies from "../Account/MovieInfo/Movies";
import Games from "../Account/GameInfo/Games";

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
