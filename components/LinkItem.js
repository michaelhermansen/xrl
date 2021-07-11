export default function LinkItem({ link }) {
	return (
		<>
			<li>
				<p className='original-url'>{link.original}</p>
				<a className='link' href={link.short}>{`xrl.no/${link.short}`}</a>
			</li>

			<style jsx>{`
				li {
					padding: 1rem;
					margin-bottom: 1.5rem;
					background-color: var(--color-light);
					color: var(--color-dark);
					border-radius: 1rem;
				}

				.link {
					font-size: 1.5rem;
					font-weight: 500;
					padding: 2rem 0;
					display: block;
					text-align: center;
				}

				.original-url {
					padding-bottom: 0.8rem;
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			`}</style>
		</>
	)
}
