import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import { Card, Box, Typography, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import InfiniteListExample from "./InfiniteListExample";

function FriendList() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1100,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  }));
  const classes = useStyles();
  const friend = {
    img:
      "https://steemitimages.com/DQmQbki6acfNKT9cX3MWBxsxSTHEEk16PVeqyvGyCXSVu6i/friend.jpg",
    title: "friend",
    author: "friend",
  };
  const tileData = [friend, friend, friend, friend, friend, friend];
  return (
    <Box>
      <Card style={{ width: 1310 }}>
        <CardContent>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
              <ListSubheader component="div">Friend List</ListSubheader>
            </GridListTile>
            {tileData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                    ></IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FriendList;
