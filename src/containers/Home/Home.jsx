import React, { useState, useEffect } from 'react'
import CharCard from '../../components/CharCard/CharCard'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import styles from './styles'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import { API_URL } from '../../config'
import { getIdFromURL } from '../../common/utils'
import Loading from '../../components/Loading/Loading'

const useStyles = makeStyles(styles, { name: 'Home' })

const Home = () => {
	const classes = useStyles()

	const [people, setPeople] = useState([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [pageInfo, setPageInfo] = useState([])

	useEffect(() => {
		setLoading(true)
		axios.get(`${API_URL}/people?page=${page}`).then(res => {
			setPageInfo([...pageInfo, res.data])
			setPeople([...people, ...res.data.results])
			setLoading(false)
		})
	}, [page])

	const loadMore = () => {
		setPage(page + 1)
	}

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				{people.map(char => {
					const id = getIdFromURL(char.url)
					return <CharCard key={id} id={id} char={char} />
				})}

				{/* <Link to={`/char/${3}`}> LINK TO 3</Link> */}
			</div>
			<div className={classes.buttonContainer}>
				{loading ? (
					<Loading />
				) : (
					page < 10 && (
						<Button className={classes.button} onClick={loadMore}>
							LOAD MORE
						</Button>
					)
				)}
			</div>
		</div>
	)
}

export default withRouter(Home)
