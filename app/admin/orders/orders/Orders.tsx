'use client'

import { FC } from 'react'

import AdminList from '@/ui/admin/admin-list/AdminList'
import Heading from '@/ui/heading/Heading'

import { useAdminOrders } from '../useAdminOrders'

const Orders: FC = () => {
	const { data, isFetching } = useAdminOrders()

	return (
		<>
			<Heading className='mb-7'>Orders</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</>
	)
}
export default Orders
