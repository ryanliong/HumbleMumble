import React, { useState } from "react";
import FriendsOpinion from "./FriendsOpinionTest";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
function Friends() {
  return (
    <Card style={{ width: 1310 }}>
      <CardContent>
        <Typography variant="h5">Reviews from your friends:</Typography>
      </CardContent>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <FriendsOpinion />
          </Grid>
          <Grid item>
            <FriendsOpinion />
          </Grid>
          <Grid item>
            <FriendsOpinion />
          </Grid>
          <Grid item>
            <FriendsOpinion />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Friends;
