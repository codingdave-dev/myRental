import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "200px",
    padding: "0.5em",
    border: "1px solid" + theme.palette.primary.main,
  },
  title: {
    height: "78px",
    textAlign: "center",
  },
  value: {
    fontSize: "5em",
  },
  subValue: {
    fontSize: "3em",
  },
  subText: {
    fontSize: "0.9em",
  },
}));

const DashboardItem = ({
  title,
  value,
  value1,
  value2,
  subText1,
  subText2,
  dual,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      className={classes.container}
    >
      <Grid item className={classes.title}>
        <Typography variant={"subtitle1"}>{title}</Typography>
      </Grid>

      {!dual && (
          <Grid item >
            <Typography variant={"h3"} className={classes.value}>
              {value}
            </Typography>
          </Grid>
      )}

      {dual && (
          <Grid item container>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Grid item container direction={"column"} alignItems={"center"}>
                <Grid item>
                  <Typography variant={"h3"} className={classes.subValue}>
                    {value1}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"caption"} className={classes.subText}>
                    {subText1}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={6}>
              <Grid item container direction={"column"} alignItems={"center"}>
                <Grid item>
                  <Typography variant={"h3"} className={classes.subValue}>
                    {value2}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"caption"} className={classes.subText}>
                    {subText2}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      )}




    </Grid>
  );
};

export default DashboardItem;
