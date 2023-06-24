import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import '@/assets/styles/globals.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({
	Component,
	pageProps
}: AppProps ) {
	return (
		<QueryClientProvider client={queryClient}>
						<Component {...pageProps} />
		</QueryClientProvider>
	)
}
