export default function Loader() {
	return (
		<>
			<div className='wrapper'>
				<p>Laster . . .</p>
			</div>

			<style jsx>{`
				.wrapper {
					padding: 2.5rem 1.5rem;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 1rem;
					animation: pulse 1s infinite;
				}

				p {
					text-align: center;
					font-size: 1.25rem;
					font-weight: 500;
					text-transform: uppercase;
				}

				@keyframes pulse {
					0% {
						opacity: 1;
					}
					50% {
						opacity: 0.75;
					}
					100% {
						opacity: 1;
					}
				}
			`}</style>
		</>
	)
}
