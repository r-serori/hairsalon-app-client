// _app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Assuming your store file is named index.ts or store.ts

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
