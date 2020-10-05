import React, {useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    searchBox: {
        width: "100%",
    },
}));

const Search = ({data, setSearchResults}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const [search, setSearch] = useState("");
    // const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (event) => {
        setSearch(event.target.value);

        const searchData = data.map((searchItem) =>
            Object.values(searchItem).filter(
                (option) => option !== true && option !== false
            )
        );

        const matches = searchData.map((searchItem) =>
            searchItem.map((option) =>
                option
                    .toString()
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            )
        );


        const searchList = [...data];
        matches.map((searchItem, index) =>
            searchItem.includes(true)
                ? (searchList[index].search = true)
                : (searchList[index].search = false)
        );

        setSearchResults(searchList);

        if (event.target.value === "") {
            setSearchResults([]);
        }
    };
    return (
        <Grid item container justify={"center"}>
            <TextField
                size={'small'}
                value={search}
                onChange={handleSearch}
                id={"search-box"}
                label={"Search"}
                variant={"outlined"}
                className={classes.searchBox}
                color={"primary"}
                autoComplete={'off'}
            />
        </Grid>
    );
};

export default Search;