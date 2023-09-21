import { useMutation, useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { convertPrice } from '@/utils/convertPrice'
import { formatDate } from '@/utils/format-date'

import { OrdersService } from '@/services/order.service'

export const useAdminOrders = () => {
	const { data, isFetching, refetch } = useQuery({
		queryKey: ['get admin orders'],
		queryFn: () => OrdersService.getAll(),
		select: ({ data }) =>
			data.map((order): IListItem => {
				return {
					id: order.id,
					editUrl: getAdminUrl(`/orders/edit/${order.id}`),
					items: [
						`# ${order.id}`,
						order.status,
						formatDate(order.createdAt),
						convertPrice(order.total)
					]
				}
			})
	})

	return { data, isFetching }
}
