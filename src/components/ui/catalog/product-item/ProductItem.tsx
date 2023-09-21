import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import AddToCartButton from './add-to-cart-button/AddToCartButton'
import FavoriteButton from './favorite-button/FavoriteButton'
import ProductRating from './product-rating/ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='animate-scaleIn'>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-3 z-1'>
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
						className='w-full aspect-square mx-auto'
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className='mt-2 font-semibold'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-xs mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} isText />
			<div className='text-xl'>{convertPrice(product.price)}</div>
		</div>
	)
}
export default ProductItem
