import React from 'react';
import {Button} from 'react-bootstrap';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class Contact extends React.Component {
    constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
      
    };

  }
  
  

      getNameValidation() {
        const length = this.state.name.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }

      getEmailValidation() {
        const length = this.state.name.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }

      getPhoneValidation() {
        const length = this.state.name.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }
    
      handleChange(e) {
        this.setState({ name: e.target.value });
        this.setState({ email: e.target.value });
        this.setState({ phone: e.target.value });
        this.setState({ message: e.target.value });
      }

      render(){
    
          return (
            <div>
            <div className="container">
            <h1 className="cont-header">Current or Prospective Clients</h1>
                <hr/>
                <h3 className="cont-secheader">Please contact us for a free consultation.</h3>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <form>
                        <FormGroup
                        controlId="name"
                        validationState={this.getNameValidation()}
                        >
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup
                        controlId="email"
                        validationState={this.getEmailValidation()}
                        >
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                type="email"
                                value={this.state.value}
                                placeholder="Enter email"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup controlId="message">
                            <ControlLabel>Message</ControlLabel>
                            <FormControl 
                                type="message"
                                componentClass="textarea"
                                placeholder="Enter your message here.." 
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <Button type="submit" className="submit-btn">Submit</Button>
                    </form>
                    </div>
                </div>
            </div>
            <hr/>
            <br/>
     
        </div>
          );
      }

}






export default Contact;