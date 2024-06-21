// _app.tsx

import React, { useEffect } from "react";
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
import { useRouter } from "next/router";

dayjs.locale("ja");
dayjs.extend(utc);
dayjs.extend(timezone);

axios.defaults.withCredentials = true;

// クッキーを取得する関数
// function getCookie(name: string) {
//   if (typeof document !== "undefined") {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop()?.split(";").shift();
//   }
//   return null;
// }

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // useEffect(() => {
  //   // ページロード時に 'laravel_session' クッキーをチェックし、LocalStorage をクリアする
  //   if (!getCookie("laravel_session")) {
  //     localStorage.clear();
  //   }
  // }, [router.pathname]); // router.pathname を依存配列に追加して、ページ遷移時にも確認する

  return (
    <Provider store={store}>
      <div className="min-h-screen overflow-x-auto  overflow-y-auto">
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
