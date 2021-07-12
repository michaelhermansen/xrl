import { useState } from 'react'
import TextField from './TextField'
import Button from './Button'
import ErrorMessage from './ErrorMessage'
import submitLink from '@utils/submitLink'

export default function NewLinkForm({ getLinks }) {
	const [urlValue, setUrlValue] = useState('')
	const [aliasValue, setAliasValue] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const handleSubmit = async event => {
		setLoading(true)
		event.preventDefault()

		const newBody = { original: urlValue }
		if (aliasValue.length) newBody.short = aliasValue

		const newLink = await submitLink(newBody)
		if (newLink.error) {
			// on error
			setError('Noe gikk galt, vennligst prøv igjen.')
			console.error(newLink.error)
		} else {
			// on success
			setUrlValue('')
			setAliasValue('')
			setError('')
			await getLinks()
			document
				.querySelector('#my-links')
				.scrollIntoView({ behavior: 'smooth', inline: 'start' })
		}

		setLoading(false)
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				autoComplete='off'
				spellCheck='false'
				autoCorrect='off'
				autoCapitalize='none'
			>
				<TextField
					label='Link til hva som helst'
					id='url'
					placeholder='https://www.example.com/…'
					state={[urlValue, setUrlValue]}
				/>
				<TextField
					label='Alias (valgfritt)'
					id='url'
					placeholder='f.eks. «nye-sko»'
					maxLength={20}
					state={[aliasValue, setAliasValue]}
				/>
				<Button
					text='Generer link'
					type='submit'
					primary
					dark
					disabled={loading}
					className={loading ? 'loading' : ''}
					style={{ margin: '1.5rem 0' }}
				/>
				{error && <ErrorMessage message={error} />}
			</form>

			{/* styles */}
			<style jsx>{`
				form {
					padding: 2rem 0;
					max-width: 35rem;
				}
			`}</style>
		</>
	)
}
