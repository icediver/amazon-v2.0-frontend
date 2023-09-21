import type { Metadata } from 'next'

import Orders from './orders/Orders'
import { NO_INDEX_PAGE } from '@/constants/app.constants'

export const metadata: Metadata = {
	title: 'Orders',
	...NO_INDEX_PAGE
}

export default function ProductPage() {
	return <Orders />
}
