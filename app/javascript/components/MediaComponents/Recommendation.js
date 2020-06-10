import React from "react";
import { Card, Box, Typography, CardContent } from "@material-ui/core";
import OptionalCarousel from "./OptionalCarousel";

function Recommendation() {
  return (
    <Box>
      <Card style={{ width: 1310 }}>
        <CardContent>
          <Typography variant="h5">Recommendation</Typography>
          <OptionalCarousel></OptionalCarousel>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Recommendation;
