import mongoConnect from '@utils/mongoConnect'
import ShortLink from '@models/ShortLink'

export async function getServerSideProps(context) {
	await mongoConnect()
	await ShortLink.init()

	try {
		const link = await ShortLink.findOne({ short: context.params.short })
		if (link) {
			context.res.writeHead(303, { Location: link.original })
			context.res.end()
			link.clicks++
			link.expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 30 // 30 dager frem i tid
			link.save()
		}
	} catch (error) {
		console.log(error)
	}

	return {
		notFound: true,
	}
}

export default function Empty() {
	return null
}
