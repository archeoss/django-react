import * as React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props: any) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contacts</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contacts</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>My contacts</h5>
                    <address>
                    <i className="fa fa-phone"></i>: +7 (965) 228-83-55<br />
                    <i className="fa fa-envelope"></i>: <a href="mailto:archeosAnacritis@gmail.com">archeosAnacritis@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Another contacts</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+79652288355"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="https://t.me/archeoss"><i className="fa fa-telegram"></i> TG </a>
                        <a role="button" className="btn btn-success" href="mailto:archeosAnacritis@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;