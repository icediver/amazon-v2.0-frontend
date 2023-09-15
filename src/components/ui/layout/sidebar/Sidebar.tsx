import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'

import Loader from '@/ui/loader/Loader'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { CategoryService } from '@/services/category.service'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => CategoryService.getAll(),
		select: ({ data }) => data
	})
	const { asPath } = useRouter()
	const { user } = useAuth()
	const { logout } = useActions()
	return (
		<aside className='h-screen bg-secondary flex flex-col justify-between h-[calc(100vh-91px)]'>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className={'text-xl text-white mt-4 mb-6 ml-6'}>
							Categories:  👇
						</div>
						<ul>
							{data.map(category => (
								<li key={category.id}>
									<Link
										href={`/category/${category.slug}`}
										className={clsx(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/category/${category.slug}`
												? 'text-primary'
												: 'text-white'
										)}
									>
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>
			{!!user && (
				<button
					className='text-white flex items-center ml-10 mb-10'
					onClick={() => logout()}
				>
					<FiLogOut />
					<span className='ml-2'>Logout</span>
				</button>
			)}
		</aside>
	)
}
export default Sidebar
