import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
import '../stylesheets/menu.css'

export const Menu = () =>
	<nav className="menu">
		<Link to="/" activeClassName="selected">
			<HomeIcon className="icon"/>
		</Link>
		<Link to="/add-day" activeClassName="selected">
			<AddDayIcon className="icon" />
		</Link>
		<Link to="/list-days" activeClassName="selected">
			<ListDaysIcon  className="icon"/>
		</Link>
	</nav>
