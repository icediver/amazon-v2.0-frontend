import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { ProductService } from '@/services/product/product.service'

const SearchPage: NextPage = () => {
	const { query } = useRouter()
	const { data } = useQuery(['search products', query.term], () =>
		ProductService.getAll({
			searchTerm: query.term as string
		})
	)
	return (
		<Meta title='search'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Search by query "${query.term || ''}"`}
				/>
			</Layout>
		</Meta>
	)
}
export default SearchPage
