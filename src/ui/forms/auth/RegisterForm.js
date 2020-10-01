import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextInput from "../../../common/form/TextInput";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {registerUser} from "../../../store/actions/authActions/authActions";
import Typography from "@material-ui/core/Typography";

const actions = {
  registerUser,
};

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    paddingLeft: "0.7em",
    paddingRight: "0.7em",
  },
  error: {
    color: theme.palette.error.main,
    fontWeight: 500,
  },
}));

const RegisterForm = ({
  registerUser,
  handleSubmit,
  error,
  submitting,
  setLogin,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <form autoComplete={"off"} onSubmit={handleSubmit(registerUser)}>
      <Grid container direction={"column"} className={classes.loginContainer}>
        <Grid item style={{ marginTop: "1em" }}>
          <Field
              label={"First Name"}
              name={"firstName"}
              type={"text"}
              variant={"outlined"}
              component={TextInput}
          />
        </Grid>
        <Grid item style={{ marginTop: "1.5em" }}>
          <Field
              label={"Last Name"}
              name={"lastName"}
              type={"text"}
              variant={"outlined"}
              component={TextInput}
          />
        </Grid>
        <Grid item style={{ marginTop: "1.5em" }}>
          <Field
            label={"Email"}
            name={"email"}
            type={"text"}
            variant={"outlined"}
            component={TextInput}
          />
        </Grid>
        <Grid item style={{ marginTop: "1.5em" }}>
          <Field
            label={"Password"}
            name={"password"}
            type={"password"}
            variant={"outlined"}
            component={TextInput}
          />
        </Grid>
        {error && (
          <Grid item style={{ marginTop: "0.5em" }}>
            <Typography variant={"subtitle1"} className={classes.error}>
              {error}
            </Typography>
          </Grid>
        )}

        <Grid item style={{ marginTop: "1.2em", marginBottom: "1em" }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            type={"submit"}
            disabled={submitting}
          >
            Register
          </Button>
        </Grid>
        <Grid item>
          <Grid item container justify={"center"}>
            <Grid item>
              <Typography
                variant={"caption"}
                onClick={() => setLogin(true)}
                style={{ cursor: "pointer" }}
              >
                Login?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "registerForm" })(RegisterForm));
