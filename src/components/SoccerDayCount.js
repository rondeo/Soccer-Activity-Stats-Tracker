import React, { Component } from 'react';
import '../stylesheets/index.css';
import SoccerBallGrass from 'react-icons/lib/io/ios-football';
import SoccerBallTurf from 'react-icons/lib/io/ios-football-outline';
import Calendar from 'react-icons/lib/io/calendar';

//========| create class with ES6 |============
export default class SoccerDayCount extends Component {

    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    }

    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    }

    render() {
        return (

            <div className='soccer-day-count'>
            <header>
                    Soccer Activity Counter
            </header>
                <div className='total-days'>
                    <span className="days">{this.props.total}</span>
                    <Calendar/>
                    <span>: Total Days</span>
                </div>

                <div className='grass-days'>
                    <span className="days">
                        { this.props.grass }
                    </span>
                    <SoccerBallGrass/>
                    <span> : Grass Days</span>
                </div>

                <div className='turf-days'>
                    <span className="days">
                        { this.props.turf }
                    </span>
                    <SoccerBallTurf className="svg"/>
                    <span>: Turf Days</span>
                </div>

                <div className='goal'>
                    <span className="days">{ this.calcGoalProgress(
                        this.props.total,
                        this.props.goal) }
                    </span>
                    <span>: Goal Status</span>
                </div>

            </div>

        )
    }
}


// //using methods to create stateless components
//
// const percentToDecimal = (decimal) => {
//         return ((decimal * 100) + '%')
//     }
//
// const calcGoalProgress = (total, goal) => {
//         return percentToDecimal(total/goal)
//     }
//
//
//     export const SoccerDayCount = (total, grass, turf, goal)  => (
//
//                 <div className='soccer-day-count'>
//                     <div className='total-days'>
//                         <span>{total}</span>
//                         <span>days</span>
//                     </div>
//
//                     <div className='grass-days'>
//                         <span>
//                             {grass}
//                         </span>
//                         <SoccerBallGrass/>
//                         <span> days</span>
//                     </div>
//
//                     <div className='turf-days'>
//                         <span>
//                             {turf}
//                         </span>
//                         <SoccerBallTurf/>
//                         <span> days</span>
//                     </div>
//
//                     <div className='goal'>
//                         <span>{calcGoalProgress(
//                             total,
//                             goal)}
//                         </span>
//                     </div>
//
//                 </div>
//             )
//
//     export default SoccerDayCount;
