import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Search from "../../src/ui/search/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: "1em",
    paddingRight: "1em",
  },

  buttonWrapper: {
    paddingLeft: "0.5em",
  },
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchResults, setSearchResults] = useState([]);
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      className={classes.container}
    >
      <Grid item>
        <Typography variant={"h4"}>Contacts & Venues</Typography>
      </Grid>

      <Grid item container alignItems={"center"} style={{ marginTop: "2em" }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Search setSearchResults={setSearchResults} />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid item container justify={"flex-end"}>
            <Grid item className={classes.buttonWrapper}>
              <Button variant={"outlined"} color={"primary"} size={"small"}>
                Add Contact
              </Button>
            </Grid>
            <Grid item className={classes.buttonWrapper}>
              <Button variant={"outlined"} color={"primary"} size={"small"}>
                Add Venue
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
