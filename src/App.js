import React, { Component } from 'react';
import Pagecontent from './page';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Button, Modal } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }


  handleShow = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleNewtab = () => {
    window.open(" ")

  }

  render() {
    return (
      <div style={{ width: "800px", height: "800px" }}>
        <div style={{ position: 'fixed' }}> <Button onClick={this.handleShow}>
          Launch demo modal
   </Button>

          <Button onClick={this.handleNewtab}>
            NewTab </Button>
            
            <PDFDownloadLink document={<Pagecontent />} fileName="Demo.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
</div>

        

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PDFViewer
              width="1000px" height="500px">
              <Pagecontent />
            </PDFViewer>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>



      </div>
    )
  }

}

export default App;
