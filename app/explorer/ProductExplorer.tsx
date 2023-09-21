'use client'

import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { FC, useState } from 'react'

import Button from '@/ui/button/Button'
import Catalog from '@/ui/catalog/Catalog'
import SortDropdown from '@/ui/catalog/sort-dropdown/SortDropdown'
import Heading from '@/ui/heading/Heading'

import { TypePaginationProducts } from '@/types/product.interface'

import styles from './ProductExplorer.module.scss'
import Filters from './filters/Filters'
import Pagination from './pagination/Pagination'
import { useFilters } from './useFilters'
import { ProductService } from '@/services/product/product.service'

interface IProductExplorer {
	initialProducts: TypePaginationProducts
}
const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery({
		queryKey: ['product explorer', queryParams],
		queryFn: () => ProductService.getAll(queryParams),
		initialData: initialProducts,
		enabled: isFilterUpdated
	})
	return (
		<>
			<div className='flex items-center justify-between mb-7'>
				<Heading>
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
				<SortDropdown />
			</div>
			<Button
				variant='white'
				onClick={() => setIsFilterOpen(!isFilterOpen)}
				className='mb-7'
			>
				{isFilterOpen ? 'Close' : 'Open'}
			</Button>
			<div
				className={clsx(styles.explorer, {
					[styles.filterOpened]: isFilterOpen
				})}
			>
				<aside>
					<Filters />
				</aside>
				<section>
					<Catalog products={data.products} isLoading={isFetching} />
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={Math.ceil(data.length / +queryParams.perPage)}
					/>
				</section>
			</div>
		</>
	)
}
export default ProductExplorer
