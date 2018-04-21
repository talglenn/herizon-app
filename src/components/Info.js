import React from 'react';
import {PanelGroup} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';


class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          activeKey: '1'
        };
      }
    
      handleSelect(activeKey) {
        this.setState({ activeKey });
      }
      render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        <h1 className="info-header">About Us</h1>
                    
                        <p className="info-text">Herizon Medical Billing, LLC is an American owned and operated business that was founded in 2007. Our company offers billing, revenue cycle management, consulting, training, credentialing and many other provider related services. Our staff consists of experienced, knowledgeable billing executives who have worked in all areas of medicine. Their combined expertise has captured millions for medical providers across the United States of America.</p>
    
                        <p className="info-text">Our executives are experts on many different EMR/EHR and Practice Management Systems. So you will have a simple, worry-free transition from your current billing company to Herizon Medical Billing. If you do not have an EMR/EHR and Practice Management System, we will assist you in obtaining the system best suited for your practice without bankrupting you in the process.</p>
                        </div>
                        <div className="col-sm-6">
                            <h1 className="info-header">What We Do</h1>
                            
                            <p className="info-text">We are dedicated to delivering the most professional and comprehensive services available. Here are our core services:</p>
                            <PanelGroup
                                accordion
                                id="accordion-controlled-example"
                                activeKey={this.state.activeKey}
                                onSelect={this.handleSelect}
                            >
                            <Panel eventKey="1" >
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3" toggle>Billing</Panel.Title>
                                </Panel.Heading>
                                    <Panel.Body collapsible>Claim Creation</Panel.Body>
                                    <Panel.Body collapsible>Batch Creation & Transmission</Panel.Body>
                                    <Panel.Body collapsible>Claim Follow Up</Panel.Body>
                                    <Panel.Body collapsible>Posting</Panel.Body>
                                    <Panel.Body collapsible>Claim Appeal</Panel.Body>
                                    <Panel.Body collapsible>Reporting & Analysis</Panel.Body>
                                    <Panel.Body collapsible>Patient Statements</Panel.Body>
                            </Panel>
                            <Panel eventKey="2" >
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3" toggle>Training</Panel.Title>
                                </Panel.Heading>
                                    <Panel.Body collapsible>Provider Training</Panel.Body>
                                    <Panel.Body collapsible>Staff Training</Panel.Body>
                                    <Panel.Body collapsible>ICD 10 Training</Panel.Body>
                                    <Panel.Body collapsible>HIPAA Training</Panel.Body>
                                    <Panel.Body collapsible>Evaluation & Management Training</Panel.Body>
                                    <Panel.Body collapsible>Front Desk Training</Panel.Body>
                            </Panel>
                            <Panel eventKey="3">
                                <Panel.Heading>
                                    <Panel.Title componentClass="h3" toggle>Consulting & Credentialing</Panel.Title>
                                </Panel.Heading>
                                    <Panel.Body collapsible>Office Procedure Evaluation</Panel.Body>
                                    <Panel.Body collapsible>Staff Overview</Panel.Body>
                                    <Panel.Body collapsible>Office Set Up</Panel.Body>
                                    <Panel.Body collapsible>System Set Up</Panel.Body>
                                    <Panel.Body collapsible>Provider/Facilty Credentialing</Panel.Body>
                            </Panel>
                            </PanelGroup>
            
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
      }
}

export default Info;