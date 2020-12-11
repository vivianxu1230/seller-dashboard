import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Login, Signup, UserHome, Homepage, Dataview} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    // const {isLoggedIn} = this.props
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* {isLoggedIn && (
          <Switch>
            <Route path="/home" component={UserHome} />
          </Switch>
        )} */}

        <Route exact path="/" component={Homepage} />
        <Route path="/data" component={Dataview} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
