import type { Metadata } from 'next'

import Products from './products/Products'
import { NO_INDEX_PAGE } from '@/constants/app.constants'

export const metadata: Metadata = {
	title: 'Products',
	...NO_INDEX_PAGE
}

export default function ProductPage() {
	return <Products />
}
