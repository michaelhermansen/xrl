export default function LinkItem({ link }) {
	const newUrl = `${window.location.host.replace('www.', '')}/${link.short}`

	return (
		<>
			<li>
				<a href={link.short}>{newUrl}</a>
			</li>
		</>
	)
}
