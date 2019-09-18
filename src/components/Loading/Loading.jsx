import React from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core'
import styles from './styles'

const useStyles = makeStyles(styles, { name: 'Loading' })

const Loading = () => {
	const classes = useStyles()

	return <CircularProgress className={classes.loading} />
}

export default Loading
