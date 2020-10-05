import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  image: {
    width: "50px",
  },
}));

const ContactsTable = ({ rows }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "60px" }}>{/*IMAGE*/}</TableCell>
              <TableCell style={{ width: "160px" }}>Name</TableCell>
              <TableCell style={{ width: "200px" }}>Email</TableCell>
              <TableCell style={{ width: "200px" }}>Contact Number</TableCell>
              <TableCell style={{ width: "150px" }}>Type</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.uid}>
                  <TableCell>
                    <img
                      src={row.avatar}
                      alt={`${row.fullName} photo`}
                      className={classes.image}
                    />
                  </TableCell>
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.contactNumber}</TableCell>
                  <TableCell>USER TYPE</TableCell>
                  <TableCell>USER ADDRESS</TableCell>
                </TableRow>

              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ContactsTable;
