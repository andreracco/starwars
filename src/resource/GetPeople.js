import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_PEOPLE_URL } from '../config'

const GetPeople = () => {
	const [people, setPeople] = useState([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [pageInfo, setPageInfo] = useState([])

	useEffect(() => {
		setLoading(true)
		axios.get(`${API_PEOPLE_URL}?page=${page}`)
			// .then(res => res.json())
			.then(res => {
				setPageInfo([...pageInfo, res.data])
				setPeople([...people, ...res.data.results])
				setLoading(false)
			})
	}, [page])

	const loadMore = () => {
		setPage(page + 1)
	}

	return {
		people,
		pageInfo,
		loading,
		loadMore
	}
}

export default GetPeople
