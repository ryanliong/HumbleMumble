import React from "react";

function Logo(props) {
  return (
    <a href={props.link}>
      <img
        src={process.env.PUBLIC_URL + "/MH.png"}
        alt="HumbleMumble"
        id={props.name}
      />
    </a>
  );
}

export default Logo;
