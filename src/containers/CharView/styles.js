const styles = theme => ({
	root: {
		margin: 'auto',
		maxWidth: 960,
		marginBottom: 56,
		minHeight: '73vh',
		width: '90%'
	},

	starshipContainer: {
		width: '100%',
		margin: [[16, 'auto']],
		boxShadow: [[0, 0, 20, 0, theme.palette.primary.main]],
		borderRadius: 8,
		backgroundColor: '#3e3e3e',
		border: [[1, 'solid', theme.palette.primary.main]],

		[theme.breakpoints.down('sm')]: {
			height: 400
		}
	},

	container: {
		width: '100%',
		height: 300,

		margin: [[16, 'auto']],
		boxShadow: [[0, 0, 20, 0, theme.palette.primary.main]],
		borderRadius: 8,
		backgroundColor: '#3e3e3e',
		border: [[1, 'solid', theme.palette.primary.main]]
	},

	image: {
		width: 217,
		height: '100%',
		borderRadius: [[8, 0, 0, 8]],

		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},

	content: {
		padding: 20
	},

	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: theme.palette.primary.main,
		marginBottom: 16
	},

	info: {
		fontWeight: 200,
		fontSize: 14,
		color: 'white',
		textTransform: 'capitalize',
		marginBottom: 5
	},

	title: {
		paddingTop: 30,
		margin: 'auto',
		height: 40,
		textAlign: 'center',
		color: 'white',
		fontSize: 24,
		fontWeight: 'bold'
	},

	infoData: {
		fontWeight: 'normal',
		marginLeft: 2
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

	buttonContainer: {
		display: 'flex',
		marginTop: 40
	}
})

export default styles
