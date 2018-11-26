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
import InfoBox from './infobox/InfoBox'
import { CSSTransition } from 'react-transition-group'
import { IsengHOC } from '../HOC/IsengHOC'

class Gelato extends Component {

	state = {
		infoType: "",
		timeoutDuration: 0
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

		const { gelatos, error, modalActive, toggleModal, toggleCardDetail, selectItem, 
			createGelato, deleteGelato, updateGelato, selectedItem, cardDetail, message, 
			asyncState, closeMessage } = this.props

		let infoType = "", timeoutDuration = 0

		if(this.props.asyncState === "error") {
			infoType = "error"
		}else if(this.props.asyncState === "loaded") {
			infoType = "success"
			timeoutDuration = 4000
		}

		return(
			
			<div className="container">

				<InfoBox
					open={message}
					message={message}
					onClose={closeMessage}
					type={infoType}
					timeout={timeoutDuration}
				/>
				
				<Modal
					name="insert_gelato"
					modalActive={modalActive}
					onClose={toggleModal}
					onSubmit={createGelato}
					render={props => <InsertModal {...props}/>}
				/>

				<Modal
					name="delete_gelato"
					modalActive={modalActive}
					item={selectedItem}
					onClose={toggleModal}
					deselectItem={selectItem} 
					onSubmit={deleteGelato}
					render={props => <DeleteModal {...props}/>}
				/>

				<Modal
					name="edit_gelato"
					modalActive={modalActive}
					onClose={toggleModal} 
					item={selectedItem}
					deselectItem={selectItem} 
					onSubmit={updateGelato}
					render={props => <EditModal {...props}/>}
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
						<Fragment>
						<TableRP
							data={gelatos}
							header={['','Name','Quantity','Price','']}
							renderHeader={title => <th>{title}</th>}
							renderItem={gelato => <ListRP key={gelato.id} data={gelato} selectItem={selectItem} toggleModal={toggleModal}/>}
						/>
						</Fragment>
					}
				</div>
			</div>
		)
	}
}

export default Gelato