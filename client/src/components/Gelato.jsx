import React, { Component, Fragment } from 'react'
import Control from './Control'
import InsertModal from './modal/InsertModal'
import DeleteModal from './modal/DeleteModal'
import EditModal from './modal/EditModal'
import Modal from './modal/Modal'
import Grid from './data_view/Grid'
import Table from './data_view/Table'
import TableRP from './data_view/TableRP'
import ListRP from './data_view/ListRP'
import CardDetail from './data_view/CardDetail'
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

		const { gelatos, modalActive, toggleModal, toggleCardDetail, selectItem, createGelato, deleteGelato, updateGelato, selectedItem, cardDetail } = this.props

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

				<CardDetail showDetail={cardDetail} data={selectedItem}/>
				
				<Control 
					toggleModal={this.props.toggleModal} 
					grid={this.props.gridView}
					list={this.props.listView}
				/>
				<div className="container">
					{this.props.viewMode === 'grid' &&
						<Grid items={gelatos} selectItem={selectItem} toggleCardDetail={toggleCardDetail} showDetail={cardDetail}/>
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