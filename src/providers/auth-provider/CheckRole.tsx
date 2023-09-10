import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.type'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const { user } = useAuth()
	const router = useRouter()
	const Children = () => <>{children}</>

	if (user && isOnlyUser) return <Children />

	router.pathname !== '/auth' && router.replace('/auth')
	return null
}
export default CheckRole
