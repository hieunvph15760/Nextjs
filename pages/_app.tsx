import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { AppPropsWidthLayout } from '../models/layout';
import instace from '../api/instance';
import {SWRConfig} from "swr";

function MyApp({ Component, pageProps }: AppPropsWidthLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <LayoutWrapper>
      <SWRConfig value={{fetcher: async (url) => await instace.get(url)}}>
        <Component {...pageProps} />
      </SWRConfig>
    </LayoutWrapper>
  )
}

export default MyApp
