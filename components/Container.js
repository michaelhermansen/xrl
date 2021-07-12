import bp from '@breakpoints'

export default function Container({ children, ...props }) {
	return (
		<>
			<div className='container' {...props}>
				{children}
			</div>

			{/* styles */}
			<style jsx>{`
				.container {
					padding: 0 1rem;
					max-width: 1400px;
					margin: 0 auto;
				}

				@media (min-width: ${bp.small}px) {
					.container {
						padding: 0 2rem;
					}
				}
			`}</style>
		</>
	)
}
