export default function Footer() {
	return (
		<>
			<footer>
				<p>
					Laget av{' '}
					<a target='_blank' href='https://michaelhermansen.no'>
						Michael Hermansen
					</a>
				</p>
			</footer>

			<style jsx>{`
				footer {
					background: rgba(255, 255, 255, 0.05);
					padding: 3rem 1rem;
					text-align: center;
				}
			`}</style>
		</>
	)
}
