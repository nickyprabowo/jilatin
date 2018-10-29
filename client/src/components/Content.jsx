import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

class Content extends Component{
	render(){

		const { toggleDrawer } = this.props

		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default Content