import { getInitialData, saveCompany, saveInvoice } from '../utils/api'
import { receiveCompanies, addCompany} from '../actions/companies'
import { receiveInvoices, addInvoice } from '../actions/invoices'
import { showLoading, hideLoading } from 'react-redux-loading'

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ invoices, companies }) => {
        dispatch(receiveInvoices(invoices))
        dispatch(receiveCompanies(companies))
      })
      .finally(() => dispatch(hideLoading()))
  }
}

export const handleSaveInvoice = (invoice) => {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return saveInvoice(invoice)
    .then(invoice => {
      dispatch(addInvoice(invoice))
    })
    .finally(() => dispatch(hideLoading()))
  }
}

export const handleSaveCompany = (company) => {
  return (dispatch, getState) => {
    dispatch(showLoading())
    return saveCompany(company)
    .then(company => {
      dispatch(addCompany(company))
    })
    .finally(() => dispatch(hideLoading()))
  }
}