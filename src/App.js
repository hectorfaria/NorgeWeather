import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/searchbar';
import Weathercontainer from './containers/weathercontainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchBar className="bars" />
				</header>
				<div className="App-intro">
					<Weathercontainer />
				</div>
			</div>
		);
	}
}

export default App;
