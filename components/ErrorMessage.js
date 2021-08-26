export default function ErrorMessage({ message, dismiss }) {
	return (
		<>
			<div className='error'>
				{message}{' '}
				<button
					aria-label='Skjul feilmelding'
					className='dismiss-button'
					onClick={() => {
						if (dismiss) dismiss()
					}}
				>
					&#x2715;
				</button>
			</div>

			{/* styles */}
			<style jsx>{`
				.error {
					max-width: max-content;
					background-color: var(--color-error);
					font-weight: 500;
					padding: 0.25rem 1rem 0.25rem 1.5rem;
					border-radius: 0.5rem;
					box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25),
						0 2px 8px rgba(0, 0, 0, 0.1);
					animation: shake 0.25s forwards;
					display: flex;
					align-items: center;
					gap: 0.5rem;
					position: absolute;
				}

				.dismiss-button {
					background: transparent;
					padding: 0.75rem;
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
