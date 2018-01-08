import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googlemap';

class Weathercontainer extends Component {
	renderWeather(citydata) {
		const temps = citydata.list.map((weather) => weather.main.temp);
		const press = citydata.list.map((weather) => weather.main.pressure);
		const humid = citydata.list.map((weather) => weather.main.humidity);
		const { lon, lat } = citydata.city.coord;

		return (
			<tr key={citydata.city.name}>
				<td className="bars2">
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart data={temps} color="red" units=" C" />
				</td>
				<td>
					<Chart data={press} color="blue" units=" hPa" />
				</td>
				<td>
					<Chart data={humid} color="black" units="%" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<td>
							<b>City</b>
						</td>
						<td>
							<b>Temp (Cº)</b>
						</td>
						<td>
							<b>Press (hPa) </b>
						</td>
						<td>
							<b>Moist (%)</b>
						</td>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapStatetoPros({ weather }) {
	return { weather };
}

export default connect(mapStatetoPros)(Weathercontainer);
