import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { makeStyles } from '@material-ui/styles'
import Logo from '../../common/images/star-wars.svg'

const useStyles = makeStyles(styles, { name: 'Header' })

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={Logo} className={classes.logo} />
        </div>
    )
}

export default Header