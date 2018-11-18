import React, { Fragment } from 'react'
import Card from './Card'

const Grid = (props) => {

	const { items, selectItem, toggleCardDetail } = props

	return (
		<Fragment>
		<div className="cards">
			{items.map( gelato => {
				return (
					<Card 
						key={gelato.id}
						item={gelato} 
						selectItem={selectItem}
						toggleCardDetail={toggleCardDetail}
					/>
				)
			})}							
		</div>
		</Fragment>
	)

}

export default Grid