// _app.tsx

import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store"; // Assuming your store file is named index.ts or store.ts
import "../styles/globals.css";
import Header from "../components/elements/layouts/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
