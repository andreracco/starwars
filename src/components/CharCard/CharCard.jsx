import React from 'react'
import styles from './styles'
import { makeStyles } from '@material-ui/styles'
import { Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(styles, { name: 'CharCard' })

const CharCard = ( {id} ) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                CharacterName {id}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CharCard