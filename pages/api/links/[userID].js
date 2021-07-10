import ShortLink from '@models/ShortLink'
import mongoConnect from '@utils/mongoConnect'

export default async (req, res) => {
	await mongoConnect()
	await ShortLink.init()

	// GET: Linker knyttet til ID
	if (req.method === 'GET') {
		try {
			const linksFromUser = await ShortLink.find({ userID: req.query.userID })
			return res.status(200).json({ links: linksFromUser || [] })
		} catch (error) {
			return res.status(400).json({ error })
		}
	}
}
