import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.onReceiveData()
  }

  render() {
    const { loading } = this.props

    return (
      <Router>
        <div className='container'>
          <CssBaseline/>
          <Nav/>
          <LoadingBar/>
            <div>
            {loading ? (
              null
            ):(
              <div>
                <Switch>
                  <Route path='/' exact component={Dashboard}/>
                </Switch>
              </div>
            )
          }
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({loadingBar}) => {
  return {
    loading: Object.values(loadingBar).includes(1)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReceiveData: () => dispatch(handleInitialData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)