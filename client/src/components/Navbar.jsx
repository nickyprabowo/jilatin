import React, { Component } from 'react'

class Navbar extends Component {

	render(){
		return(
			<div className="navbar">
	          	<ul className="right">
		            {/*<li><a href="#" className="active">Home</a></li>
		            <li><a href="#">About</a></li>
		            <li>
		            	<div className='dropdown'>
		            		<a href="#" className='dropdown-btn'>Profil</a>
		            		<div className='dropdown-content dropdown-rtl'>
		            			<ul>
		            				<li><a href="#">Logout</a></li>
		            				<li><a href="#">Detail</a></li>
		            			</ul>
		            		</div>
		            	</div>
		            </li>*/}
		            <li>
		            	<h2 className="logo">JILATIN</h2>
		            </li>
	          	</ul>
	        </div>
		)
	}
}

export default Navbar