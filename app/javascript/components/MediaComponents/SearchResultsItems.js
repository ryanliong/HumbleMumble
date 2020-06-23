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
    <Card>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <CardMedia
            image={props.attributes.image_url}
            style={{
              width: 200,
              height: 300,
            }}
          ></CardMedia>
        </Grid>
        <Grid item>
          <CardContent>
            <Typography>{props.attributes.title}</Typography>
          </CardContent>
          <CardContent>
            <Typography>{props.attributes.overview}</Typography>
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
