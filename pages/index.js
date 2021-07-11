import Jumbo from '@components/Jumbo'
import UserLinks from '@components/UserLinks'
import { useState, useEffect } from 'react'
import getUserID from '@utils/getUserID'

export default function Home() {
	const [links, setLinks] = useState([])

	const getLinks = async () => {
		const res = await fetch(`/api/links/${getUserID()}`)
		const data = await res.json()
		setLinks(data.links.reverse())
	}

	useEffect(() => {
		getLinks()
	}, [])

	return (
		<>
			<Jumbo getLinks={getLinks} />
			<UserLinks links={links} />
		</>
	)
}
