import getUserID from '@utils/getUserID'
import Button from './Button'

export default function LinkItem({ link, getLinks }) {
	const shortUrl = `${location.host.replace('www.', '')}/${link.short}`

	const copyLink = () => {
		navigator.clipboard.writeText(shortUrl)
	}

	const deleteLink = async () => {
		try {
			const res = await fetch(`/api/links/${getUserID()}/${link.short}`, {
				method: 'DELETE',
			})

			const data = await res.json()
			if (data.error) return console.log(data.error)
		} catch (error) {
			console.log({ error })
		} finally {
			getLinks()
		}
	}

	return (
		<>
			<li>
				<p className='original-url'>{link.original}</p>
				<a className='link' href={link.short}>
					{shortUrl}
				</a>
				<div className='actions'>
					<Button
						onClick={copyLink}
						text='Kopier'
						primary
						style={{ width: '100%' }}
					/>
					<Button onClick={deleteLink} text='Slett' style={{ width: '100%' }} />
				</div>
			</li>

			<style jsx>{`
				li {
					padding: 1rem;
					padding-bottom: 1.5rem;
					margin-bottom: 1.5rem;
					background-color: var(--color-light);
					color: var(--color-dark);
					border-radius: 1rem;
				}

				.link {
					font-size: 1.25rem;
					font-weight: 500;
					padding: 1rem 0;
					margin: 1.5rem 0 1.75rem 0;
					display: block;
					text-align: center;
					overflow-wrap: break-word;
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
			`}</style>
		</>
	)
}
