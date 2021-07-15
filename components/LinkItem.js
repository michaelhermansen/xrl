import getUserID from '@utils/getUserID'
import Button from './Button'
import { useLayoutEffect, useState } from 'react'

export default function LinkItem({ link, getLinks }) {
	const [loading, setLoading] = useState(true)
	const [copied, setCopied] = useState(false)

	useLayoutEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 300)
	}, [])

	const shortUrl = `${location.host.replace('www.', '')}/${link.short}`
	const copyLink = () => {
		if (!copied) {
			navigator.clipboard.writeText(`https://${shortUrl}`)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		}
	}

	const deleteLink = async () => {
		setLoading(true)
		try {
			const res = await fetch(`/api/links/${getUserID()}/${link.short}`, {
				method: 'DELETE',
			})
			const data = await res.json()
			if (data.error) return console.log(data.error)
		} catch (error) {
			console.log({ error })
			setLoading(false)
		} finally {
			getLinks()
		}
	}

	const timeLeftToLive = Date.parse(link.expiresAt) - Date.now()
	const daysLeft = timeLeftToLive / 1000 / 60 / 60 / 24

	return (
		<>
			<li>
				<p className='original-url'>{link.original}</p>
				<a className='link' href={link.short} target='_blank'>
					{shortUrl}
				</a>
				{link.clicks ? (
					<div className='clicks'>
						har blitt klikket {link.clicks} gang{link.clicks > 1 ? 'er' : ''}
					</div>
				) : (
					''
				)}
				<div className='actions'>
					<Button
						onClick={copyLink}
						text={!copied ? 'Kopier' : 'Kopiert'}
						primary
						style={{
							width: '100%',
							opacity: copied ? 0.75 : 1,
						}}
						disabled={loading || copied}
					/>
					<Button
						onClick={deleteLink}
						text='Slett'
						style={{ width: '100%' }}
						disabled={loading}
					/>
				</div>
				{daysLeft < 3 ? (
					<p className='expire-warning'>
						Denne linken utløper snart grunnet inaktivitet.
					</p>
				) : null}
			</li>

			<style jsx>{`
				li {
					padding: 1rem;
					padding-bottom: 1.5rem;
					background-color: var(--color-light);
					color: var(--color-dark);
					border-radius: 1rem;
					transition: opacity 0.2s;
					opacity: ${loading ? 0.25 : 1};
					pointer-events: ${loading ? 'none' : 'unset'};
					min-width: 0;
				}

				.link {
					font-family: 'IBM Plex Mono', monospace;
					font-size: 1.25rem;
					font-weight: 500;
					text-decoration: none;
					padding: 0.5rem 0;
					margin: 2rem 0 ${link.clicks ? '.5rem' : '2rem'} 0;
					display: block;
					text-align: center;
					overflow-wrap: break-word;
				}

				.link:hover {
					text-decoration: underline;
				}

				.original-url {
					padding-bottom: 0.8rem;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.actions {
					display: flex;
					gap: 0.5rem;
				}

				.clicks {
					margin: 0 auto;
					margin-bottom: 2rem;
					padding: 0.5rem 1rem;
					width: max-content;
					background: rgba(0, 0, 0, 0.05);
					border-radius: 0.5rem;
				}

				.expire-warning {
					margin-top: 1.5rem;
					padding: 1rem 0.5rem 0 0.5rem;
					text-align: center;
					border-top: 1px solid rgba(0, 0, 0, 0.1);
				}
			`}</style>
		</>
	)
}
