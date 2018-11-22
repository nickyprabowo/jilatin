import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faCheckSquare, faTh, faTrashAlt, faPencilAlt, faPlus, faSearch, faChevronDown, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import './reset.css';
import './App.scss';
import * as gelatoActions from './action/gelatoAction'
import Navbar from './components/Navbar'
import Content from './components/Content'
import InfoBox from './components/infobox/InfoBox'
import Gelato from './components/Gelato'

library.add(faListUl,faCheckSquare,faTh,faTrashAlt,faPencilAlt,faPlus,faSearch,faChevronDown,faChevronUp,faTimes)

class App extends Component {
  render() {
    return (
	    <div className="App">
	        <Navbar />
			<Content>
				<Gelato {...this.props} />
			</Content>
		</div>
    );
  }
}

function mapStateToProps(state){
	const { app } = state

	return {
		...app
	}
}

export default connect(mapStateToProps, { ...gelatoActions })(App)
