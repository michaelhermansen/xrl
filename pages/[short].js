import mongoConnect from '@utils/mongoConnect'
import ShortLink from '@models/ShortLink'

export async function getServerSideProps(context) {
	await mongoConnect()
	await ShortLink.init()

	try {
		const link = await ShortLink.findOne({ short: context.params.short })
		if (link) {
			link.clicks++
			link.expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 180 // 180 dager frem i tid
			link.save()

			return {
				redirect: {
					permanent: false,
					destination: link.original,
				},
			}
		}
	} catch (error) {
		console.error(error)
	}

	return {
		notFound: true,
	}
}

export default function Null() {
	return null
}
