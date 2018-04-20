import React from 'react'
import SoccerBallGrass from 'react-icons/lib/fa/futbol-o'
import SoccerBallTurf from 'react-icons/lib/io/ios-football'
import { PropTypes } from 'prop-types'

export const SoccerDayRow = ({field, date, grass, turf}) => (
		<tr>
			<td>
				{date}
			</td>
			<td>
				{field}
			</td>
			<td>
				{(grass) ? <SoccerBallGrass/> : null}
			</td>
			<td>
				{(turf) ? <SoccerBallTurf /> : null}
			</td>
		</tr>

	)

SoccerDayRow.PropTypes = {
		field: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		grass: PropTypes.bool,
		turf: PropTypes.bool
	}

export default SoccerDayRow;
