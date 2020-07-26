import React from "react";
import { Card, Box, Typography } from "@material-ui/core";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
function OptionalCarousel(props) {
  const details = props.details.map((info) => (
    <div>
      <Typography
        style={{
          position: "absolute",
          color: "white",
          paddingTop: 70,
          paddingLeft: 40,
          maxWidth: 380,
        }}
        variant="h4"
      >
        {info.title}
      </Typography>
      <img style={{ width: 425 }} src={info.image_url} alt={info.title}></img>
    </div>
  ));
  const filler = ["Fill up", "your list", "for more", "recent media"].map(
    (text) => (
      <div>
        <Typography variant="h4" style={{ color: "white" }}>
          {text}
        </Typography>
      </div>
    )
  );
  return (
    <Carousel
      autoplay
      autoplaySpeed={1000}
      slidesToShow={3}
      draggable={true}
      infinite={true}
      swipeToSlide={true}
      style={{
        height: 200,
        background: "#364d79",
        overflow: "hidden",
        textAlign: "center",
        lineHeight: 10,
      }}
    >
      {details.length < 3 ? details.concat(filler) : details}
    </Carousel>
  );
}

export default OptionalCarousel;
