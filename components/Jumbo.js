import Container from './Container'
import NewLinkForm from './NewLinkForm'
import bp from '@breakpoints'

export default function Jumbo({ getLinks }) {
	return (
		<>
			<section>
				<Container>
					<div>
						<p className='brand'>xrl.no/</p>
					</div>
					<div className='main-content'>
						<h1 className='title'>lag korte og elegante linker.</h1>
						<div className='form'>
							<NewLinkForm getLinks={getLinks} />
						</div>
					</div>
				</Container>
			</section>

			{/* styles */}
			<style jsx>{`
				.brand {
					font-family: 'IBM Plex Mono', monospace;
					font-weight: 500;
					font-size: 1.25rem;
					user-select: none;
				}

				.main-content {
					padding: 6rem 0 5rem 0;
					display: grid;
					grid-template-columns: 1fr;
					max-width: 1200px;
					margin: 0 auto;
				}

				.title {
					font-size: clamp(2rem, 12.5vw, 4rem);
					line-height: 1;
					letter-spacing: -0.02em;
					font-weight: 700;
				}

				section {
					padding-top: 1.5rem;
					background-color: var(--color-accent);
					color: var(--color-dark);
				}

				@media (min-width: ${bp.medium}px) {
					.main-content {
						grid-template-columns: 1fr 1fr;
						gap: 2rem;
						align-items: center;
					}

					.title {
						padding-bottom: 4rem;
					}
				}
			`}</style>
		</>
	)
}
