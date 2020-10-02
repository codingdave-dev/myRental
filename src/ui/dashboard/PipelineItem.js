import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: "2em",
    paddingRight: "2em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
  },
  value: {
    // fontWeight: "bold",
  },
  title: {
    textTransform: "uppercase",
    // fontWeight: "bold",
  },
  subTitle: {
    textTransform: "uppercase",
    // fontWeight: "bold",
  },
}));

const mapStateToProps = (state) => {
  let settings = {};

  if (state.global.settings && state.global.settings.length > 0) {
    settings = state.global.settings[0];
  }
  return {
    settings,
  };
};

const PipelineItem = ({
  settings,
  userValue,
  pipelineTotalValue,
  title,
  subTitle,
  dollar,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [currency, setCurrency] = useState("");
  const [linearValue, setLinearValue] = useState(0)

  useEffect(() => {
    if (settings.defaultCurrency === "USD") {
      setCurrency("$");
    }
  }, [settings, currency]);
  return (
    <Grid container direction={"column"} className={classes.container}>
      <Grid item>
        <Typography variant={"h4"} className={classes.value}>
          {dollar ? currency : null}
          {userValue}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant={"subtitle1"} className={classes.title}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <LinearProgress variant="determinate" value={linearValue} />
      </Grid>
      <Grid item>
        <Typography variant={"subtitle1"} className={classes.subTitle}>
          {subTitle} {dollar ? currency : null}
          {pipelineTotalValue}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(PipelineItem);
