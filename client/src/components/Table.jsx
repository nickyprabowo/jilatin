import React, { Component } from 'react'
import List from './List'

const Table = (props) => {
		return (
			<div className="list-view">
				<table>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Quantity</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
					{props.items.map( gelato => {
							return (
								<List
									key={gelato.id} 
									data={gelato}
									{...props}
								/>
							)
						})}
					</tbody>
				</table>
			</div>
		)

}

export default Table