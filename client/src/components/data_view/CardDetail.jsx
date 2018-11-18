import React from 'react'
import { CSSTransition } from 'react-transition-group'

const CardDetail = props => {

	const imageURL = "http://localhost:5000/" + props.data.image

	return (
		<CSSTransition
			in={props.showDetail}
			classNames="card-detail-animate"
		>
			<div className="card-detail">
				<h1>{props.data.name}</h1>
				<img src={imageURL}/>
				<div className="meta">
					<span className="quantity">Quantity : <span>{props.data.quantity}</span></span>
					<span className="price">Rp {props.data.price}</span>
				</div>
				<p>{props.data.description}</p>
			</div>
		</CSSTransition>
	)
}

export default CardDetail