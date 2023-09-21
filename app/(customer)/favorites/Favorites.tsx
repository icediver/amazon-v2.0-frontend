'use client'

import { FC } from 'react'

import Catalog from '@/ui/catalog/Catalog'

import { useProfile } from '@/hooks/useProfile'

const Favorites: FC = () => {
	const { profile } = useProfile()
	return <Catalog products={profile?.favorites || []} title='Favorites' />
}
export default Favorites
