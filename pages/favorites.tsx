import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.type'

import { useProfile } from '@/hooks/useProfile'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()
	console.log(profile)
	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}
FavoritesPage.isOnlyUser = true
export default FavoritesPage
