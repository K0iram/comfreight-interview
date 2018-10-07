import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import { CustomSelect } from '../CustomInput'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'


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
        <h4>Upload you documents*</h4>
        <div className="document-upload__container">
          <div className="document-upload">
            <FormControl aria-describedby="component-helper-text" className="file-input">
              <Input id="component-helper" type="file" value='' onChange={this.onFileLoad} />
            </FormControl>
            <FormControl>
              <CustomSelect
                defaultValue='Category'
                onChange={this.props.onChange}
                name={this.props.value}
                value={this.props.value}
                values={this.selectValues}
              />
            </FormControl>
          </div>
          {this.state.addDoc &&
            <div className='document-upload'>
              <FormControl aria-describedby="component-helper-text" className="file-input">
                <Input id="component-helper" type="file" value='' onChange={this.onFileLoad} />
              </FormControl>
              <FormControl>
                <CustomSelect
                  defaultValue='Category'
                  onChange={this.props.onChange}
                  name={this.props.value}
                  value={this.props.value}
                  values={this.selectValues}
                />
              </FormControl>
            </div>
          }
        </div>
        <div className="doc-add">
          <IconButton aria-label="Add" onClick={this.addDoc}>
            <AddIcon />
          </IconButton>
        </div>
      </div>
    )
  }
}

export default FileUpload