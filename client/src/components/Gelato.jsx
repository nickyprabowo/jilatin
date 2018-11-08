import React, { Component } from 'react'
import Control from './Control'
import AddModal from './AddModal'
import Grid from './Grid'
import Table from './Table'
import { CSSTransition } from 'react-transition-group'
import { IsengHOC } from '../HOC/IsengHOC'

class Gelato extends Component {

	componentDidMount = () => {
		if(this.props.gelatos.length === 0){
			this.props.fetchGelatos()
		}
	}

	onError = () => {
		this.props.makeError()
	}

	render(){

		const { gelatos } = this.props

		return(
			
			<div className="container">
				
				{this.props.showModal &&
					<AddModal toggleModal={this.props.toggleModal} submit={this.props.createGelato} />		
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
						<Table items={gelatos} />
					}
				</div>
			</div>
		)
	}
}

export default IsengHOC(Gelato)