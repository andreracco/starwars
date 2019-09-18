import React from 'react'
import styles from './styles'
import { makeStyles } from '@material-ui/styles'
import Logo from '../../common/images/star-wars.logo.png'

const useStyles = makeStyles(styles, { name: 'Header' })

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img alt='Star War' src={Logo} className={classes.logo} />
        </div>
    )
}

export default Header