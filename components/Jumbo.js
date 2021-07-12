import Container from './Container'
import NewLinkForm from './NewLinkForm'
import bp from '@breakpoints'

export default function Jumbo({ getLinks }) {
	return (
		<>
			<section>
				<Container>
					<div>
						<img className='logo' src='/assets/xrl-logo.svg' alt='' />
					</div>
					<div className='main-content'>
						<h1 className='title'>Lag korte og elegante linker</h1>
						<div className='form'>
							<NewLinkForm getLinks={getLinks} />
						</div>
					</div>
				</Container>
			</section>

			{/* styles */}
			<style jsx>{`
				.logo {
					height: 1rem;
				}

				.main-content {
					padding: 6rem 0 4rem 0;
				}

				.title {
					font-size: clamp(2rem, 13vw, 4rem);
					max-width: 30rem;
					line-height: 1.05;
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
						display: flex;
						gap: 6rem;
						align-items: center;
						padding-top: 8rem;
						max-width: 1200px;
						margin: 0 auto;
					}

					.title {
						flex: 2;
						padding: 0 0 2rem 0;
						font-size: clamp(2rem, 6vw, 4rem);
					}

					.form {
						flex: 3;
					}
				}
			`}</style>
		</>
	)
}
