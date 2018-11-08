import React, { Component } from 'react'

const Sidebar = () => {
	return (
		<ul className="sidebar">
			<li className="site-id">
				<h2 className="logo">ESGREM</h2>
				<p>The number #1 ice cream shop</p>
			</li>
			<li>
				<ul className="vertical-menu">
					<li>
						<a href="#">STORE</a>
					</li>
					<li>
						<a href="#">GELATO</a>
					</li>
				</ul>
			</li>
		</ul>
	)
}

export default Sidebar