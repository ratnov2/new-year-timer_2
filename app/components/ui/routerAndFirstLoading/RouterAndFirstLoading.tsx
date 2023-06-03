import Router from 'next/router'
import { useEffect, useState } from 'react'

import Loader from '@/ui/loader/Loader'
import LoadingScreen from '@/ui/loading-screen/LoadingScreen'

import useBlockOverflow from '../../../hooks/useBlockOverflow'

const RouterAndFirstLoading = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isLoading2, setIsLoading2] = useState(false)
	const { setIsHidden } = useBlockOverflow(true)
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

	useEffect(() => {
		setTimeout(() => {
			setIsLoading2(true)
			setIsHidden(false)
		}, 2000)
	}, [])

	return (
		<>
			{isLoading && <Loader />}
			{!isLoading2 && <LoadingScreen />}
		</>
	)
}
export default RouterAndFirstLoading
