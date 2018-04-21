import React from 'react';
import {Button, Modal} from 'react-bootstrap';

class MoreInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
        }
    
        handleShow() {
        this.setState({ show: true });
        }
    

    render(){

        return(
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">

                            <Button className="btn-contact"  bsSize="large" onClick={this.handleShow}>
                            Contact Us!
                            </Button>

                            <Modal className="modal-container" show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header>
                                <Modal.Title><h3>Contact Info</h3></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>Mailing</h4>
                                <hr />
                                <p>PO Box 597</p>
                                <p>Lithia Springs, Georgia 30122</p>
                                <p>info@herizonmedicalbilling.com</p>
                                <p>support@herizonmedicalbilling.com</p>
                                <p>Tel (855) 879-3732</p>
                                <p>Fax (706) 969-7635</p>

                                <h4>Opening Hours</h4>
                                <hr />
                                <p>Mon - Thurs: 9am - 5pm</p>
                                <p>Fri: 9am - 3pm</p>
                                <p>Sat - Sun: Closed</p>
                                                              
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                            </Modal>   
                        
                        </div>
                    </div>
                </div>
            </div>





        );
    }



};

export default MoreInfo;