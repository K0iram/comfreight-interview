import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
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
})


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
            <p className="error">We were unable to identify the documents <br/> Please call US 424 315 2553</p>
          }
          <p>Billed To : {companies[invoiceData.billTo].name} </p>
          <div className="shipping-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106095.03265152735!2d-118.22632085738981!3d33.80018816333302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cae84099d759%3A0xa1003afac42a8faa!2sLong+Beach%2C+CA!5e0!3m2!1sen!2sus!4v1538971614682" frameBorder="0" style={{border:0, width:'95%', height: 200 }} allowFullscreen></iframe>
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