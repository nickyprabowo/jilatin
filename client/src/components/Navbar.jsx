import React, { Component } from 'react'

class Navbar extends Component {

	render(){
		return(
			<div className="navbar">
				<ul>
					<li className="site-id">
						<h2 className="logo">EsGrim</h2>
					</li>
					<li className="right">
						{/*<ul>
				            <li><a href="#" className="active">Home</a></li>
				            <li><a href="#">About</a></li>
			          	</ul>*/}
					</li>
				</ul>
	        </div>
		)
	}
}

export default Navbar