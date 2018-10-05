import {
  RECEIVE_INVOICES,
  ADD_INVOICE
} from './actionTypes'


export const receiveInvoices = (invoices) => {
  return {
    type: RECEIVE_INVOICES,
    invoices
  }
}

export const addInvoice = (invoice) => {
  return {
    type: ADD_INVOICE,
    invoice
  }
}



