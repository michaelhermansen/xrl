import Button from '@components/Button'
import Container from '@components/Container'

export default function NotFound() {
	return (
		<>
			<Container>
				<div className='wrapper'>
					<h1>
						<div className='status'>404</div>
						siden finnes ikke
					</h1>
					<Button text='Gå til forsiden' primary dark href='/' />
				</div>
			</Container>

			<style jsx>{`
				.wrapper {
					color: var(--color-dark);
					display: grid;
					place-items: center;
					margin: 25vh 0;
				}

				h1 {
					font-family: 'IBM Plex Mono', monospace;
					text-align: center;
					font-size: 1.5rem;
					padding-bottom: 2rem;
				}

				.status {
					font-size: 6rem;
				}
			`}</style>
		</>
	)
}
