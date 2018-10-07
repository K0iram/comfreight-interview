import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import FileUpload from './FileUpload'
import { CustomInput, CustomSelect, CustomSwitch } from '../CustomInput'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';

import './style.css'


class Uploads extends Component {

  state = {
    wireTransfer: false,
    invoiceAmount: 0,
    withRate: 0,
    companyName: '',
    companyAdress: '',
    pickUp: '',
    destination: '',
    loadNum: '',
    equipmentType: '',
    loadLength: 0,
    category: ''
  }

  toggleWireTransfer = e => {
    this.setState({
      wireTransfer: e.target.checked
    });
  };

  handlePriceChange = e => {
    this.setState({
      invoiceAmount: e.target.value,
      withRate: e.target.value
    })
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    })
  }

    handleTypeChange = e => {
    this.setState({
      equipmentType: e.target.value
    })
  }

  calculateRate = () => {
    const { invoiceAmount, wireTransfer } = this.state
    let amount = invoiceAmount
    let withRate = invoiceAmount * .03
    const withoutWire = Number(amount) + Number(withRate)
    const withWire = Number(amount) + Number(withRate) + Number(25)

    return wireTransfer ? withWire.toFixed(2) : withoutWire.toFixed(2)
  }

  render() {
    const {
      invoiceAmount,
      companyName,
      companyAdress,
      pickUp,
      destination,
      loadNum,
      equipmentType,
      loadLength,
      category } = this.state

    return (
      <div className="dashboard-container">
        <div className="forms-container">
          <Paper className="detail-card">
            <FileUpload
              value={category}
              onChange={this.handleCategoryChange}
            />

            <div className="invoice-info">
              <CustomInput
                label='Total Invoice Amount'
                onChange={this.handleInputChange}
                placeholder='$ 0.00'
                type='number'
                name='invoiceAmount'
                value={invoiceAmount}
                />
              <CustomInput
                label='Bill To Company'
                onChange={this.handleInputChange}
                placeholder='Company Name'
                name='companyName'
                value={companyName}
                />
              <CustomInput
                label='Bill To Company Address'
                onChange={this.handleInputChange}
                placeholder='Company Address'
                name='companyAdress'
                value={companyAdress}
                />
            </div>
            <div className="details-btn">
              <Button variant="contained" size="small">
                <AddIcon/>
                Details
              </Button>
            </div>
          </Paper>

          <Paper className="detail-card">
            <div className="invoice-info">
              <CustomInput
                label='First Pick Up'
                onChange={this.handleInputChange}
                placeholder='Los Angeles, CA'
                name='pickUp'
                value={pickUp}
              />
              <CustomInput
                label='Final Destination'
                onChange={this.handleInputChange}
                placeholder='Los Angeles, CA'
                name='destination'
                value={destination}
              />
              <CustomInput
                label='Load Number'
                onChange={this.handleInputChange}
                placeholder='0' type='number'
                name='loadNum'
                value={loadNum}
              />
            </div>

            <div className="equipment-info__container">
              <div className="equipment-info">
                <FormControl className="select-length">
                  <CustomSelect
                    defaultValue='Equipment Type'
                    onChange={this.handleTypeChange}
                    value={equipmentType}
                    values={['Dry Van (V)','Box Truck (B)','Flat Bed (F)']}
                  />
                </FormControl>
                <FormControl className="length-input">
                  <CustomInput label='Load Length' onChange={this.handleInputChange} placeholder='Ft 00' type='number' value={loadLength}/>
                </FormControl>
              </div>
            </div>

            <div className="wiretransfer-switch">
              <CustomSwitch
                label="Wire Transfer Needed ($25)"
                checked={this.state.wireTransfer}
                onChange={this.toggleWireTransfer}
                value={this.state.wireTransfer}
              />
            </div>

            <div className="payment-info">
              <div className="payment-info__rate">
                <p>Your Rate: 3%</p>
                <p>${(invoiceAmount * .03).toFixed(2)}</p>
              </div>
              <div className="payment-info__total">
                <p>Total To Be Paid</p>
                <p>${this.calculateRate()}</p>
              </div>
            </div>

            <p className='required'>* Required Fields</p>
          </Paper>
        </div>
        <div className="add-invoice-btn">
          <Button variant="fab" aria-label="Add" onClick={()=>{}}>
            <AddIcon/>
          </Button>
        </div>
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

export default connect(mapStateToProps)(Uploads)