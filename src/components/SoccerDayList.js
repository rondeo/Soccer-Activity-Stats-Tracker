import React from 'react'
import { SoccerDayRow } from './SoccerDayRow'
import { PropTypes } from 'prop-types'
import { Link }  from 'react-router-dom'
import '../stylesheets/SoccerDayList.css'

export const SoccerDayList = ({days, filter}) => {
  const filteredDays = (!filter ||
  		!filter.match(/grass|turf/))?
  		days:
  		days.filter(day => day[filter])

  return (
  	<div className="soccer-day-list">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Field</th>
				<th>Grass</th>
				<th>Turf</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<Link to="/list-days" className="link">
						
					</Link>
                    <Link to="/list-days/fields" className="link">
                    </Link>
					<Link to="/list-days/grass" className="link">
					</Link>
					<Link to="/list-days/turf" className="link">
					</Link>
				</td>
			</tr>
		</thead>
		<tbody>
			{filteredDays.map((day, i) =>
				<SoccerDayRow key={i}
						   {...day}/>
				)}
		</tbody>

	</table>
	</div>
)
}

SoccerDayList.PropTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"SoccerDayList should be an array"
				)
		} else if(!props.days.length) {
			return new Error(
				"SoccerDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}

export default SoccerDayList;
