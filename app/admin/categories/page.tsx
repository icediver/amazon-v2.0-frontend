import type { Metadata } from 'next'

import Categories from './categories/Categories'
import { NO_INDEX_PAGE } from '@/constants/app.constants'

export const metadata: Metadata = {
	title: 'Products',
	...NO_INDEX_PAGE
}

export default function CategoryPage() {
	return <Categories />
}
