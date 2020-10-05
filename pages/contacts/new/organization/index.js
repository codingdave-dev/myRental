import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextInput from "../../../../src/common/form/TextInput";
import Telephone from "../../../../src/ui/contacts/forms/ContactBookForm";
import ContactBookForm from "../../../../src/ui/contacts/forms/ContactBookForm";
import PrimaryAddressForm from "../../../../src/ui/contacts/forms/PrimaryAddressForm";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0.4em",
  },
  fieldWrapper: {
    paddingTop: "0.3em",
    paddingBottom: "0.3em",
  },
  icon: {
    fontSize: "3em",
    color: theme.palette.common.textGrey,
  },
}));

const telephone = [
  {
    id: 1,
    value: "telephone",
    name: "Mobile/Cell",
  },
  {
    id: 2,
    value: "home",
    name: "Home",
  },
  {
    id: 1,
    value: "skype",
    name: "Skype",
  },
  {
    id: 1,
    value: "fax",
    name: "Fax",
  },
];
const email = [
  {
    id: 1,
    value: "home",
    name: "Home",
  },
  {
    id: 2,
    value: "work",
    name: "Work",
  },
];
const web = [
  {
    id: 1,
    value: "website",
    name: "Website",
  },
  {
    id: 2,
    value: "facebook",
    name: "Facebook",
  },
  {
    id: 3,
    value: "linkedin",
    name: "LinkedIn",
  },
  {
    id: 4,
    value: "twitter",
    name: "Twitter",
  },
];

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container alignItems={"center"} direction={"column"}>
      <Grid item container direction={"column"} style={{ width: "70%" }}>
        {/*FORM*/}
        <form autoComplete={"off"}>
          {/*BUTTON/TITLE CONTAINER*/}
          <Grid item container direction={"column"}>
            <Grid item>
              <Typography variant={"h4"}>Add Organization</Typography>
            </Grid>

            <Grid item style={{ marginLeft: "auto" }}>
              <Button
                variant={"outlined"}
                color={"primary"}
                className={classes.button}
              >
                Create
              </Button>
              <Button
                variant={"outlined"}
                color={"secondary"}
                className={classes.button}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>

          {/*INPUT CONTAINER*/}
          <Grid item container style={{ marginTop: "2em" }}>
            <Grid item lg={2}>
              {/*BLANK*/}
            </Grid>
            <Grid item lg={8}>
              <Grid item className={classes.fieldWrapper}>
                <Field
                  name={"name"}
                  label={"Name"}
                  component={TextInput}
                  type={"text"}
                  variant={"outlined"}
                />
              </Grid>
              <Grid item className={classes.fieldWrapper}>
                <Field
                  name={"tags"}
                  label={"Tags"}
                  component={TextInput}
                  type={"text"}
                  variant={"outlined"}
                />
              </Grid>
              <Grid item className={classes.fieldWrapper}>
                <Typography variant={"caption"}>Image</Typography>
                <br />
                <input
                  type="file"
                  accept=".jpg, .png, .jpeg"
                  onChange={(e) => console.log(e.target.files)}
                />
              </Grid>
            </Grid>
            <Grid item lg={2}>
              {/*BLANK*/}
            </Grid>
          </Grid>

          <hr
            style={{
              border: "1px solid lightgrey",
              marginTop: "2em",
              marginBottom: "2em",
              width: "95%",
            }}
          />

          {/*CONTACT CONTAINER*/}
          <Grid item container style={{ marginTop: "2em" }}>
            <Grid item container justify={"center"} lg={2}>
              <Grid item>
                <ContactPhoneIcon className={classes.icon} />
              </Grid>
            </Grid>
            <Grid item lg={8}>
              <Grid item>
                <ContactBookForm
                  children={telephone}
                  buttonName={"add telephone number"}
                  formName={"newOrganization"}
                  arrayName={"telephone"}
                  placeholder1={"Telephone"}
                  placeholder2={"Select an option"}
                  inputName1={"telephone"}
                  inputName2={"type"}
                />
              </Grid>
              <Grid item style={{ marginTop: "1em" }}>
                <ContactBookForm
                  children={email}
                  buttonName={"add a email"}
                  formName={"newOrganization"}
                  arrayName={"email"}
                  placeholder1={"Email"}
                  placeholder2={"Select an option"}
                  inputName1={"email"}
                  inputName2={"type"}
                />
              </Grid>
              <Grid item style={{ marginTop: "1em" }}>
                <ContactBookForm
                  children={web}
                  buttonName={"add a web link"}
                  formName={"newOrganization"}
                  arrayName={"web"}
                  placeholder1={"Web Link"}
                  placeholder2={"Select an option"}
                  inputName1={"webLink"}
                  inputName2={"type"}
                />
              </Grid>
            </Grid>
            <Grid item lg={2}>
              {/*BLANK*/}
            </Grid>
          </Grid>

          <hr
            style={{
              border: "1px solid lightgrey",
              marginTop: "2em",
              marginBottom: "2em",
              width: "95%",
            }}
          />

          {/*ADDRESS CONTAINER*/}
          <Grid item container style={{ marginTop: "2em" }}>
            <Grid item container justify={"center"} lg={2}>
              <Grid item>
                <LocationOnIcon className={classes.icon} />
              </Grid>
            </Grid>
            <Grid item lg={8}>
              <Grid item>

                <PrimaryAddressForm/>

              </Grid>
              <Grid item style={{ marginTop: "1em" }}>
                <ContactBookForm
                  children={email}
                  buttonName={"add a email"}
                  formName={"newOrganization"}
                  arrayName={"email"}
                  placeholder1={"Email"}
                  placeholder2={"Select an option"}
                  inputName1={"email"}
                  inputName2={"type"}
                />
              </Grid>
            </Grid>
            <Grid item lg={2}>
              {/*BLANK*/}
            </Grid>
          </Grid>

          {/*BUTTON CONTAINER*/}
          <Grid item container direction={"column"}>
            <Grid item style={{ marginLeft: "auto" }}>
              <Button
                variant={"outlined"}
                color={"primary"}
                className={classes.button}
              >
                Create
              </Button>
              <Button
                variant={"outlined"}
                color={"secondary"}
                className={classes.button}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default reduxForm({
  form: "newOrganization",
})(Index);
