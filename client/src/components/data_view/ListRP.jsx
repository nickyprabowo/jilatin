import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ListRP extends Component {

	state = {
		openAccordion: false
	}

	toggleAccordion = () => {
		this.setState({
			openAccordion: !this.state.openAccordion
		})
	}

	onEdit = (data) => {
		this.props.selectItem(data)
		this.props.toggleModal('edit_gelato')
	}

	onDelete = (id) => {
		this.props.selectItem(id)
		this.props.toggleModal('delete_gelato')
	}

	render(){
		const accordionBtn = this.state.openAccordion ? <FontAwesomeIcon icon="chevron-down" onClick={this.toggleAccordion}/> : <FontAwesomeIcon icon="chevron-up" onClick={this.toggleAccordion}/>

		const { data } = this.props

		return (
			<Fragment>
				<tr className="item-row">
					<td>
						{accordionBtn}
					</td>
					<td>{data.name}</td>
					<td>{data.quantity}</td>
					<td>Rp {data.price}</td>
					<td>
						<button className="btn btn__small" onClick={this.onEdit.bind(this, data)}><FontAwesomeIcon icon="pencil-alt"/></button>
						<button className="btn btn__small" onClick={this.onDelete.bind(this, data.id)}><FontAwesomeIcon icon="trash-alt"/></button>
					</td>
				</tr>
				{this.state.openAccordion &&
					<tr className="item-description">
						<td colspan="5">{data.description}</td>
					</tr>
				}
			</Fragment>
		)	
	}
}

export default ListRP