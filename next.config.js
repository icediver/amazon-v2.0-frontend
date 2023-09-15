/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: [
			'loremflickr.com',
			'www.aptronixindia.com',
			'cdn1.ozone.ru',
			'localhost',
			'avatars.githubusercontent.com'
		]
	}
}

module.exports = nextConfig
