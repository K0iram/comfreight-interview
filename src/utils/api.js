import {
  _getCompanies,
  _getInvoices,
  _saveInvoice,
} from './_DATA'

export const getInitialData = () => {
  return Promise.all([
    _getCompanies(),
    _getInvoices()
  ]).then(([companies, invoices]) => ({
    companies,
    invoices
  }))
}

export const saveInvoice = (invoice) => {
  return _saveInvoice(invoice)
}

export const saveCompany = (company) => {
  return _saveInvoice(company)
}