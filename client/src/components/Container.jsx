import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { withRouter, Switch, Route } from 'react-router-dom'
import * as gelatoActions from '../action/gelatoAction'
import Navbar from './Navbar'
import Drawer from './Drawer'
import {Content} from './Content'
import Sidebar from './Sidebar'
import Gelato from './Gelato'

class Container extends Component{

	render(){
		return (
			<div>
		        <Navbar />
    			<Content {...this.props}>
    				<Switch>
    					<Route exact path="/" render={() => <Gelato {...this.props} />}/>
    				</Switch>
    			</Content>
			</div>
		)
	}
}

function mapStateToProps(state){
	const { app } = state

	return {
		...app
	}
}

export default withRouter(connect(mapStateToProps, { ...gelatoActions })(Container))