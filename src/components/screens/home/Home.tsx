import React, { FC } from 'react'

import Button from '@/ui/button/Button'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypePaginationProducts, TypeProducts } from '@/types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<Meta title='Home'>
			<Layout>
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<Catalog title='Freshed products' products={products || []} />
			</Layout>
		</Meta>
	)
}

export default Home
