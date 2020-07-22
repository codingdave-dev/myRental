import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

import { Provider } from "react-redux";
import { useStore } from "../src/store/store";

import Header from "../src/ui/Header";
import DialogManager from "../src/dialogs/DialogManager";
import Footer from "../src/ui/Footer";

import firebase from '../src/config/firebase'
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const reactReduxFirestoreConfig = {
    userProfile: "users",
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false,
  };

  const rrfProps = {
    firebase,
    config: reactReduxFirestoreConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <Fragment>
      <Head>
        <title>ENTER PAGE TITLE HERE</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <Header
                value={value}
                setValue={setValue}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />

            <DialogManager />

            <Component {...pageProps} />

            <Footer/>
          </ReactReduxFirebaseProvider>

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
