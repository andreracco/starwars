const styles = theme => ({ 
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.main,
        position: 'relative',
        bottom: 0,
    },

    text: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        padding: [[16, 0]],
        maxWidth: 960,
        width: '100%',
    }
})

export default styles