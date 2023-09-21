'use client'

import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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

const HeaderCart: FC = () => {
	const { reset } = useActions()
	const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()
	const { push } = useRouter()
	return (
		<div className='relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow)
				}}
				number={items.length}
			/>

			{isShow && (
				<div className={clsx(styles.cartWrapper)}>
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
					{!!items.length && (
						<div className='text-center mt-7 mb-5'>
							<Link
								className='btn btn-white'
								href={'/checkout'}
								onClick={() => setIsShow(false)}
							>
								Go to checkout
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}
export default HeaderCart
