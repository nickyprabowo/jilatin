import React, { Component } from 'react'

class Drawer extends Component {
	render(){
		return(
			<div className="navbar drawer">
				{this.props.children}
			</div>
		)
	}
}

export default Drawer