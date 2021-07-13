import Jumbo from '@components/Jumbo'
import UserLinks from '@components/UserLinks'
import { useState, useEffect } from 'react'
import getUserID from '@utils/getUserID'
import Footer from '@components/Footer'
import Head from 'next/head'

export default function Home() {
	const [links, setLinks] = useState(null)

	const getLinks = async () => {
		console.log('oppdaterer linker')
		const res = await fetch(`/api/links/${getUserID()}`)
		const data = await res.json()
		setLinks(data.links.reverse())
	}

	useEffect(() => {
		getLinks()
	}, [])

	return (
		<>
			<Head>
				<title>Lag korte og elegante linker – xrl.no</title>
			</Head>
			<Jumbo getLinks={getLinks} />
			<div style={{ backgroundColor: 'var(--color-dark)' }}>
				<UserLinks links={links} getLinks={getLinks} />
				<Footer />
			</div>
		</>
	)
}
