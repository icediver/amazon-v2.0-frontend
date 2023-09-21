'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'

import Loader from '@/ui/loader/Loader'

import { useCategories } from '@/hooks/queries/useCategories'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import { ADMIN_MENU } from './admin-menu.data'
import { convertToMenuItems } from './convert-to-menu-items'

const Sidebar: FC = () => {
	const { isLoading, data } = useCategories()
	const { user } = useAuth()
	const { logout } = useActions()

	const { isAdminPanel, pathname } = useIsAdminPanel()

	return (
		<aside className='bg-secondary flex flex-col justify-between z-10 h-min-[calc(100vh_-_91px)] h-[calc(100vh_-_91px)]'>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className={'text-xl text-white mt-4 mb-6 ml-6'}>
							{isAdminPanel ? 'Menu: ' : 'Categories: '} 👇
						</div>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								item => (
									<li key={item.href}>
										<Link
											href={item.href}
											className={clsx(
												'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
												pathname === item.href ? 'text-primary' : 'text-white'
											)}
										>
											{item.label}
										</Link>
									</li>
								)
							)}
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
