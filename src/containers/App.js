import React from 'react';
import style from './App.css';
import Search from '../components/Search'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			selectedCompanyData: {}
		};
		this.handleSearchResults = this.handleSearchResults.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleSearchResults(searchResults) {
		console.log('searchResults: ', searchResults);
		this.setState({ searchResults })
	}

	handleClick(event, element) {
		console.log('element: ', element);
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&keywords=${element}&apikey=X7RBKGWVBM5RZ6F7`;
		fetch(url)
			.then(response => response.json())
			.then(responseJson => this.setState({responseJson}))
			.then(console.log(this.state))
	}

	render() {
		return (<div>
			<Search onSearchResults={this.handleSearchResults} />
			<ul>
				{this.state.searchResults.map((elem,ind) => <li key={ind} onClick={(e) => this.handleClick(e, elem)}>{elem['2. name']} </li>)}
			</ul>
		</div>
		);
	}
}

export default App;
