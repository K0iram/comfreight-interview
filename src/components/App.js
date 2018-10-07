import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Tabs from './Tabs'

class App extends Component {
  componentDidMount() {
    this.props.onReceiveData()
  }

  render() {
    const { loading } = this.props

    return (
        <div className='container'>
          <CssBaseline/>
          <Nav/>
          <LoadingBar/>
            <div>
            {loading ? (
              null
            ):(
              <Tabs/>
            )
          }
          </div>
        </div>
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