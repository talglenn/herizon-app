import React from 'react';
import {Well} from 'react-bootstrap';


const Testimonials = () => {
    return (
        <div>
            <div className="container">
                <h1 className="test-header">Testimonials</h1>
                <div className="row">
                    <div className="col-sm-6 lead">
                        <p className="test-text">"Herizon Medical Billing, LLC has increased our collection rate from 68% to 92%. Our claims go out clean and as a result we have very little denials. Accounts receivables have been reduced to 30-60 days. Which is excellent. Outsourcing our billing has been a very positive experience."
                        </p>
                        <Well className="test-text">Vicki J. Daniel
                            <br/>
                            Office Manager
                            <br/>
                            Cornerstone Internal Medicine
                        </Well>
                    </div>
                    <hr/>
                    <br/>
                    <div className="col-sm-6 lead">
                        <p className="test-text">"Herizon Medical Billing, LLC has increased revenue for my practice with their exceptional insurance verification and account reviews. I recommend outsourcing your billing today."</p>
                        <br/>
                        <br/>
                        <Well className="test-text">Kimberlynn Richards, MD
                            <br/>
                            <br/>
                            Kimberlynn Richards, MD, PC
                        </Well>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Testimonials;