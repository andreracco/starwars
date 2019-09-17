import React  from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(styles, { name: 'Layout' })

const Layout = ( {children} ) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout