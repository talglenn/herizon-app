import React from 'react';

const Bottom = () => {
    return (
        <div>
        <footer className="footer1">
                <div className="footer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xs-12">
                                <div className="footer-desc text-center">
                                    
                                    <p>
                                        <a href="/" rel="home" title="Super Dev Resources">Herizon Medical, LLC</a> offers wonderful service <br/>at a resonable price. <a href="/about/">Learn More</a>
                                    </p>
                                </div>
                            </div>
                            
                            <nav 
                            className="col-md-6">
                                <div className="input-group input-group-md">
                                    <input type="text" className="form-control" placeholder="Email Address"/>
                                    <button className="input-group-btn">Subscribe</button>
                                </div>
                            </nav>
                        </div> 
                    </div>
                </div> 
                <div className="footer-bottom">
                    <div className="container">
                        <div className="pull-left"> Copyright © <a href="">Tal Glenn</a>.  All right reserved.</div>
                        <div className="pull-right">
                            <ul className="social">
                                <li><a href="https://www.linkedin.com/in/herizon-medical-billing-llc-62379b1a"><i className="fa fa-linkedin-square"></i></a></li>
                                <li><a href="https://www.instagram.com/herizonmedicalbilling/"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
           </footer> 
        </div>
    );
}

export default Bottom;