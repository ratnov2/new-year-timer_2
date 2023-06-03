import type { AppProps } from 'next/app'

import RouterAndFirstLoading from '@/ui/routerAndFirstLoading/RouterAndFirstLoading'

import '@/assets/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<RouterAndFirstLoading />
			<Component {...pageProps} />
		</>
	)
}
