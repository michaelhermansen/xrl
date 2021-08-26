import mongoConnect from '@utils/mongoConnect'
import ShortLink from '@models/ShortLink'
import { useEffect } from 'react'

export async function getServerSideProps(context) {
	await mongoConnect()
	await ShortLink.init()
	let url

	try {
		const link = await ShortLink.findOne({ short: context.params.short })
		if (link) {
			link.clicks++
			link.expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 30 // 30 dager frem i tid
			link.save()
			url = link.original
		}
	} catch (error) {
		console.error(error)
	}

	return {
		props: {
			url,
		},
		notFound: url ? false : true,
	}
}

export default function Redirect({ url }) {
	useEffect(() => {
		window.location.replace(url)
	})

	return null
}
