import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import TopBar from '../../components/TopBar/TopBar'; 
import Counter from '../../components/Counter/Counter'
import { increment, decrement } from '../../actions/counter'


class App extends Component {

	constructor(props) {
		super(props)

		let obj = {action:1}
		let ob2 = {...obj}
	}

	render() {
		const { 
			counter, 
			doIncrement, 
			doDecrement
		} = this.props
		
		return (
			<div class={css}>
				<TopBar>Redux Counter</TopBar>
				<h1 class={css}>React Redux Counter Example</h1>
				<Counter
					value={counter}
					onIncrement={doIncrement}
					onDecrement={doDecrement}
				/>
			</div>
		)
	}

}

// this will create the props that are the store data
function mapStateToProps(state) {
	const { counter } = state
	return {
		// these names will appear on the container props
		counter
	}
}

// this will create the props that are functions that change the store's state
function mapDispatchToProps(dispatch) {
	return {
		// these names will appear on the container props
		doIncrement: () => dispatch(increment()),
		doDecrement: () => dispatch(decrement())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// how to connect a component to redux ?(turning it into a container)
// 1. Wrap your App component with a <Provider store={store}>
// 2. define mapStateToProps
// 3. define mapDispatchToProps
// 4. for each component you want to connect use connect(mapStateToProps, mapDispatchToProps)(ComponentName)
