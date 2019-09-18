import React from 'react'
import styles from './styles'
import { makeStyles } from '@material-ui/styles'
import { Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { IMG_PATH } from '../../config'

const useStyles = makeStyles(styles, { name: 'CharCard' })

const CharCard = ({ history, id, char }) => {
	const classes = useStyles()

	const handleCardClick = () => {
		history.push(`/char/${id}`)
	}

	return (
		<Card className={classes.card}>
			<CardActionArea onClick={handleCardClick}>
				<CardMedia
					className={classes.image}
					image={`${IMG_PATH}/${id}.jpg`}
					title={char.name}
				/>
				<CardContent classes={{ root: classes.content }}>
					<div className={classes.title}>{char.name}</div>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default withRouter(CharCard)
