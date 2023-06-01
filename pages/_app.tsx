import '@/assets/styles/globals.scss'
import Loader from '@/ui/loader/Loader';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
// import NextNProgress from 'nextjs-progressbar';
import Router from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
		Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });
   
  }, [Router])
	return <>
	{isLoading && <Loader/>}
	<Component {...pageProps} />
	</>
}
 