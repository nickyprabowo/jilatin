import React, { Component, Fragment } from 'react'

export const IsengHOC = function(Component){
	return class ErrorMessage extends Component{
		constructor(props){
			super(props)
		}

		render(){

			const { asyncState, closeMessage } = this.props

			return (
				<Fragment>
					{ asyncState === 'error' &&
						<p className="message">Error <span onClick={closeMessage}>x</span></p>
					}
					<Component {...this.props}/>
				</Fragment>
			)
		}
	}
}