import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import Container from './components/Container'
import './reset.css';
import './App.scss';

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
