import React from 'react'
import { Link } from 'react-router-dom'
import CharCard from '../../components/CharCard/CharCard'
import { Grid } from '@material-ui/core'

import styles from './styles'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(styles, { name: 'Home' })

const Home = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CharCard id={1}/>

            <CharCard id={2}/>

            <CharCard id={3}/>

            <CharCard id={4}/>    
            
            <CharCard id={5}/>
           
            {/* <Link to={`/char/${3}`}> LINK TO 3</Link> */}
        </div>
    );
};

export default Home;