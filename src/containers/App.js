import React from 'react';
import style from './App.css';
import Search from '../components/Search'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: []
		};
		this.handleSearchResults = this.handleSearchResults.bind(this);
	}

	handleSearchResults(searchResults) {
		console.log('searchResults: ',searchResults);
		this.setState({searchResults}) 
	}

	render() {
		return (<div>
		<Search onSearchResults={this.handleSearchResults}/>
			<ul>
			{this.state.searchResults.map(elem => <li>{elem['1. symbol']} </li>)}
			</ul>
			</div>
		);
	}
}

export default App;
