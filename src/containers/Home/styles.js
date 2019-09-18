const styles = theme => ({ 
    root: {
        margin: 'auto',
        maxWidth: 960,
        marginBottom: 56,
        minHeight: '70vh'
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        margin: 'auto',
        minWidth: 200,

        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.secondary.dark,
            boxShadow: [[0, 0, 4, 0, theme.palette.primary.main]]
        }
    },

    loading: {
        color: '#ffac00',
        margin: 'auto'
    },

    buttonContainer: {
        display: 'flex',
        marginTop: 20
    }

})

export default styles