import Head from "next/head";
import "styles/globals.css";
import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import { AuthGuard } from "hoc/AuthGuard";
import { atom } from 'jotai'


export default App;

function App({ Component, pageProps }) {
  const isLoginPopupAtom = atom(false)
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>Next.js Admin</title>
      </Head>
        <Provider session={pageProps.session}>
          {Component.auth ? (
            <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
          ) : (
            getLayout(<Component {...pageProps} />)
          )}
        </Provider>
    </>
  );
}
