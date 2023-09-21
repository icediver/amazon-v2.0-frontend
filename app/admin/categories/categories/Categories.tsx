'use client'

import { FC } from 'react'

import AdminList from '@/ui/admin/admin-list/AdminList'
import Heading from '@/ui/heading/Heading'

import { useAdminCategories } from '../useAdminCategories'

const Categories: FC = () => {
	const { data, isFetching, mutate } = useAdminCategories()

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
export default Categories
