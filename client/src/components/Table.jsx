import React, { Component } from 'react'
import List from './List'

const Table = (props) => {
		return (
			<div className="list-view">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Quantity</th>
							<th>Description</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
					{props.items.map( gelato => {
							return (
								<List 
									data={gelato}
								/>
							)
						})}
					</tbody>
				</table>
			</div>
		)

}

export default Table