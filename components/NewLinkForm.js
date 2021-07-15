import { useState } from 'react'
import TextField from './TextField'
import Button from './Button'
import ErrorMessage from './ErrorMessage'
import submitLink from '@utils/submitLink'
import validateURL from '@utils/validateURL'
import testAlias from '@utils/testAlias'

export default function NewLinkForm({ getLinks }) {
	const [urlValue, setUrlValue] = useState('')
	const [aliasValue, setAliasValue] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleSubmit = async event => {
		setLoading(true)
		event.preventDefault()

		// frontend validering
		const validatedURL = validateURL(urlValue)
		console.log(validatedURL)

		if (validatedURL.isXrl) {
			setError('Denne linken er allerede forkortet')
			setLoading(false)
			return
		}

		if (!validatedURL.valid && !validatedURL.isXrl) {
			setError('Vennligst fyll inn en gyldig URL')
			setLoading(false)
			return
		}

		if (aliasValue && !testAlias(aliasValue)) {
			setError(
				'Alias kan kun innholde bokstavene a–z, tall, bindestrek og understrek',
			)
			setLoading(false)
			return
		}

		const newBody = { original: urlValue }
		if (aliasValue.length) newBody.short = aliasValue

		const newLink = await submitLink(newBody)

		if (newLink.error) {
			// on server error
			if (newLink.error.code === 11000) {
				setError('Dette aliaset er allerede i bruk')
			} else {
				setError('Noe gikk galt, vennligst prøv igjen')
				console.log({ serverError: newLink.error })
			}
		} else {
			// on success
			setUrlValue('')
			setAliasValue('')
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
					onClick={() => setError(null)}
				/>
				{error && <ErrorMessage message={error} dismiss={() => setError('')} />}
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
