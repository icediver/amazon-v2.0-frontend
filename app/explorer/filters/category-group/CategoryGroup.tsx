import { FC } from 'react'

import Checkbox from '@/ui/checkbox/Checkbox'
import Loader from '@/ui/loader/Loader'

import { useCategories } from '@/hooks/queries/useCategories'

import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

import styles from './CategoryGroup.module.scss'

const CategoryGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { data, isLoading } = useCategories()

	return (
		<FilterWrapper title='Category'>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				data.map(category => {
					const isChecked = queryParams.categoryId === category.id.toString()
					toString()
					return (
						<Checkbox
							isChecked={isChecked}
							onClick={() =>
								updateQueryParams(
									'categoryId',
									isChecked ? '' : category.id.toString()
								)
							}
							key={category.id}
							className='mb-2 text-sm'
						>
							{category.name}
						</Checkbox>
					)
				})
			) : (
				<p>Categories not found</p>
			)}
		</FilterWrapper>
	)
}
export default CategoryGroup
