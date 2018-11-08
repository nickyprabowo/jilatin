import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import Container from './components/Container'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faCheckSquare, faTh, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import './reset.css';
import './App.scss';

library.add(faListUl,faCheckSquare,faTh,faTrashAlt,faPencilAlt)

class App extends Component {
  render() {
    return (
	    <Provider store={store}>
	    	<Router>
			    <div className="App">
					<Container/>
			    </div>
		    </Router>
	    </Provider>
    );
  }
}

export default App;
