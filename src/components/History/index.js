import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CustomSearch, CustomSelect } from '../CustomInput'
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'
import InvoiceCard from './invoiceCard'
import ModalCard from '../ModalCard'
import Settings from '@material-ui/icons/Settings'

import './style.css'


class History extends Component {
  state = {
    open: false,
    invoiceData: {},
    searchInput: '',
    sortInput: ''
  }

  handleOpen = (data) => {
    this.setState({
      open: true,
      invoiceData: data
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
      invoiceData: {}
    })
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelectChange = e => {
    this.setState({
      sortInput: e.target.value
    })
  }

  handleFilter = () => {
    const { invoicesArr } = this.props
    const { sortInput } = this.state

    if(sortInput === 'Requested') {
      return invoicesArr.filter((invoice) => {
        return invoice.status === 'Requested'
      })
    } else if(sortInput === 'Paid') {
      return invoicesArr.filter((invoice) => {
        return invoice.status === 'Paid'
      })
    } else if(sortInput === "Declined"){
      return invoicesArr.filter((invoice) => {
        return invoice.status === 'Declined'
      })
    } else {
      return invoicesArr
    }
  }

  render() {
    const { companies } = this.props
    return (
      <Paper className="history-container">
        <div className="filters-container">
          <div className="filters">
            <CustomSearch
              onChange={this.handleInputChange}
              name={this.state.searchInput}
              value={this.state.searchInput}
            />
            <CustomSelect
              name='Sort'
              onChange={this.handleSelectChange}
              defaultValue='Sort'
              values={['Requested', 'Paid', 'Declined' ]}
              value={this.state.sortInput}
            />
            <Settings/>
          </div>
        </div>
        <div className='invoice-container'>
          {this.handleFilter().map((invoice, i) =>  (
            <InvoiceCard
              key={i}
              invoiceData={invoice}
              company={companies[invoice.billTo]}
              openModal={this.handleOpen}
              closeModal={this.handleClose}
            />
          ))}
        </div>
        <Modal
          style={{position: 'relative'}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <ModalCard invoiceData={this.state.invoiceData} companies={companies} onClose={this.handleClose}/>
        </Modal>
      </Paper>
    )
  }
}

const mapStateToProps = ({invoices, companies}) => {
  return {
    companies,
    invoicesArr: Object.values(invoices).sort((a,b) => b.timestamp - a.timestamp )
  }
}

export default connect(mapStateToProps)(History)