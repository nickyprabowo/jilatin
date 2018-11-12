import React, { Component } from 'react'
import Control from './Control'
import AddModal from './AddModal'
import Modal from './Modal'
import Grid from './Grid'
import Table from './Table'
import { CSSTransition } from 'react-transition-group'
import { IsengHOC } from '../HOC/IsengHOC'

class Gelato extends Component {

	state = {
		title: ''
	}

	componentDidMount = () => {
		if(this.props.gelatos.length === 0){
			this.props.fetchGelatos()
		}
	}

	onError = () => {
		this.props.makeError()
	}

	render(){

		const { gelatos, toggleModal, createGelato } = this.props
		const { title } = this.state

		return(
			
			<div className="container">
				
				{this.props.showModal === 'add_gelato' &&
					<AddModal toggleModal={toggleModal} submit={createGelato} />		
				}
				
				<Control 
					toggleModal={this.props.toggleModal} 
					grid={this.props.gridView}
					list={this.props.listView}
				/>
				<div className="container">
					{this.props.viewMode === 'grid' &&
						<Grid items={gelatos} />
					}
					{this.props.viewMode === 'list' &&
						<Table items={gelatos} {...this.props}/>
					}
				</div>
			</div>
		)
	}
}

export default IsengHOC(Gelato)