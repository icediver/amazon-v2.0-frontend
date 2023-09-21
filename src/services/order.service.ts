import { ICartItem } from '@/types/cart.interface'
import { IOrder } from '@/types/order.interface'

import { instance } from '@/api/api.interceptor'

const ORDERS = 'orders'

enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

type TypeData = {
	status?: EnumOrderStatus
	items: {
		quantity: number
		productId: number
		price: number
	}[]
}

export const OrdersService = {
	async getAll() {
		return instance<IOrder[]>({ url: ORDERS, method: 'GET' })
	},

	async getByUserId() {
		return instance<IOrder[]>({
			url: `${ORDERS}/by-user`,
			method: 'GET'
		})
	},

	async place(data: TypeData) {
		return instance<{ confirmation: { confirmation_url: string } }>({
			url: ORDERS,
			method: 'POST',
			data
		})
	}
}
