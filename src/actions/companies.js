import {
  RECEIVE_COMPANIES,
  ADD_COMPANY
} from './actionTypes'

export const receiveCompanies = (companies) => {
  return {
    type: RECEIVE_COMPANIES,
    companies
  }
}

export const addCompany = (company) => {
  return {
    type: ADD_COMPANY,
    company
  }
}