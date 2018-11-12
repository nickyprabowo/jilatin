import React, { Component } from 'react'
import Card from './Card'

const Grid = (props) => {

	const { items } = props

	return (
		<div className="cards">
			{items.map( gelato => {
				return (
					<Card 
						key={gelato.id}
						item={gelato} 
					/>
				)
			})}							
		</div>
	)

}

export default Grid