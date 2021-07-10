import getUserID from '@utils/getUserID'
import { useEffect, useState } from 'react'
import Container from './Container'
import LinkItem from './LinkItem'

export default function UserLinks() {
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
			<section id='my-links'>
				<Container>
					<ul>
						{links.map(link => (
							<LinkItem key={link.short} link={link} />
						))}
					</ul>
				</Container>
			</section>
		</>
	)
}
