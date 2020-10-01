import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

import { Provider } from "react-redux";
import { useStore } from "../src/store/store";
import Header from "../src/ui/Header";

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    if (props.router.route === "/") {
      setHeader(false);
    } else {
      setHeader(true);
    }
  }, [props]);

  return (
    <Fragment>
      <Head>
        <title>Sign In | myRental</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {header && (
            <Header
              value={value}
              setValue={setValue}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          )}

          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </Fragment>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
