import Container from './Container'

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
					padding: 3rem 0;
					border-top: 1px solid rgba(255, 255, 255, 0.05);
				}
				p {
					opacity: 0.25;
				}
			`}</style>
		</>
	)
}
