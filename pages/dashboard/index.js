import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import PipelineItem from "../../src/ui/dashboard/PipelineItem";
import { fetchUserDashboardValues } from "../../src/store/actions/dashboardActions/dashboardActions";
import { fetchGlobalDashboardValues } from "../../src/store/actions/globalActions/globalActions";
import DashboardItem from "../../src/ui/dashboard/DashboardItem";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: "1em",
    paddingRight: "1em",
  },
  pipelineContainer: {
    border: '1px solid' + theme.palette.primary.main,
    marginTop: '2em',
    marginBottom: '2em'
  }
}));

const actions = {
  fetchGlobalDashboardValues,
  fetchUserDashboardValues,
};

const mapStateToProps = (state) => {
  let globalValues = {};
  let values = {};

  if (state.global.values && state.global.values.length > 0) {
    globalValues = state.global.values[0];
  }

  if (state.dashboard.values && state.dashboard.values.length > 0) {
    values = state.dashboard.values[0];
  }
  return {
    profile: state.firebase.profile,
    values,
    globalValues,
  };
};

const Index = ({
  profile,
  values,
  globalValues,
  fetchGlobalDashboardValues,
  fetchUserDashboardValues,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchGlobalDashboardValues(), fetchUserDashboardValues(profile.uid);
  }, [profile, fetchGlobalDashboardValues, fetchUserDashboardValues]);
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      className={classes.container}
    >
      <Grid item>
        <Typography variant={"h4"}>{profile?.firstName}'s Dashboard</Typography>
      </Grid>

      {/*PIPELINE*/}
      <Grid item container className={classes.pipelineContainer} >
        <Grid item lg={3}>
          <PipelineItem
            userValue={values.userInquiries}
            pipelineTotalValue={globalValues.globalInquiries}
            title={"Inquiries"}
            subTitle={"Out Of"}
          />
        </Grid>
        <Grid item lg={3}>
          <PipelineItem
            userValue={values.userQuotes}
            pipelineTotalValue={globalValues.globalQuotes}
            title={"Quotes"}
            subTitle={"Out Of"}
          />
        </Grid>

        <Grid item lg={3}>
          <PipelineItem
            userValue={values.userOrders}
            pipelineTotalValue={globalValues.globalOrders}
            title={"Orders"}
            subTitle={"Out Of"}
          />
        </Grid>
        <Grid item lg={3}>
          <PipelineItem
            userValue={values.userOrderValue}
            pipelineTotalValue={globalValues.globalOrderValue}
            title={"Order Value"}
            subTitle={"Total Order Value"}
            dollar
          />
        </Grid>
      </Grid>

      {/*INFORMATION BOXES*/}
      <Grid item container spacing={2}>
        <Grid item lg={3} >
          <DashboardItem
              title={'Activities Starting Today'} value={20} value1={10} value2={30} subText1={'left'} subText2={'right'}
          />
        </Grid>

        <Grid item lg={3}>
          <DashboardItem dual/>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, actions)(Index);
