import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Link } from 'react-router-dom'


import './style.css'


class Nav extends Component {
  state = {
    anchorEl: null,
  }

  menuItems = [
    {
      name: 'Dashboard',
      path: '/'
    },
    {
      name: 'Ask A Question',
      path: '/add'
    },
    {
      name: 'Leaderboard',
      path: '/leaderboard'
    },
    {
      name: 'Log Out',
      path: '/logout'
    }
  ]

  handleChange = (event, checked) => {
    this.setState({ auth: checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className='nav'>
        <AppBar position='static'>
          <Toolbar>
              <Typography variant='title' color='inherit' className='nav-title'>
                <Link to='/'>
                  Comfreight
                </Link>
              </Typography>
              <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup='true'
                onClick={this.handleMenu}
                color='inherit'
              >
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
                className='user-menu'
              >
                {this.menuItems.map((item, i) => (
                  <Link to={item.path} key={i}>
                    <MenuItem onClick={this.handleClose}>
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Nav