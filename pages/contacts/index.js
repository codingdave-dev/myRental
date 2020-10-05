import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Search from "../../src/ui/search/Search";
import Button from "@material-ui/core/Button";
import { fetchAllUsers } from "../../src/store/actions/contactsActions/contactsActions";
import { connect } from "react-redux";
import ContactsTable from "../../src/ui/contacts/ContactsTable";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: "1em",
    paddingRight: "1em",
  },

  buttonWrapper: {
    paddingLeft: "0.5em",
  },
}));

const actions = {
  fetchAllUsers,
};

const mapStateToProps = (state) => {
  let users = [];

  if (state.contacts.users && state.contacts.users.length > 0) {
    users = state.contacts.users;
  }
  return {
    users,
  };
};

const Index = ({ fetchAllUsers, users }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log(searchResults);
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
          <Search data={users} setSearchResults={setSearchResults} />
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

      <Grid item container>
        <ContactsTable
          rows={searchResults < 1 ? users : users.filter((user) => user.search)}
        />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, actions)(Index);
