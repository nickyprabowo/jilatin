import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class List extends Component {

	state = {
		onEdit: false,
		onDelete: false
	}

	onEdit = () => {
		this.setState({
			onEdit: true,
			onDelete: false
		})
	}

	onDelete = () => {
		this.setState({
			onDelete: true,
			onEdit: false
		})
	}

	render(){

		const editBtn = this.state.onEdit ? "btn btn-active" : "btn"
		const deleteBtn = this.state.onDelete ? "btn btn-active" : "btn"

		const { data } = this.props

		return (
			
			<tr>
				<td>{data.name}</td>
				<td>{data.quantity}</td>
				<td>Rp {data.price}</td>
				<td>
					<button className={editBtn} onClick={this.onEdit}><FontAwesomeIcon icon="pencil-alt"/></button>
					<button className={deleteBtn} onClick={this.onDelete}><FontAwesomeIcon icon="trash-alt"/></button>
				</td>
			</tr>
		)
	}
	
}