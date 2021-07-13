const aliasRegex = /^[a-z0-9-_]+$/i

const testAlias = alias => {
	return aliasRegex.test(alias)
}

export default testAlias
