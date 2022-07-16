import { AnyAaaaRecord } from "dns";
import * as React from "react";
import { Link } from "react-router-dom";

function Footer(props : any)
{
    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        {/* <li><Link to="/menu">Menu</Link></li> */}
                        <li><Link to="/contacts">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              <i className="fa fa-phone fa-lg"></i>: +7 (965) 228-83-55<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:archeosAnacritis@gmail.com">
                      archeosAnacritis@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href="https://github.com/archeoss"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-telegram" href="https://t.me/archeoss"><i className="fa fa-telegram"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/Archeos"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.instagram.com/archeoss"><i className="fa fa-instagram"></i></a>
                        {/* <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a> */}
                        {/* <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a> */}
                        <a className="btn btn-social-icon" href="mailto:archeosAnacritis@gmail.co"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Created under "THE BEER-WARE LICENSE", 2022, Archeoss</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;