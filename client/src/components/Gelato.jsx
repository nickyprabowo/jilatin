import React, { Component } from 'react'
import Control from './Control'
import AddModal from './AddModal'

export default class Gelato extends Component {

	componentDidMount = () => {
		this.props.fetchGelatos()
	}

	render(){
		return(
			
			<div className="container">
				{this.props.showModal &&
					<AddModal toggleModal={this.props.toggleModal} submit={this.props.addGelato}/>
				}

				<Control toggleModal={this.props.toggleModal}/>
				<div className="container three">
					<div className="grid-item">
						<div className="card">
							<div className="card-preview">
								<img src=""/>
							</div>
							<div className="description">
								<h2 className="desc-title">Title</h2>
								<p>Price : <span>Rp 20.000</span></p>
							</div>
						</div>
					</div>
					<div className="grid-item">
						<div className="card">
							<div className="card-preview">
								<img src=""/>
							</div>
							<div className="description">
								<h2 className="desc-title">Title</h2>
								<p>Price : <span>Rp 20.000</span></p>
							</div>
						</div>
					</div>
					<div className="grid-item">
						<div className="card">
							<div className="card-preview">
								<img src=""/>
							</div>
							<div className="description">
								<h2 className="desc-title">Title</h2>
								<p>Price : <span>Rp 20.000</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}