import { v4 as uuid } from 'uuid'

const getUserID = () => {
	let userID = localStorage.getItem('userID')
	if (!userID) localStorage.setItem('userID', uuid())
	return localStorage.getItem('userID')
}

export default getUserID
