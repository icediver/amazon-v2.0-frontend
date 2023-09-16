import { NextPage } from 'next'

import Heading from '@/ui/heading/Heading'
import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

const ThanksPage: NextPage = () => {
	return (
		<Meta title='thanks'>
			<Layout>
				<Heading>Thanks!</Heading>
			</Layout>
		</Meta>
	)
}
export default ThanksPage
