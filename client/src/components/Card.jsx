import React, { Component } from 'react'

class Card extends Component {
	render(){
		return(
			<div className="card">
				<div className="card-preview">
					<img src=""/>
				</div>
				<div className="description">
					<h2 className="desc-title">Title</h2>
					<p>Price : <span>Rp 20.000</span></p>
				</div>
			</div>
		)
	}
}

export default Card