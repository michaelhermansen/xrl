import { useState } from 'react'

export default function TextField({
	label,
	id,
	placeholder,
	maxLength,
	state,
}) {
	const [value, setValue] = state

	return (
		<>
			<div className='comp-wrapper'>
				<label htmlFor={id}>{label}</label>
				<div className='input-wrapper'>
					<input
						className='g--shadow'
						type='text'
						name={id}
						id={id}
						placeholder={placeholder}
						maxLength={maxLength}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					{maxLength && (
						<span className='length-counter'>{`${value.length}/${maxLength}`}</span>
					)}
				</div>
			</div>

			{/* styles */}
			<style jsx>{`
				.comp-wrapper:not(:first-of-type) {
					padding-top: 0.5rem;
				}

				label {
					display: block;
					padding: 0.5rem;
					font-weight: 500;
				}

				.input-wrapper {
					position: relative;
				}

				.length-counter {
					position: absolute;
					top: 0;
					right: 0;
					padding: 1rem;
					pointer-events: none;
				}

				input {
					display: block;
					width: 100%;
					padding: 1rem 0;
					text-indent: 1rem;
					padding-right: ${maxLength ? '5rem' : '1rem'};
					border-radius: 0.5rem;
					background-color: var(--color-light);
				}
			`}</style>
		</>
	)
}
