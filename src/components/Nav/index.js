import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


import './style.css'


class Nav extends Component {
  render() {

    return (
      <div className='nav'>
        <AppBar position='static' style={{backgroundColor: '#449aed'}}>
          <Toolbar>
              <Typography variant='title' color='inherit' className='nav-title'>
                  Comfreight
              </Typography>
              <div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Nav