const urlRegex =
	/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g

const validateURL = url => {
	const match = url.match(urlRegex)
	if (match) {
		return {
			valid: true,
			cleanURL: `https://${match[0].toLowerCase().trim()}`,
		}
	} else return { valid: false }
}

export default validateURL
