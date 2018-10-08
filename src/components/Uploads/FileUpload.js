import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import { CustomSelect } from '../CustomInput'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Dropzone from './Dropzone';

import './style.css'


class FileUpload extends Component {
  state = {
    addDoc: false
  }

  addDoc = () => {
    this.setState({addDoc: !this.state.addDoc})
  }

  selectValues = [ 'Invoice', 'B.O.L', 'Licence' ]

  render() {
    return (
      <div className="doc-detail__uploads">
        <div className="document-upload__container">
          <div className="document-upload">
            <Dropzone/>
          </div>
        </div>
      </div>
    )
  }
}

export default FileUpload