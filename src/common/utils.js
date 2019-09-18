const getIdFromURL = url => {
	var newUrl = url.substring(0, url.length - 1)
	return newUrl.split('/').pop()
}

export { getIdFromURL }
