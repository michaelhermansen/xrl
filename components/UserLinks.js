import Container from './Container'
import LinkItem from './LinkItem'

export default function UserLinks({ links }) {
	return (
		<>
			<section id='my-links'>
				<Container>
					<h2 className='g--subtitle'>Mine linker</h2>
					<ul>
						{links.map(link => (
							<LinkItem key={link.short} link={link} />
						))}
					</ul>
				</Container>
			</section>

			<style jsx>{`
				section {
					padding: 3rem 0;
					background-color: var(--color-dark);
				}

				h2 {
					margin: 0 0 2rem 0.5rem;
				}
			`}</style>
		</>
	)
}
