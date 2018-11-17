import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Control extends Component {

	state = {
		gridClass: true,
		viewClass: false
	}

	openModal = () => {
		this.props.toggleModal('insert_gelato')
	}

	changeGridView = () => {
		this.props.grid()
		this.setState({
			gridClass: true,
			listClass: false
		})
	}

	changeListView = () => {
		this.props.list()
		this.setState({
			listClass: true,
			gridClass: false
		})
	}

	render(){

		const gridViewClass = this.state.gridClass ? "btn btn__violet btn__violet-active" : "btn btn__violet"
		const listViewClass = this.state.listClass ? "btn btn__violet btn__violet-active" : "btn btn__violet"

		return (
			<div className="control">
				<button className="btn btn__purple" onClick={this.openModal}><FontAwesomeIcon icon="plus" /> <span>Input Menu</span></button>
				<div className="view-control">
					<button className={gridViewClass} onClick={this.changeGridView}>
						<FontAwesomeIcon icon="th" />
					</button>
					<button className={listViewClass} onClick={this.changeListView}>
						<FontAwesomeIcon icon="list-ul" />
					</button>
				</div>
			</div>
		)
	}
}

export default Control