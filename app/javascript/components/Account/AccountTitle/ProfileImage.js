import React from "react";

function ProfileImage(props) {
  return (
    <div>
      <a
        href={
          "https://www.google.com/search?q=" + props.name.replace(/\s/g, "+")
        }
      >
        <img
          src={props.imgUrl}
          alt="ProfileImage"
          id="ProfileImage"
          class="top"
        />
      </a>
    </div>
  );
}

export default ProfileImage;
