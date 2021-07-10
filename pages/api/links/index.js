import ShortLink from '@models/ShortLink'
import mongoConnect from '@utils/mongoConnect'
import validateURL from '@utils/validateURL'

export default async (req, res) => {
	await mongoConnect()
	await ShortLink.init()

	// POST: Ny link
	if (req.method === 'POST') {
		try {
			const newLink = await ShortLink.create({
				original: validateURL(req.body.original).cleanURL,
				short: req.body.short,
				userID: req.body.userID,
			})
			return res.status(201).json(newLink)
		} catch (error) {
			return res.status(400).json({ error })
		}
	}
}
