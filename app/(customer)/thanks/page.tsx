import type { Metadata } from 'next'

import Heading from '@/ui/heading/Heading'

import { NO_INDEX_PAGE } from '@/constants/app.constants'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return <Heading>Thanks!</Heading>
}
