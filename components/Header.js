import Container from './Container'
import NewLinkForm from './NewLinkForm'

export default function Header() {
	return (
		<>
			<header>
				<Container>
					<h1 className='g--large-title'>Lag en kort og elegant URL</h1>
					<NewLinkForm />
				</Container>
			</header>

			{/* styles */}
			<style jsx>{`
				header {
					background-color: var(--color-accent);
					padding: 8rem 0;
					color: var(--color-dark);
				}
			`}</style>
		</>
	)
}
