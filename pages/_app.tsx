import type { AppProps } from 'next/app'
// import NextNProgress from 'nextjs-progressbar';
import Router from 'next/router'
import { useEffect, useState } from 'react'

import Loader from '@/ui/loader/Loader'
import LoadingScreen from '@/ui/loading-screen/LoadingScreen'

import '@/assets/styles/globals.scss'
import {useBlockOverflow} from '@/hooks/useBlockOverflow'

export default function App({ Component, pageProps }: AppProps) {
	const [isLoading, setIsLoading] = useState(false)
	const {isHidden, setIsHidden} =useBlockOverflow(true)
	useEffect(() => {
		Router.events.on('routeChangeStart', url => {
			setIsLoading(true)
		})

		Router.events.on('routeChangeComplete', url => {
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		})

		Router.events.on('routeChangeError', url => {
			setIsLoading(false)
		})
	}, [Router])

	const [isLoading2, setIsLoading2] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setIsLoading2(true)
			setIsHidden(false)
		}, 2000)
	}, [])
	
	return (
		<>
			{isLoading && <Loader />}
			{/* {!isLoading2 && <LoadingScreen />} */}
			<Component {...pageProps} /> 
		</>
	)
}
