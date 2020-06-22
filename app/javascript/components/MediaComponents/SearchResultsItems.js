import React from "react";
import {
  Container,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

function SearchResultsItem() {
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
            image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            style={{
              width: 200,
              height: 300,
            }}
          ></CardMedia>
        </Grid>
        <Grid item>
          <CardContent>
            <Typography>Title</Typography>
          </CardContent>
          <CardContent>
            <Typography>Description</Typography>
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
