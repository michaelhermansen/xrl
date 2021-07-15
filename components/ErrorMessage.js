export default function ErrorMessage({ message, dismiss }) {
	return (
		<>
			<div className='error'>
				{message}{' '}
				<button
					className='dismiss-button'
					onClick={() => {
						if (dismiss) dismiss()
					}}
				>
					╳
				</button>
			</div>

			{/* styles */}
			<style jsx>{`
				.error {
					max-width: max-content;
					background-color: var(--color-error);
					font-weight: 500;
					padding: 0.5rem 1rem 0.5rem 1.5rem;
					border-radius: 0.5rem;
					box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25),
						0 2px 8px rgba(0, 0, 0, 0.1);
					animation: shake 0.25s forwards;
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}

				.dismiss-button {
					background: transparent;
					font-size: 0.75rem;
					padding: 0.5rem;
					opacity: 0.75;
				}

				@keyframes shake {
					0% {
						transform: translateX(0);
					}
					25% {
						transform: translateX(-0.5rem);
					}
					50% {
						transform: translateX(0.5rem);
					}
					100% {
						transform: translateX(0);
					}
				}
			`}</style>
		</>
	)
}
