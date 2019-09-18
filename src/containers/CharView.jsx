import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_PEOPLE_URL } from '../config'

const CharView = ({ match }) => {
    const { id } = match.params
    const [charData, setCharData] = useState({})
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
		setLoading(true)
		axios.get(`${API_PEOPLE_URL}/${id}`)
			.then(res => {
                setCharData(res.data)
				setLoading(false)
			})
    }, [id])
    
	return (
		<div>
            this is the view {match.params.id}
            <div>NAME: {charData.name}</div>
            <div>HEIGHT: {charData.height}</div>
            <div>MASS: {charData.mass}</div>

            <div>{charData.hair_color}</div>
            <div>{charData.skin_color}</div>
            <div>{charData.eye_color}</div>

            <div>{charData.birth_year}</div>
            <div>{charData.gender}</div>
            <div>{charData.homeworld}</div>
            
            {console.log(charData)}
		</div>
	)
}

export default CharView
