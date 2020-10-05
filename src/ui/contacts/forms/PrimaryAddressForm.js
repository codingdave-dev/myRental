import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Field} from "redux-form";
import TextInput from "../../../common/form/TextInput";
import SelectInput from "../../../common/form/SelectInput";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import TextArea from "../../../common/form/TextArea";

const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const PrimaryAddressForm = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid item container direction={'column'} >

            <Grid item lg={12}>
                <Field
                    placeholder={'Street'}
                    name={'primaryStreet'}
                    label={'Primary Street'}
                    type={"text"}
                    variant={"outlined"}
                    component={TextArea}
                    rows={4}
                />
            </Grid>
            <Grid item lg={12} style={{ marginTop: "1em" }}>
                <Grid item container>
                    <Grid item lg={4} style={{paddingRight: '0.4em'}}>
                        <Field
                            placeholder={'City'}
                            name={'primaryCity'}
                            label={'Primary City'}
                            type={"text"}
                            variant={"outlined"}
                            component={TextInput}

                        />
                    </Grid>
                    <Grid item lg={4} style={{paddingLeft: '0.4em', paddingRight: '0.4em'}}>
                        <Field
                            placeholder={'State'}
                            name={'primaryState'}
                            label={'Primary State'}
                            type={"text"}
                            variant={"outlined"}
                            component={TextInput}

                        />
                    </Grid>
                    <Grid item lg={4} style={{paddingLeft: '0.4em'}}>
                        <Field
                            placeholder={'Zip Code'}
                            name={'primaryZipCode'}
                            label={'Primary Zip Code'}
                            type={"text"}
                            variant={"outlined"}
                            component={TextInput}

                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={8} style={{ marginTop: "1em", paddingRight: '0.4em' }}>
                <Field
                    placeholder={'Country'}
                    name={'primaryCountry'}
                    label={'Primary Country'}
                    type={"text"}
                    variant={"outlined"}
                    component={TextInput}

                />
            </Grid>

        </Grid>
    );
};

export default PrimaryAddressForm;