import React, { Component } from 'react'

class Card extends Component {

	onCardDetail = (item) => {
		this.props.selectItem(item)
		this.props.toggleCardDetail()
	}

	render(){

		const { item } = this.props
		const imageURL = "http://localhost:5000/" + item.image

		return(
			
				<div className="card" onClick={this.onCardDetail.bind(this,item)}>
					<img src={imageURL} />
					<div className="detail">
						<h2 className="title">{item.name}</h2>
						<div className="meta">
							<span className="quantity">Quantity : <span>{item.quantity}</span></span>
							<span className="price">Rp {item.price}</span>
						</div>
					</div>
				</div>
			
		)
	}
}

export default Card