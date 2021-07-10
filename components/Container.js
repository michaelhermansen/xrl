export default function Container({ children }) {
	return (
		<>
			<div className='container'>{children}</div>

			{/* styles */}
			<style jsx>{`
				.container {
					padding: 0 1rem;
					max-width: 1400px;
					margin: 0 auto;
				}
			`}</style>
		</>
	)
}
