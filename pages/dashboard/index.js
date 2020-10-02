import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import PipelineItem from "../../src/ui/dashboard/PipelineItem";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: '1em',
        paddingRight: '1em',
    }
}));

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const Index = ({profile}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container alignItems={"center"} direction={"column"} className={classes.container}>
            <Grid item>
                <Typography variant={'h4'}>{profile?.firstName}'s Dashboard</Typography>
            </Grid>

            <Grid item container>
                <Grid item lg={5}>

                    <PipelineItem userValue={20} pipelineTotalValue={60} title={'Inquiries'} subTitle={'Out Of'}/>
                    <PipelineItem userValue={20} title={'Inquiries'} subTitle={'Out Of'}/>
                </Grid>

                <Grid item lg={7}>
RIGHT
                </Grid>

            </Grid>



        </Grid>
    );
};

export default connect(mapStateToProps)(Index);