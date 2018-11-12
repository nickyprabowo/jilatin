import React, { Component, Fragment } from 'react'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class List extends Component {

	state = {
		openAccordion: false
	}

	onEdit = (id) => {
		this.props.selectItem(id)
		this.props.toggleModal('edit_gelato')
	}

	onDelete = (id) => {
		this.props.selectItem(id)
		this.props.toggleModal('delete_gelato')
	}

	toggleAccordion = () => {
		this.setState({
			openAccordion: !this.state.openAccordion,
		})
	}

	render(){

		const accordionBtn = this.state.openAccordion ? <FontAwesomeIcon icon="chevron-down" onClick={this.toggleAccordion}/> : <FontAwesomeIcon icon="chevron-up" onClick={this.toggleAccordion}/>

		const { data } = this.props

		return (
			<Fragment>

				{this.props.showModal === 'delete_gelato' &&
					<DeleteModal {...this.props}/>
				}

				{this.props.showModal === 'edit_gelato' &&
					<EditModal {...this.props}/>
				}

				<tr className="item-row">
					<td>
						{accordionBtn}
					</td>
					<td>{data.name}</td>
					<td>{data.quantity}</td>
					<td>Rp {data.price}</td>
					<td>
						<button className="btn btn__small" onClick={this.onEdit.bind(this, data.id)}><FontAwesomeIcon icon="pencil-alt"/></button>
						<button className="btn btn__small" onClick={this.onDelete.bind(this, data.id)}><FontAwesomeIcon icon="trash-alt"/></button>
					</td>
				</tr>
				{this.state.openAccordion &&
					<tr className="item-description">
						<td colspan="5">lorem ipsum dolor sit amet consectetum</td>
					</tr>
				}
			</Fragment>
		)
	}
	
}