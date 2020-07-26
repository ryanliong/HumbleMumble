import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@material-ui/core";
function InformationCard(props) {
  const overallInformation = (
    <Grid item xs={4}>
      <Card
        style={{
          height: 410,
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            style={{
              paddingBottom: 40,
              color: "white",
            }}
          >
            Overview
          </Typography>
          {props.info.map((stat) => (
            <Typography
              variant="h5"
              style={{ textAlign: "center", padding: 10, color: "white" }}
            >
              {stat}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );

  const smallInformation = (statsType, arrayOfStats, color) => (
    <Grid item xs={12}>
      <Card
        style={{
          height: 200,
          overflow: "auto",
          background: color,
          color: "white",
        }}
      >
        <CardContent>
          <Typography variant="h5" style={{ paddingBottom: 5, color: "white" }}>
            {statsType}
          </Typography>
          {arrayOfStats.map((item) => (
            <div>
              <Typography>
                {" "}
                <img
                  alt={item.attributes.title}
                  src={item.attributes.image_url}
                  style={{ width: 30, paddingRight: 5 }}
                />
                {item.attributes.title}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
  console.log(props.info);
  return props.type === "overall"
    ? overallInformation
    : smallInformation(props.name, props.info, props.color);
}

export default InformationCard;
