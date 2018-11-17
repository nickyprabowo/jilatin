import React from 'react'
import List from './List'

const TableRP = (props) => {
	return (
		<div className="list-view">
			<table>
				<thead>
					{props.header.map( title => props.renderHeader(title))}
				</thead>
				<tbody>
					{props.data.map( item => props.renderItem(item))}
				</tbody>
			</table>
		</div>
	)
}

export default TableRP