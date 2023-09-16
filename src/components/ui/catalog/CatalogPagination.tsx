import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { IProduct, TypePaginationProducts } from '@/types/product.interface'

import Button from '../button/Button'
import Heading from '../heading/Heading'
import Loader from '../loader/Loader'

import ProductItem from './product-item/ProductItem'
import SortDropdown from './sort-dropdown/SortDropdown'
import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const [page, setPage] = useState<number>(1)
	const { data: response, isLoading } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () => ProductService.getAll({ page, perPage: 4, sort: sortType }),
		initialData: data
	})

	if (isLoading) return <Loader />
	console.log('CatalogPagination')
	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{!!response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						{Array.from({ length: Math.ceil(response.length / 4) }).map(
							(_, index) => {
								const pageNumber = index + 1
								return (
									<Button
										key={index}
										size='sm'
										variant='orange'
										onClick={() => setPage(pageNumber)}
										className='mx-3'
									>
										{pageNumber}
									</Button>
								)
							}
						)}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}
export default CatalogPagination
