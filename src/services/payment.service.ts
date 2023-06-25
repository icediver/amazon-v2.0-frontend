import { IPaymentResponce } from '@/types/payment.interface'

import { instance } from '@/api/api.interceptor'

const PAYMENT = 'payment'

export const PaymentService = {
	async createPayment(amount: number) {
		const { data } = await instance.post<IPaymentResponce>(PAYMENT, {
			amount
		})
		return data
	}
}
