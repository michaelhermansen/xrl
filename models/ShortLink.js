import mongoose from 'mongoose'
import shortId from 'shortid'
import validateURL from '@utils/validateURL'

const shortLinkSchema = new mongoose.Schema({
	original: {
		type: String,
		required: [true, 'Ugyldig URL'],
		lowercase: true,
	},
	short: {
		type: String,
		unique: true,
		required: true,
		maxLength: 20,
		default: shortId.generate,
	},
	clicks: {
		type: Number,
		required: true,
		default: 0,
	},
	userID: {
		type: String,
		required: false,
	},
})

shortLinkSchema.path('original').validate(url => {
	return validateURL(url).valid
}, 'Ugyldig URL')

shortLinkSchema.path('short').validate(short => {
	const shortRegex = /^[a-z0-9-]+$/i
	return shortRegex.test(short)
}, 'Ugyldig alias')

export default mongoose.models.ShortLink ||
	mongoose.model('ShortLink', shortLinkSchema)
