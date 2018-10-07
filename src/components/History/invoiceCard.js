import React from 'react'
import Paper from '@material-ui/core/Paper'
import moment from 'moment'
import ErrorOutlinedIcon from '@material-ui/icons/ErrorOutlined'
import Button from '@material-ui/core/Button'

import './style.css'

const cardColor = (status) => {
  if(status === 'Paid') {
    return 'paid'
  } else if(status === 'Declined'){
    return 'declined'
  } else {
    return ''
  }
}

const InvoiceCard = ({invoiceData, company, openModal}) => {
  return (
    <Paper className='invoice-card'>
      <div className="invoice-info">
        <div className="invoice-info__details">
          <h3>{company.name}</h3>
          <p>${invoiceData.totalAmount.toFixed(2)}</p>
        </div>
        <div className="invoice-info__modal">
          <Button onClick={() => openModal(invoiceData)}>Details</Button>
        </div>
      </div>
      <div className="stepper-container">
        <div className="origin">
          <p>2913 Millenium Cir,<br/> Long Beach, CA 20929</p>
        </div>
        <div className="destination">
          <p>123 NoName St,<br/> Long Beach, CA 20929</p>
        </div>
        <div className="stepper">
          <div className="step step-one first"></div>
          <div className="step step-two second"></div>
        </div>
      </div>
      <div className={`invoice-status ${cardColor(invoiceData.status)}`}>
        <div className="invoice-status__title">
        <h3>{invoiceData.status}</h3>
        {invoiceData.status === 'Declined' &&
          <ErrorOutlinedIcon/>
        }
        </div>
        <p>{moment(invoiceData.timestamp).format('YYYY')}</p>
        <h3>{moment(invoiceData.timestamp).format('ddd, MMM d')}</h3>
      </div>
    </Paper>
  )
}

export default InvoiceCard