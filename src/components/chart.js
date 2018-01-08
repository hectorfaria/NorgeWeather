import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	const average = (data) => {
		return _.round(_.sum(data) / data.length);
	};

	return (
		<div>
			<div>
				<b>
					{average(props.data)}
					{props.units}
				</b>
			</div>
			<Sparklines data={props.data}>
				<SparklinesBars color={props.color} style={{ stroke: 'white', fillOpacity: '.25' }} />
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
		</div>
	);
};
