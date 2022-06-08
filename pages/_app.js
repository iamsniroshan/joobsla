import Head from "next/head";
import "styles/globals.css";
import "tailwindcss/tailwind.css";
import { SessionProvider  } from "next-auth/react";
import { AuthGuard } from "hoc/AuthGuard";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { useState } from "react";



function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Next.js Admin</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider  session={pageProps.session}>
            {Component.auth ? (
              <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
            ) : (
              getLayout(<Component {...pageProps} />)
            )}
          </SessionProvider >
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
