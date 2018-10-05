import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'


class Dashboard extends Component {

  render() {
    return (
      <div>
      DASHBOARD
      </div>
    )
  }
}

const mapStateToProps = ({invoices, companies}) => {
  const invoiceIds = Object.keys(invoices).sort((a,b) => invoices[b].timestamp - invoices[a].timestamp)
  return {
    invoiceIds: invoiceIds,
    companies
  }
}

export default connect(mapStateToProps)(Dashboard)