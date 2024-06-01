// _app.tsx

import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store"; // Assuming your store file is named index.ts or store.ts
import "../styles/globals.css";
import Header from "../components/elements/layouts/header";
import "tailwindcss/tailwind.css";
import "../styles/CustomTable.module.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import axios from "axios";

dayjs.locale("ja");
dayjs.extend(utc);
dayjs.extend(timezone);

axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="min-h-screen overflow-x-auto">
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
