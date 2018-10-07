import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'
import Button from '@material-ui/core/Button'

import './style.css'

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});


const ModalCard = ({ invoiceData, companies, onClose }) => {
  console.log(styles.paper)
  return (
    <Paper className='modal-card'>
      <div className='modal-card__inner'>
        <div className={`modal-card__status ${invoiceData.status}`}>
          <h2>{invoiceData.status}</h2>
          <h4>{moment(invoiceData.timestamp).format('dddd, MMMM d YYYY')}</h4>
          <div className="invoice-details">
            <h4>Invoice N&#176; {invoiceData.invoiceNumber}</h4>
            <h2>${invoiceData.totalAmount.toFixed(2)}</h2>
          </div>
        </div>
        <div className="modal-card__details">
          {invoiceData.status === 'Declined' &&
            <p>We were unable to identify the documents <br/> Please call US 424 315 2553</p>
          }
          <p>Billed To : {companies[invoiceData.billTo].name} </p>
          <div className="shipping-map">
            <img src="https://www.placehold.it/450x250" alt=""/>
          </div>
          <p>Rate: {invoiceData.rate}%</p>
          <p>Load N&#176; : {invoiceData.loadN}</p>
          <p>Type : {invoiceData.type}</p>
          <p>Load Length : {invoiceData.loadLength} ft</p>
          <p>Company Phone : {companies[invoiceData.billTo].phone}</p>
          <div className="total-paid">
            <p>Total Paid: ${invoiceData.totalPaid}</p>
          </div>
        </div>
        <div className="back-btn">
          <Button variant='outlined' onClick={onClose}>Back</Button>
        </div>
        </div>
    </Paper>
  )
}

const WrappedModalCard = withStyles(styles)(ModalCard)

export default WrappedModalCard