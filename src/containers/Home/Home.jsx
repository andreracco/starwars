import React, { useState } from 'react'
import CharCard from '../../components/CharCard/CharCard'
import { Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import styles from './styles'
import { makeStyles } from '@material-ui/styles'
import GetPeople from '../../resource/GetPeople'
import { CircularProgress } from '@material-ui/core'
import TablePagination from '@material-ui/core/TablePagination'

const useStyles = makeStyles(styles, { name: 'Home' })

const Home = () => {
	const classes = useStyles()
	const { people, pageInfo, loading, loadMore } = GetPeople()

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				{people.map((char, index) => {
					const id = index >= 16 ? index + 2 : index + 1
					return <CharCard key={id} id={id} char={char} />
				})}

				{/* <Link to={`/char/${3}`}> LINK TO 3</Link> */}
			</div>
			<div className={classes.buttonContainer}>
				{loading ? (
					<CircularProgress className={classes.loading} />
				) : (
					<Button className={classes.button} onClick={loadMore}>
						LOAD MORE
					</Button>
				)}
			</div>
			<TablePagination
				component='nav'
				page={0}
				rowsPerPageOptions={[]}
				rowsPerPage={10}
				count={pageInfo[0] && pageInfo[0].count}
				onChangePage={() => {}}
			/>
		</div>
	)
}

export default withRouter(Home)
