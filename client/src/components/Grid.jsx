import React, { Component } from 'react'
import Card from './Card'

const Grid = (props) => {

	const { items } = props

	return (
		<div className="cards">
			{items.map( gelato => {
				return (
					<Card item={gelato} />
				)
			})}							
		</div>
	)

}

export default Grid