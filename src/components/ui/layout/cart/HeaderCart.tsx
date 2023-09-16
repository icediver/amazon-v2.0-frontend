import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import Button from '@/ui/button/Button'
import SquareButton from '@/ui/button/SquareButton'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { convertPrice } from '@/utils/convertPrice'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { OrdersService } from '@/services/order.service'
import { PaymentService } from '@/services/payment.service'

const HeaderCart: FC = () => {
	const { reset } = useActions()
	const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()
	const { push } = useRouter()
	const { mutate } = useMutation({
		mutationKey: ['create order and payment'],
		mutationFn: () =>
			OrdersService.place({
				items: items.map(item => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}),
		onSuccess: ({ data }) =>
			push(data.confirmation.confirmation_url).then(() => reset())
	})
	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>

			<div
				className={clsx(
					'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white transition-all duration-500',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div className='font-normal text-lg mb-5'>My cart</div>
				<div className={styles.cart}>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty</div>
					)}
				</div>
				<div className={styles.footer}>
					<div>Total:</div>
					<div>{convertPrice(total)}</div>
				</div>
				<div className='text-center'>
					<Button
						variant='white'
						size='sm'
						className='btn-link mt-5 mb-2'
						onClick={() => mutate()}
					>
						Place Order
					</Button>
				</div>
			</div>
		</div>
	)
}
export default HeaderCart
