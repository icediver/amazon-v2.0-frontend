'use client'

import { useQuery } from '@tanstack/react-query'

import Heading from '@/ui/heading/Heading'

import { convertPrice } from '@/utils/convertPrice'

import { OrdersService } from '@/services/order.service'

interface IMyOrders {}
export default function MyOrders({}: IMyOrders) {
	const { data: orders } = useQuery({
		queryKey: ['my orders'],
		queryFn: () => OrdersService.getByUserId(),
		select: ({ data }) => data
	})
	return (
		<>
			<Heading>My orders</Heading>
			<section>
				{orders?.length ? (
					orders.map(order => (
						<div
							key={order.id}
							className='bg-white shadow flex gap-10 p-7 my-7 rounded-lg'
						>
							<span>#{order.id}</span>
							<span>{order.status}</span>
							<span>
								{new Date(order.createdAt).toLocaleDateString('ru-Ru')}
							</span>
							<span>{convertPrice(order.total)}</span>
						</div>
					))
				) : (
					<div>Orders not found!</div>
				)}
			</section>
		</>
	)
}
