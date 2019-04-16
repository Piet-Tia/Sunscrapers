import React from 'react';
import style from './Search.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		};
		this.onChangeHandle = this.onChangeHandle.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeHandle(event) {
		console.log('before: ', this.state.searchText);
		this.setState({ searchText: event.target.value });
		console.log('after: ', this.state.searchText);
	}

	onSubmit(event) {
		event.preventDefault();
		const searchText = this.state.searchText;
		const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchText}&apikey=X7RBKGWVBM5RZ6F7`;
		fetch(url)
			.then(response => response.json())
			.then(responseJson => this.props.onSearchResults(responseJson.bestMatches))

	}

	render() {
		return (<div>
				<form onSubmit={event => this.onSubmit(event)}>
					<label htmlFor="searchText">Search by company symbol:</label>
					<input
						type="text"
						id="searchText"
						onChange={event => this.onChangeHandle(event)}
						value={this.state.searchText} />
				</form>
			</div>
		);
	}
}

export default Search;
