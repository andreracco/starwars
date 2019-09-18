import React from 'react'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { API_URL } from '../../config'
import styles from './styles'
import Loading from '../../components/Loading/Loading'
import { IMG_PATH } from '../../config'
import { Avatar, Button, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(styles, { name: 'CharView' })

const initialValues = {
	data: {},
	homeworld: '',
	starships: [],
	isLoading: true
}

const charDataReducer = (state, action) => {
	switch (action.type) {
		case 'LOADING_CHARDATA':
			return {
				...state,
				isLoading: true
			}
		case 'LOADED_CHARDATA':
			return {
				...state,
				isLoading: false
			}
		case 'LOAD_CHARDATA':
			return {
				...state,
				data: action.payload
			}
		case 'LOAD_HOMEWORLD':
			return {
				...state,
				homeworld: action.payload,
				isLoading: false
			}
		case 'LOAD_STARSHIPS':
			return {
				...state,
				starships: [...state.starships, action.payload]
			}
		default:
			return { ...state }
	}
}

const CharView = ({ match, history }) => {
	const classes = useStyles()
	const { id } = match.params
	const [state, dispatch] = useReducer(charDataReducer, initialValues)

	useEffect(() => {
		dispatch({ type: 'LOADING_CHARDATA' })

		axios
			.get(`${API_URL}/people/${id}`)
			.then(res => {
				console.log(res.data)
				dispatch({ type: 'LOAD_CHARDATA', payload: res.data })

				res.data.starships.map(el => {
					return axios.get(el).then(resStarShips => {
						dispatch({
							type: 'LOAD_STARSHIPS',
							payload: resStarShips.data
						})
					})
				})

				return axios.get(res.data.homeworld)
			})
			.then(resHomeWorld => {
				dispatch({
					type: 'LOAD_HOMEWORLD',
					payload: resHomeWorld.data.name
				})
			})
			.catch(err => {
				console.log(err)
			})
		dispatch({ type: 'LOADING_CHARDATA' })
	}, [id])

	return (
		<div className={classes.root}>
			{console.log(state.isLoading)}
			{state.isLoading ? (
				<Loading />
			) : (
				<>
					<Grid container className={classes.container}>
						<Grid item xs={6} sm={3}>
							<Avatar
								alt={state.data.name}
								src={`${IMG_PATH}/${id}.jpg`}
								className={classes.image}
							/>
						</Grid>
						<Grid item xs={6} sm={9} className={classes.content}>
							<div className={classes.name}>
								{state.data.name}
							</div>
							<div className={classes.info}>
								height:{' '}
								<span className={classes.infoData}>
									{state.data.height}
								</span>
							</div>
							<div className={classes.info}>
								mass:{' '}
								<span className={classes.infoData}>
									{state.data.mass}
								</span>
							</div>
							<div className={classes.info}>
								hair color:{' '}
								<span className={classes.infoData}>
									{state.data.hair_color}
								</span>
							</div>
							<div className={classes.info}>
								skin color:{' '}
								<span className={classes.infoData}>
									{state.data.skin_color}
								</span>
							</div>
							<div className={classes.info}>
								eye color:{' '}
								<span className={classes.infoData}>
									{state.data.eye_color}
								</span>
							</div>
							<div className={classes.info}>
								birth year:{' '}
								<span className={classes.infoData}>
									{state.data.birth_year}
								</span>
							</div>
							<div className={classes.info}>
								gender:{' '}
								<span className={classes.infoData}>
									{state.data.gender}
								</span>
							</div>
							<div className={classes.info}>
								home world:{' '}
								<span className={classes.infoData}>
									{state.homeworld}
								</span>
							</div>
						</Grid>
					</Grid>
					{state.starships.length > 0 && (
						<>
							<div className={classes.title}>STARSHIPS</div>
							<Grid container className={classes.starshipContainer}>
								{state.starships.map(ship => (
									<Grid
										item
										xs={12 / state.starships.length}
										className={classes.content}
									>
										<div className={classes.name}>
											{ship.name}
										</div>
										<div className={classes.info}>
											model:{' '}
											<span className={classes.infoData}>
												{ship.model}
											</span>
										</div>
										<div className={classes.info}>
											manufacturer:{' '}
											<span className={classes.infoData}>
												{ship.manufacturer}
											</span>
										</div>
										<div className={classes.info}>
											length:{' '}
											<span className={classes.infoData}>
												{ship.length}
											</span>
										</div>
										<div className={classes.info}>
											class:{' '}
											<span className={classes.infoData}>
												{ship.starship_class}
											</span>
										</div>
										<div className={classes.info}>
											crew:{' '}
											<span className={classes.infoData}>
												{ship.crew}
											</span>
										</div>
										<div className={classes.info}>
											passengers:{' '}
											<span className={classes.infoData}>
												{ship.passengers}
											</span>
										</div>
										<div className={classes.info}>
											cargo_capacity:{' '}
											<span className={classes.infoData}>
												{ship.cargo_capacity}
											</span>
										</div>
										<div className={classes.info}>
											consumables:{' '}
											<span className={classes.infoData}>
												{ship.consumables}
											</span>
										</div>
									</Grid>
								))}
							</Grid>
						</>
					)}

					<div className={classes.buttonContainer}>
						<Button
							className={classes.button}
							onClick={() => history.push('/')}
						>
							BACK TO HOME
						</Button>
					</div>
				</>
			)}
		</div>
	)
}

export default CharView
