import { IProduct } from '@/types/product.interface'
import { IReview } from '@/types/review.interface'

import { instance } from '@/api/api.interceptor'

import { PRODUCTS, TypeProductDataFilters } from './product.types'

export const ProductsService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		return instance<IProduct[]>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData
		})
	},

	async getSimilar(productId: string | number) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/similar/${productId}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<IProduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByProduct(categorySlug: string) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},
	async getById(id: string | string) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IProduct>({
			url: PRODUCTS,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<IProduct>({
			url: `/${PRODUCTS}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string | number) {
		return instance<IProduct>({
			url: `/${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
