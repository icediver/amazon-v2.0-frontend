'use client'

import { FC } from 'react'

import AdminList from '@/ui/admin/admin-list/AdminList'
import Heading from '@/ui/heading/Heading'

import { useAdminReviews } from '../useAdminReviews'

const Reviews: FC = () => {
	const { data, isFetching } = useAdminReviews()

	return (
		<>
			<Heading className='mb-7'>Reviews</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</>
	)
}
export default Reviews
