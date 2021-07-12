export default function NoLinks() {
	return (
		<>
			<div className='wrapper'>
				<p>
					Her er det ingenting …
					<br /> Linkene du lager havner her.
				</p>
			</div>

			<style jsx>{`
				.wrapper {
					padding: 2.5rem 1.5rem;
					background: rgba(255, 255, 255, 0.05);
					border-radius: 1rem;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				p {
					text-align: center;
					font-size: 1.25rem;
					line-height: 1.4;
				}
			`}</style>
		</>
	)
}
