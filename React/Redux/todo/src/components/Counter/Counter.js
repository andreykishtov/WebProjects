import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import css from './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div className={css.main} >
        <div className={css['btn-box']} >
          <button className={css.btn} onClick={onIncrement}> + </button>        
          <button className={css.btn} onClick={onDecrement}> - </button> 
        </div>
        <span className={css.label}>Clicked: {value} times</span>
      </div>
    )
  }
}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

export default Counter
