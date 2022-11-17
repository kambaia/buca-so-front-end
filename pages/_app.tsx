import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import GlobalStyle from "../src/styles/globalstyles";
import theme from '../src/styles/theme'
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
export type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps?.session}>
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
