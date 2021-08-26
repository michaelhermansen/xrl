import Button from '@components/Button'
import Container from '@components/Container'
import Head from 'next/head'

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404: Denne linken finnes ikke</title>
			</Head>
			<Container>
				<div className='wrapper'>
					<div className='status'>404:</div>
					<h1>Denne linken finnes ikke …</h1>
					<Button text='Gå til forsiden' primary dark href='/' />
				</div>
			</Container>

			<style jsx>{`
				.wrapper {
					color: var(--color-dark);
					margin: 25vh auto;
					max-width: 30rem;
				}

				h1 {
					font-family: 'IBM Plex Mono', monospace;
					font-size: 2.5rem;
					padding-bottom: 2rem;
					margin-bottom: 2rem;
				}

				.status {
					font-family: 'IBM Plex Mono', monospace;
					font-size: 1.5rem;
					margin-bottom: 1rem;
				}
			`}</style>
		</>
	)
}
