import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@material-ui/core";
function InformationCard(props) {
  const overallInformation = (
    <Grid item xs={4}>
      <Card style={{ height: 410 }}>
        <CardContent>
          <Typography>Overall Information</Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  const smallInformation = (statsType, arrayOfStats) => (
    <Grid item xs={12}>
      <Card style={{ height: 200 }}>
        <CardContent>
          <Typography>{statsType}</Typography>
          {arrayOfStats.map((stat) => (
            <Typography> {stat}</Typography>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );

  return props.type === "overall"
    ? overallInformation
    : smallInformation(props.name, props.info);
}

export default InformationCard;
