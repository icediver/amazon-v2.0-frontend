import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'

import Heading from '@/ui/heading/Heading'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.type'

import { convertPrice } from '@/utils/convertPrice'

import { OrdersService } from '@/services/order.service'

const MyOrdersPage: NextPageAuth = () => {
	const { data: orders } = useQuery({
		queryKey: ['my orders'],
		queryFn: () => OrdersService.getAll(),
		select: ({ data }) => data
	})
	return (
		<Meta title='My orders'>
			<Layout>
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
			</Layout>
		</Meta>
	)
}

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage
