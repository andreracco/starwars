import React from 'react'
import styles from './styles'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(styles, { name: 'Footer' })

const Footer = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.text}>&copy; 2019 | Developed by @Andre Racco</div>
		</div>
	)
}

export default Footer
