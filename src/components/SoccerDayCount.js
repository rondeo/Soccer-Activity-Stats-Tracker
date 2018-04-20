import React from 'react'
import SoccerBallGrass from 'react-icons/lib/fa/futbol-o'
import SoccerBallTurf from 'react-icons/lib/io/ios-football'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'prop-types'
import '../stylesheets/SoccerDayCount.css'

const percentToDecimal = (decimal) => {
		return ((decimal * 100) + '%')
	}

const calcGoalProgress = (total, goal) => {
		return percentToDecimal(total/goal)
	}

export const SoccerDayCount = ({total=70, grass=20,
							turf=10, goal=100}) => (
		<div className="soccer-day-count">
			<div className="total-days">
				<span>{total}</span>
					<Calendar  className="icon" />
				<span>days</span>
			</div>
			<div className="grass-days">
				<span>{grass}</span>
					<SoccerBallGrass className="icon" />
				<span>days</span>
			</div>
			<div className="turf-days">
				<span>{turf}</span>
					<SoccerBallTurf className="icon"  />
				<span>days</span>
			</div>
			<div className="goal">
				<span>
					{calcGoalProgress(
						total,
						goal
					)}
				</span>
			</div>
		</div>
	)

SoccerDayCount.propTypes = {
	  total: PropTypes.number,
	  grass: PropTypes.number,
	  turf: PropTypes.number,
	  goal: PropTypes.number
	}
