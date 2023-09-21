import { useState } from 'react'

import Heading from '@/ui/heading/Heading'
import Modal from '@/ui/modal/Modal'

import { useAuth } from '@/hooks/useAuth'

import { IReview } from '@/types/review.interface'

import LeaveReviewForm from '../leave-review/LeaveReviewForm'

import ReviewItem from './review-item/ReviewItem'

interface IProductReviews {
	reviews: IReview[]
	productId: number
}

export default function ProductReviews({
	reviews,
	productId
}: IProductReviews) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { user } = useAuth()

	if (!reviews.length) return null

	return (
		<section id='reviews' className='mt-20'>
			<div className='mb-9'>
				<Heading className='mb-3'>Reviews: </Heading>
				{user && (
					<button className='text-aqua' onClick={() => setIsModalOpen(true)}>
						Leave a review
					</button>
				)}
			</div>
			{user && (
				<Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
					<LeaveReviewForm productId={productId} />
				</Modal>
			)}
			<div className='grid grid-cols-4 gap-10'>
				{reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>
		</section>
	)
}
