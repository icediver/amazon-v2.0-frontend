import { instance } from '@/api/api.interceptor'

const STATISTICS = 'orders'

export type TypeStatisticsResponse = {
	name: string
	value: number
}[]

export const StatisticsService = {
	async getMain() {
		return instance<TypeStatisticsResponse>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
