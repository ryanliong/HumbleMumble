import React from "react";
import { Card, Box } from "@material-ui/core";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
function OptionalCarousel() {
  return (
    <Carousel
      //   autoplay
      autoplaySpeed={100}
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
      <div>
        <h3>Recent</h3>
      </div>
      <div>
        <h3>Media</h3>
      </div>
      <div>
        <h3>here</h3>
      </div>
      <div>
        <h3>woohoo</h3>
      </div>
    </Carousel>
  );
}

export default OptionalCarousel;
