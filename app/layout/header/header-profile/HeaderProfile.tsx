'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { ref, isShow, setIsShow } = useOutside(false)

	if (!profile?.avatarPath) return null

	return (
		<div className='relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					width={43}
					height={43}
					src={profile?.avatarPath}
					alt='profile'
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			</button>
			{isShow && (
				<div className='absolute w-40 right-2 z-20 top-[calc(100%_+_1rem)]'>
					<Link
						href='/my-orders'
						className='bg-white shadow py-2 px-4 block w-full rounded-md hover:text-primary  duration-300 transition-colors'
					>
						My Orders
					</Link>
				</div>
			)}
		</div>
	)
}
export default HeaderProfile
