import React from 'react'
import styles from './styles'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(styles, { name: 'Footer' })

const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            This app was created by @Andre Racco
        </div>
    );
};

export default Footer;