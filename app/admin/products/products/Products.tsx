'use client'

import { FC } from 'react'

import AdminList from '@/ui/admin/admin-list/AdminList'
import Heading from '@/ui/heading/Heading'

import { useAdminProducts } from '../useAdminProducts'

const Products: FC = () => {
	const { data, isFetching, mutate } = useAdminProducts()

	return (
		<>
			<Heading className='mb-7'>Products</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}
export default Products
