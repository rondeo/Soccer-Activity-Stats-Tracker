import React from 'react'
import { Component } from 'react'
import { SoccerDayList } from './SoccerDayList'
import { SoccerDayCount } from './SoccerDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
		constructor(props) {
			super(props)
			this.state = {
				allSoccerDays: [
				{
					field: "Camp Nou",
					date: "2016-01-02",
					grass: true,
					turf: false
				}
			]
			}
			this.addDay = this.addDay.bind(this)
		}

		addDay(newDay) {
			this.setState({
				allSoccerDays: [
					...this.state.allSoccerDays,
					newDay
				]
			})
		}

		countDays(filter) {
			const { allSoccerDays } = this.state
			return allSoccerDays.filter(
				(day) => (filter) ? day[filter] : day).length
		}

		render() {
			return (
				<div className="app">
				<Menu />
				{(this.props.location.pathname === "/") ?
				  <SoccerDayCount total={this.countDays()}
								 grass={this.countDays(
								 		"grass"
								 	)}
								 turf={this.countDays(
								 		"turf"
								 	)}/> :
				 (this.props.location.pathname === "/add-day") ?
				 	<AddDayForm onNewDay={this.addDay}/> :
				 	<SoccerDayList days={this.state.allSoccerDays} />
				 				// filter= {this.props.params.filter}/>
				}

				</div>
			)
		}
	}
