import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
// I want to create Modal
// called with <Modal {..some props} />
// you can put anything into a modal
// the Modal only provide a popup mechanism and a cancel button
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
	constructor(props){
		super(props)
		this.el = document.createElement('div');
	}

	onEscapePress = (e) => {
		if(e.key === 'Escape' || e.keyCode === 27){this.props.onClose()}
	}

	componentDidMount = () => {
		if (this.props.onClose) {
			window.addEventListener('keydown', this.onEscapePress, true)
		}
		modalRoot.appendChild(this.el);
	}

	componentWillUnmount = () => {
		if (this.props.onClose) {
			window.removeEventListener('keydown', this.onEscapePress, true)
		}
		modalRoot.removeChild(this.el);
	}

	preventClose = (e) => {
		e.stopPropagation()
	}

	handleClose = () => {
		if(this.props.deselectItem) this.props.deselectItem()
		this.props.onClose()
	}

	render(){
		const { modalActive, name } = this.props

		const newProps = {...this.props, ...this.handleClose}

		if(modalActive === name){
			return (
				ReactDOM.createPortal(
					<Fragment>
						<div className="overlay" onClick={this.handleClose}>
							<div className="modal" onClick={this.preventClose}>
							      {this.props.render(newProps)}
							</div>
						</div>
					</Fragment>,
			      this.el
			    )
			)
		}else return null
	}	
}

export default Modal