import React, { Component, Fragment } from 'react'
import Control from './Control'
import AddModal from './AddModal'
import InsertModal from './InsertModal'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import Modal from './Modal'
import Grid from './Grid'
import Table from './Table'
import TableRP from './TableRP'
import ListRP from './ListRP'
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

		const { gelatos, modalActive, toggleModal, selectItem, createGelato, deleteGelato, updateGelato, selectedItem } = this.props

		return(
			
			<div className="container">
				
				<Modal
					name="insert_gelato"
					modalActive={modalActive}
					render={<InsertModal onClose={toggleModal} onSubmit={createGelato}/>}
				/>

				<Modal
					name="delete_gelato"
					modalActive={modalActive}
					render={<DeleteModal 
						onClose={toggleModal} 
						selectedItem={selectedItem}
						deselectItem={selectItem} 
						onSubmit={deleteGelato}
					/>}
				/>

				<Modal
					name="edit_gelato"
					modalActive={modalActive}
					render={<EditModal
						onClose={toggleModal} 
						selectedItem={selectedItem}
						deselectItem={selectItem} 
						onSubmit={updateGelato}
					/>}
				/>
				
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
						<TableRP
							data={gelatos}
							header={['','Name','Quantity','Price','']}
							renderHeader={title => <th>{title}</th>}
							renderItem={gelato => <ListRP key={gelato.id} data={gelato} selectItem={selectItem} toggleModal={toggleModal}/>}
						/>
					}
				</div>
			</div>
		)
	}
}

export default IsengHOC(Gelato)