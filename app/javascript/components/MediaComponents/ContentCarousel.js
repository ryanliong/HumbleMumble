import React from "react";
import { Card, Box } from "@material-ui/core";
import { Carousel } from "antd";

function ContentCarousel() {
  return (
    <Box>
      <Card style={{ width: 1000 }}>
        <Carousel
          autoplay
          style={{
            width: 1000,
            height: 500,
            background: "#364d79",
            overflow: "hidden",
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </Card>
    </Box>
  );
}

export default ContentCarousel;
