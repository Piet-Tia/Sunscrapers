import React from 'react';
import style from './App.css';
import Search from '../components/Search';
import Company from '../components/Company';

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
		this.setState({ searchResults });
	}

	handleClick(event, element) {
		const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${element['1. symbol']}&apikey=X7RBKGWVBM5RZ6F7`;
		fetch(url)
			.then(response => response.json())
			.then(responseJson => this.setState({selectedCompanyData: responseJson}))
			.then(console.log('state:: ',this.state))
	}

	render() {
		return (<div>
			<Search onSearchResults={this.handleSearchResults} />
			<ul>
				{this.state.searchResults.map((elem,ind) => <li key={ind} onClick={(e) => this.handleClick(e, elem)}>{elem['2. name']} </li>)}
			</ul>
			<Company companyData={this.state.selectedCompanyData} />
		</div>
		);
	}
}

export default App;
