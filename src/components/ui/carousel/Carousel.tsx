'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { TransitionGroup } from 'react-transition-group'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import CSSTransition from '../css-transition-group/CSSTransitionGroup'

import styles from './Carousel.module.scss'
import CarouselNavigation from './CarouselNavigation'
import { ICarouselItem } from './carousel.interface'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}
export default function Carousel({ items, className }: ICarousel) {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectedItem = items[selectedItemIndex]

	return (
		<section className={clsx(className, 'relative')}>
			<CarouselNavigation />
			<TransitionGroup className={'relative h-56'}>
				<CSSTransition
					key={selectedItem.title}
					timeout={500}
					classNames={{
						enter: styles['item-enter'],
						enterActive: styles['item-enter-active'],
						exit: styles['item-exit'],
						exitActive: styles['item-exit-active']
					}}
					unmountOnExit
					mountOnEnter
				>
					<div
						className={styles.item}
						style={
							selectedItem.image
								? {
										backgroundImage: `url(${selectedItem.image})`
								  }
								: {}
						}
					>
						<h2>{selectedItem.title}</h2>
						<p>{selectedItem.description}</p>
						{selectedItem.link ? (
							<Link href={selectedItem.link} className='btn btn-white'>
								Read more
							</Link>
						) : (
							<Link href={'/explorer'} className='btn btn-white'>
								Browse product
							</Link>
						)}
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}
