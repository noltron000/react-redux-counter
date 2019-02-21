import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/index.js'
import './App.css';
import Counter from './Counter'

const store = createStore(reducers)

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Counter />
				</div>
			</Provider>
		);
	}
}

export default App;
