let companies = {
  "schneider": {
    id: 'schneider',
    name: 'Schneider National Carrier',
    address: {
      streetNumber: '1234',
      streetName: 'ShipStuff St.',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '99999'
    },
    phone: '424 424 4555'
  },
  "amazon": {
    id: 'amazon',
    name: 'Amazon Shipping Service',
    address: {
      streetNumber: '5678',
      streetName: 'Boxes Ave.',
      city: 'San Diego',
      state: 'CA',
      zipCode: '99999'
    },
    phone: '424 424 4444'
  }
}

let invoices = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    invoiceNumber: 8082,
    billTo: 'schneider',
    timestamp: 1467166872634,
    status: 'requested',
    rate: 3,
    loadN: 12455,
    type: 'V',
    loadLength: 53,
    totalAmount: 125.04,
    totalPaid: 105.04
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    invoiceNumber: 802,
    billTo: 'schneider',
    timestamp: 1467166872634,
    status: 'paid',
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
    timestamp: 1467166872634,
    status: 'declined',
    rate: 3,
    loadN: 12455,
    type: 'V',
    loadLength: 53,
    totalAmount: 100,
    totalPaid: 0
  }
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const generateInvoiceId = () => {
  (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
}

export function _getCompanies () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...companies}), 1000)
  })
}

export function _getInvoices () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...invoices}), 1000)
  })
}

function formatInvoice ({ billTo, address, rate, loadN, type, total, length, }) {
  return {
    id: generateUID(),
    invoiceNumber: generateInvoiceId(),
    billTo: billTo,
    timestamp: Date.now(),
    status: 'requested',
    rate: rate,
    loadN: loadN,
    type: type,
    loadLength: length,
    totalAmount: total,
    totalPaid: 0
  }
}

function formatCompany ({ id, name, address, phone }) {
  return {
    id: id,
    name: name,
    address: address,
    phone: phone,
  }
}

export function _saveInvoice (invoice) {
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

export function _saveCompany (company) {
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