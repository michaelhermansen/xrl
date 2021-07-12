import ShortLink from '@models/ShortLink'
import mongoConnect from '@utils/mongoConnect'

export default async (req, res) => {
	await mongoConnect()
	await ShortLink.init()

	// DELETE: Link

	if (req.method === 'DELETE') {
		try {
			const linkToDelete = await ShortLink.findOneAndDelete({
				short: req.query.short,
			})

			if (!linkToDelete) {
				return res.status(404).json({ error: 'Denne linken finnes ikke' })
			}
			res.status(200).json({ message: 'Linken ble slettet' })
		} catch (error) {
			res.status(500).json({ error })
		}
	}
}
