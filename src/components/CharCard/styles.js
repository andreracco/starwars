const styles = theme => ({
	card: {
		width: 150,
		height: 250,
		margin: 16,
		boxShadow: 'none',
		borderRadius: 8,
		backgroundColor: '#3e3e3e',
		border: [[1, 'solid', '#ffac00']],

		'&:hover': {
			boxShadow: [[0, 0, 20, 0, '#ffac00']]
		}
	},
	image: {
		width: '100%',
		height: 200,

		'&::after': {
			content: 'no-close-quote',
			position: 'absolute',
			top: '50%',
			width: '100%',
			height: '75px',
			background: 'linear-gradient(to bottom, transparent, black)'
		}
	},
	title: {
		fontSize: 14,
		color: '#fff',
		paddingBottom: 8,
		textAlign: 'center'
		// border: [[1, 'solid', '#ffac00']]
	},
	content: {
		height: 20,
		backgroundColor: '#000',
		padding: [[16, 0]]
	}
})

export default styles
