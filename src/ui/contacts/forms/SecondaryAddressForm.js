import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AddIcon from "@material-ui/icons/Add";

import { Field, FieldArray } from "redux-form";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import CancelIcon from "@material-ui/icons/Cancel";

import TextInput from "../../../common/form/TextInput";
import SelectInput from "../../../common/form/SelectInput";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({}));

const SecondaryAddressForm = ({
  arrayName,
  placeholder1,
  placeholder2,
  inputName1,
  inputName2,
  buttonName,
  children,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [addLocation, setAddLocation] = useState(false);

  // FIELD ARRAY RENDER
  const locationFields = ({ fields, meta: { error, submitFailed } }) => (
    <Fragment>
      {fields.map((field, index) => (
        <Fragment key={index}>
          <Grid item container alignItems={"center"} key={index}>
            <Grid item lg={7}>
              <Field
                // inputStyle={classes.textInput}
                placeholder={placeholder1}
                name={`${field}.${inputName1}`}
                label={placeholder1}
                type={"text"}
                variant={"outlined"}
                component={TextInput}
              />
            </Grid>
            <Grid item lg={4} style={{ paddingLeft: "1em" }}>
              <Field
                // inputStyle={classes.textInput}
                name={`${field}.${inputName2}`}
                placeholder={placeholder2}
                label={placeholder2}
                type={"text"}
                variant={"outlined"}
                component={SelectInput}
              >
                {children?.map((child) => (
                  <MenuItem key={child.id} value={child.value}>
                    {child.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            <Grid item lg={1}>
              <IconButton
                aria-label="delete"
                onClick={() => fields.remove(index)}
              >
                <CancelIcon style={{ color: theme.palette.error.main }} />
              </IconButton>
            </Grid>
          </Grid>
        </Fragment>
      ))}
      <Grid item container alignItems={"center"} style={{ marginTop: "0.5em" }}>
        <Grid item>
          <Button
            startIcon={<AddIcon />}
            variant={"contained"}
            color={"primary"}
            size={"small"}
            onClick={() => {
              fields.push({});
              setAddLocation(true);
            }}
          >
            {buttonName}
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );

  return (
    <Fragment>
      <Grid item container direction={"column"} className={classes.formWrapper}>
        <FieldArray name={arrayName} component={locationFields} />
      </Grid>
    </Fragment>
  );
};

export default SecondaryAddressForm;
