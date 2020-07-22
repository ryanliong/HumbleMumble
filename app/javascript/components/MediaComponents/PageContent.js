import React, { useState, useEffect } from "react";
import DescriptionImage from "../MediaComponents/DescriptionImage";
import Description from "../MediaComponents/Description";
import Statistics from "../MediaComponents/Statistics";
import Friends from "../MediaComponents/Friends";
import { Container, Grid } from "@material-ui/core";
import ContentCarousel from "../MediaComponents/ContentCarousel";
import LoadingBar from "../MediaComponents/LoadingBar";

function PageContent(props) {
  const [loading, setLoadStatus] = useState(true);

  // 2 secs loading
  useEffect(() => {
    setTimeout(() => setLoadStatus(false), 2000);
  }, []);

  return loading ? (
    <LoadingBar
      message="Please wait..."
      description="Fetching your results..."
    ></LoadingBar>
  ) : (
    <Container maxWidth="lg" style={{ marginTop: 50 }}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs>
              {/* Top left image here */}
              <DescriptionImage
                imgUrl={props.data.imageUrl}
                name={props.data.title}
                type={props.data.type}
                slug={props.data.slug}
              ></DescriptionImage>
            </Grid>
            <Grid item xs={9}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
                spacing={2}
              >
                <Grid item xs>
                  {/* Carousel here */}
                  <ContentCarousel
                    RT={props.data.ReviewData}
                    type={props.data.type}
                  />
                </Grid>
                <Grid item xs>
                  {/* Description here */}
                  <Description
                    h={185}
                    title="Description"
                    description={props.data.description}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          {/* Statistics here */}
          <Statistics />
        </Grid>
        <Grid item xs>
          {/* Friends reviews here */}
          {/* <Friends /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PageContent;
