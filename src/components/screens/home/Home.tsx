'use client'

import React, { FC } from 'react'

import Carousel from '@/ui/carousel/Carousel'
import { carouselItems } from '@/ui/carousel/carousel.data'
import Catalog from '@/ui/catalog/Catalog'

import { TypePaginationProducts } from '@/types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products }) => {
	return (
		<>
			<Carousel items={carouselItems} className='mb-10' />
			<Catalog title='Freshed products' products={products} />
		</>
	)
}

export default Home
