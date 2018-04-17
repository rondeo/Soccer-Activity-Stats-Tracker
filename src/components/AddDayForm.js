import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import '../stylesheets/AddDayForm.css'

const fields = [
	"Camp Nou",
	"Hammond Park",
	"Harris Front Yard",
	"CenturyLink Field",
	"Mercedes-Benz Stadium",
	"Old Trafford",
	"Dunwoody Elementary School Field",
	"Dominican Univ Field",
	"Santiago Bernabéu Stadium",
	"La Bombonera",
	"Parc des Princes"
]

class Autocomplete extends Component {

	get value() {
		return this.refs.inputField.value
	}

	set value(inputValue) {
		this.refs.inputField.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputField"
					   type="text"
					   list="fields" />
				<datalist id="fields">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



export const AddDayForm = ({ field,
							 date,
							 grass,
							 turf,
							 onNewDay }) => {

	let _field, _date, _grass, _turf

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			field: _field.value,
			date: _date.value,
			grass: _grass.checked,
			turf: _turf.checked
		})
		_field.value = ''
		_date.value = ''
		_grass.checked = false
		_turf.checked = false

	}

	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="field" className="label">Field Name</label>
			<Autocomplete options={fields}
				   		  ref={input => _field = input}/>

			<label htmlFor="date" className="label">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
				<input id="grass"
					   type="checkbox"
					   defaultChecked={grass}
					   ref="grass"
					   ref={input => _grass = input}/>
				<label htmlFor="grass" className="label">Grass Day</label>
			</div>

			<div>
				<input id="turf"
					   type="checkbox"
					   defaultChecked={turf}
					   ref="turf"
					   ref={input => _turf = input}/>
				<label htmlFor="turf" className="label">
					Turf Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

AddDayForm.defaultProps = {
	field: "Kirkwood",
	date: "2017-02-12",
	grass: true,
	turf: false
}


AddDayForm.PropTypes = {
	field: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	grass: PropTypes.bool.isRequired,
	turf: PropTypes.bool.isRequired
}
