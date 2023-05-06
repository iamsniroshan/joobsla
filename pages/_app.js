import Head from "next/head";
import "styles/globals.css";
import "tailwindcss/tailwind.css";
import { SessionProvider  } from "next-auth/react";
import { AuthGuard } from "hoc/AuthGuard";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";;
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";



function App({ Component, pageProps:{ session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <>
      <Head>
        <title>Next.js Admin</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider  session={session}>
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
