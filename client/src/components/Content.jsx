import React from 'react'

const Content = function(props){
	return(
		<div className="main-content">
			{props.children}
		</div>
	)
}

export default Content