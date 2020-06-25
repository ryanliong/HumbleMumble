import React from "react";
import {
  Container,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

function SearchResultsItem(props) {
  return (
    <Card style={{ maxHeight: 300 }}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <CardMedia
            image={
              props.attributes.image_url == null
                ? "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                : props.attributes.image_url
            }
            style={{
              width: 200,
              height: 300,
            }}
          ></CardMedia>
        </Grid>
        <Grid item>
          <CardContent style={{ maxWidth: 410, paddingBottom: 0 }}>
            <Typography variant="h5">{props.attributes.title}</Typography>
          </CardContent>
          <CardContent style={{ maxWidth: 410 }}>
            <Typography variant="body1">{props.attributes.overview}</Typography>
          </CardContent>
          <CardContent>
            <Typography>Misc</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SearchResultsItem;
