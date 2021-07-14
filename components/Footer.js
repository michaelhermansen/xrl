import Container from './Container'
import bp from '@breakpoints'

export default function Footer() {
	return (
		<>
			<footer>
				<Container>
					<p>
						{`Laget av `}
						<a target='_blank' href='https://michaelhermansen.no'>
							Michael Hermansen
						</a>
					</p>
				</Container>
			</footer>

			<style jsx>{`
				footer {
					padding: 4rem 0 6rem 0;
					text-align: center;
					border-top: 1px solid rgba(255, 255, 255, 0.05);
				}
				p {
					opacity: 0.5;
				}

				@media (min-width: ${bp.medium}px) {
					footer {
						padding: 3rem 0;
						text-align: left;
					}
				}
			`}</style>
		</>
	)
}
