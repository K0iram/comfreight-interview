let companies = {
  "schneider": {
    id: 'schneider',
    name: 'Schneider National Carrier',
    address: '245 Monrdth Ave, Sacremento CA 10029',
    phone: '4244244555'
  },
  "amazon": {
    id: 'amazon',
    name: 'Amazon Shipping Service',
    address: '245 Monrdth Ave, Sacremento CA 10029',
    phone: '4244244444'
  }
}

let invoices = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    invoiceNumber: 8082,
    billTo: 'schneider',
    timestamp: 1538806606146,
    status: 'Requested',
    rate: 3,
    loadN: 12455,
    type: 'V',
    loadLength: 53,
    totalAmount: 125.04,
    totalPaid: 105.04
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    invoiceNumber: 8028,
    billTo: 'schneider',
    timestamp: 1538806606146,
    status: 'Paid',
    rate: 3,
    loadN: 12455,
    type: 'V',
    loadLength: 53,
    totalAmount: 300,
    totalPaid: 0
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    invoiceNumber: 4032,
    billTo: 'amazon',
    timestamp: 1538806606146,
    status: 'Declined',
    rate: 3,
    loadN: 12455,
    type: 'V',
    loadLength: 53,
    totalAmount: 100,
    totalPaid: 0
  }
}

const generateUID = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const generateInvoiceId = () => {
  return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
}

export const _getCompanies = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({...companies}), 1000)
  })
}

export const _getInvoices = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res({...invoices}), 1000)
  })
}

const formatType = (type) => {
  if(type === 'Dry Van (V)') {
    return 'V'
  } else if(type === 'Box Truck (B)') {
    return 'B'
  } else {
    return 'F'
  }
}

const formatInvoice = (invoice) => {
  return {
    id: generateUID(),
    invoiceNumber: generateInvoiceId(),
    billTo: invoice.billTo,
    timestamp: Date.now(),
    status: 'Requested',
    rate: invoice.rate,
    loadN: invoice.loadN,
    type: formatType(invoice.type),
    loadLength: invoice.loadLength,
    totalAmount: invoice.totalAmount,
    totalPaid: 0
  }
}

const formatCompany = (company) => {
  return {
    id: company.id,
    name: company.name,
    address: company.address,
    phone: company.phone,
  }
}

export const _saveInvoice = (invoice) => {
  return new Promise((res, rej) => {
    const formattedInvoice = formatInvoice(invoice);

    setTimeout(() => {
      invoices = {
        ...invoices,
        [formatInvoice.id]: formattedInvoice
      }
      res(formattedInvoice)
    }, 1000)
  })
}

export const _saveCompany = (company) => {
  return new Promise((res, rej) => {
    const formattedCompany = formatCompany(company)

    setTimeout(() => {
      companies = {
        ...companies,
        [company.id]: formattedCompany
      }
      res(formattedCompany)
    }, 1000)
  })
}