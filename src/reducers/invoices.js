import {
  RECEIVE_INVOICES,
  ADD_INVOICE
} from '../actions/actionTypes'


const invoices = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_INVOICES :
      return {
        ...state,
        ...action.invoices
      }
    case ADD_INVOICE :
      return {
        ...state,
        [action.invoice.id]: action.invoice
      }
    default :
      return state
  }
}

export default invoices