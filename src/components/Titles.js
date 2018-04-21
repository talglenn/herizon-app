import React from 'react';
import logo from '../img/logo.PNG';
import {Jumbotron} from 'react-bootstrap';

const Titles = () => {
    return (
        <div>
            <Jumbotron jumbotronfluid="true">
            <img src={logo} className="img-fluid" alt="Logo"/>
                <div className="container">   
                </div>
            </Jumbotron>
            <hr className="jumbo__border"/>
        </div>
    );
}

export default Titles;