import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import {BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'

window.React = React

render(
	<BrowserRouter history={HashRouter}>
		<Switch>
		<Route path="/" component={App}/>
		<Route path="list-days" component={App}>
			<Route path=":filter" component={App} />
		</Route>
		<Route path="add-day" component={App} />
		<Route path="*" component={Whoops404}/>
		</Switch>
	</BrowserRouter>,
	document.getElementById('react-container')
)
