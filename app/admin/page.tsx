import type { Metadata } from 'next'

import Dashboard from './dashboard/Dashboard'
import { NO_INDEX_PAGE } from '@/constants/app.constants'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return <Dashboard />
}
