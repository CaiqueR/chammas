/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.scss";
import React from "react";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
