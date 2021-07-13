export default function Loader() {
	return (
		<>
			<div className='wrapper'>
				<p>Laster . . .</p>
			</div>

			<style jsx>{`
				.wrapper {
					padding: 4rem 1.5rem;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 1rem;
					opacity: 0;
					animation: fadein 0.1s forwards;
					animation-delay: 0.5s;
				}

				p {
					text-align: center;
					font-size: 1.25rem;
					font-weight: 500;
					text-transform: uppercase;
					animation: pulse 1s infinite;
				}

				@keyframes fadein {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}

				@keyframes pulse {
					0% {
						opacity: 1;
					}
					50% {
						opacity: 0.5;
					}
					100% {
						opacity: 1;
					}
				}
			`}</style>
		</>
	)
}
