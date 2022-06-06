import Head from "next/head";
import "styles/globals.css";
import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import { AuthGuard } from "hoc/AuthGuard";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'


export default App;

function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>Next.js Admin</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider session={pageProps.session}>
          {Component.auth ? (
            <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
          ) : (
            getLayout(<Component {...pageProps} />)
          )}
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   
    </>
  );
}
