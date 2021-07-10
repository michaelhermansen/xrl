export default function Button({
	text,
	type,
	onClick,
	primary,
	dark,
	...props
}) {
	const handleClick = () => {
		if (onClick) onClick()
	}

	return (
		<>
			<button type={type} onClick={handleClick} {...props}>
				{text}
			</button>

			{/* styles */}
			<style jsx>{`
				button {
					padding: 1rem 2rem;
					font-weight: 500;
					margin: 1.5rem 0;
					text-transform: uppercase;
					letter-spacing: 0.05em;
					border-radius: 999px;
					background-color: ${primary ? 'var(--color-accent)' : 'transparent'};
					background-color: ${primary && dark ? 'var(--color-dark)' : null};
					color: ${dark ? 'var(--color-light)' : null};
				}

				button:disabled {
					animation: pulse 1s infinite;
				}

				@keyframes pulse {
					0% {
						opacity: 0.8;
					}
					50% {
						opacity: 0.5;
					}
					100% {
						opacity: 0.8;
					}
				}
			`}</style>
		</>
	)
}
