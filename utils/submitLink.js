import getUserID from './getUserID'

const submitLink = async newBody => {
	const body = { ...newBody, userID: getUserID() }

	const res = await fetch('/api/links', {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(body),
	})

	return await res.json()
}

export default submitLink
