export default function Button({ text, primary, dark, ...props }) {
	return (
		<>
			<button {...props}>{text}</button>

			{/* styles */}
			<style jsx>{`
				button {
					padding: 0.8rem 2rem;
					font-weight: 500;
					text-transform: uppercase;
					letter-spacing: 0.05em;
					border-radius: 999px;
					background-color: ${primary ? 'var(--color-accent)' : 'transparent'};
					background-color: ${primary && dark ? 'var(--color-dark)' : null};
					color: ${dark ? 'var(--color-light)' : 'var(--color-dark)'};
					border: 1px solid transparent;
					border-color: ${!primary ? 'rgba(0,0,0,0.1)' : 'transparent'};
					cursor: pointer;
					transition: transform 0.1s, opacity 0.2s;
				}

				button:hover {
					transform: scale(1.025);
					opacity: 0.9;
				}

				button:disabled.loading {
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
