export default function Footer() {
	return (
		<>
			<footer>
				<p>
					{`Laget av `}
					<a target='_blank' href='https://michaelhermansen.no'>
						Michael Hermansen
					</a>
				</p>
			</footer>

			<style jsx>{`
				footer {
					background: rgba(255, 255, 255, 0.01);
					padding: 6rem 1rem;
					text-align: center;
				}
				p {
					opacity: 0.5;
				}
			`}</style>
		</>
	)
}
