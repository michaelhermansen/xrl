import Container from './Container'
import NewLinkForm from './NewLinkForm'

export default function Jumbo({ getLinks }) {
	return (
		<>
			<section>
				<Container>
					<div>
						<img className='logo' src='/assets/xrl-logo.svg' alt='' />
					</div>
					<div className='main-content'>
						<h1 className='g--large-title'>Lag en kort og elegant URL</h1>
						<NewLinkForm getLinks={getLinks} />
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

				section {
					padding-top: 1.5rem;
					background-color: var(--color-accent);
					color: var(--color-dark);
				}
			`}</style>
		</>
	)
}
