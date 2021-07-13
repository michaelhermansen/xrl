import Container from './Container'
import LinkItem from './LinkItem'
import Loader from './Loader'
import NoLinks from './NoLinks'
import bp from '@breakpoints'

export default function UserLinks({ links, getLinks }) {
	return (
		<>
			<section id='my-links'>
				<Container>
					<h2 className='g--subtitle'>Mine linker</h2>
					{!links ? (
						<Loader />
					) : (
						<>
							{links.length ? (
								<ul>
									{links.map(link => (
										<LinkItem
											key={link.short}
											link={link}
											getLinks={getLinks}
										/>
									))}
								</ul>
							) : (
								<NoLinks />
							)}
						</>
					)}
				</Container>
			</section>

			<style jsx>{`
				section {
					padding: 3rem 0 4rem 0;
					background-color: var(--color-dark);
				}

				h2 {
					margin: 0 0 2rem 0.5rem;
				}

				p {
					padding: 1rem 0.5rem;
				}

				ul {
					display: grid;
					grid-template-columns: 1fr;
					gap: 1rem;
				}

				@media (min-width: ${bp.medium}px) {
					ul {
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						gap: 1rem;
					}
				}

				@media (min-width: ${bp.large}px) {
					ul {
						grid-template-columns: repeat(3, 1fr);
					}
				}

				@media (min-width: ${bp.xlarge}px) {
					ul {
						grid-template-columns: repeat(4, 1fr);
					}
				}
			`}</style>
		</>
	)
}
