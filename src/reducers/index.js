import { combineReducers } from 'redux'
import invoices from './invoices'
import companies from './companies'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  invoices,
  companies,
  loadingBar: loadingBarReducer
})