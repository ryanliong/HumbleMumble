import React from "react";

function DescriptionImage(props) {
  return (
    <div>
      <a
        href={
          "https://www.google.com/search?q=" + props.name.replace(/\s/g, "+")
        }
      >
        <img src={props.imgUrl} alt="DescriptionImage" id="DescriptionImage" />
      </a>
    </div>
  );
}

export default DescriptionImage;
