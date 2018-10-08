import React from 'react'
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FolderIcon from '@material-ui/icons/Folder';

class Dropzone extends React.Component {
  state = {
	files: []
  }

  addFile = (file, text) => {
	this.setState({ files: [...this.state.files, file] })
  }

  render() {
	return (
	  <div>
		<StyledDropZone onDrop={this.addFile} />
			<List dense={false} className='file-list'>
		  {
			this.state.files.map(file =>
				  <ListItem className="file-item">
					<ListItemIcon>
					  <FolderIcon />
					</ListItemIcon>
					<ListItemText
						className="file-item"
					  primary={file.name}
					  secondary={`[${file.type}]`}
					/>
				  </ListItem>
			)
		  }
			</List>
	  </div>
	);
  }
}

export default Dropzone