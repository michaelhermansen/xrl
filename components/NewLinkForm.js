import { useState } from 'react'
import TextField from './TextField'
import Button from './Button'
import ErrorMessage from './ErrorMessage'
import submitLink from '@utils/submitLink'

export default function NewLinkForm() {
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
			setError('Det oppstod en uventet feil, vennligst prøv igjen.')
			console.error(newLink.error)
		} else {
			// on success
			setUrlValue('')
			setAliasValue('')
			setError('')
		}

		setLoading(false)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				{error && <ErrorMessage message={error} />}
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
				/>
			</form>

			{/* styles */}
			<style jsx>{`
				form {
					padding: 2rem 0;
				}
			`}</style>
		</>
	)
}
