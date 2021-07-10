export default function ErrorMessage({ message }) {
	return (
		<>
			<div className='error'>{message}</div>

			{/* styles */}
			<style jsx>{`
				.error {
					background-color: var(--color-error);
					font-weight: 500;
					padding: 1rem;
					border-radius: 0.5rem;
					box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
				}
			`}</style>
		</>
	)
}
