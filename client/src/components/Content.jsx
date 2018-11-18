import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

const Content = function(props){
	return(
		<div className="main-content">
			{props.children}
		</div>
	)
}

export default Content