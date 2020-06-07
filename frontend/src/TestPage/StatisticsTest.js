import React, { useState } from "react";
import { Card, Grid, Typography, CardContent } from "@material-ui/core";

function Statistics() {
  return (
    <Card style={{ height: 50, width: 1310 }}>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography variant="h5">Times Watched:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Rating:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Last Watched:</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Statistics;
