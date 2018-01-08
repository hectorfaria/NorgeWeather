import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.FetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="form-inline container-fluid">
				<input
					className="form-control mr-sm-2 bars"
					type="text"
					placeholder="Search (Like: Oslo, Bodø)"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<button className="btn btn-outline-success my-2 my-sm-0 searchbar" type="submit">
					<i className="fa fa-search" aria-hidden="true" />
				</button>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ FetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
