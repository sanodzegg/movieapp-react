import React from "react";

import "./Footer.css";

import { ReactComponent as Github } from '../../assets/icons/customSocial/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/customSocial/linkedin.svg';
import { ReactComponent as Facebook } from '../../assets/icons/customSocial/facebook.svg';

export default function Footer() {
  return (
    <div className="footerWrapper">
        <div className="mainFooterContent">
            <ul className="mfcCol">
                <li className="mfcCol listitem header">Information</li>
                <li className="mfcCol listitem">Image Licenses</li>
                <li className="mfcCol listitem">Contact Us</li>
                <li className="mfcCol listitem">Our Authors</li>
            </ul>
            <ul className="mfcCol">
                <li className="mfcCol listitem header">Discover</li>
                <li className="mfcCol listitem">All Reviews</li>
                <li className="mfcCol listitem">Author Picks</li>
                <li className="mfcCol listitem">New Reviews</li>
            </ul>
            <ul className="mfcCol">
                <li className="mfcCol listitem header">Community</li>
                <li className="mfcCol listitem social"><Github /> <a href="https://github.com/sanodzegg" target="_blank">Github</a></li>
                <li className="mfcCol listitem social"><Linkedin /> <a href="https://www.linkedin.com/in/giorgi-sanodze-a6002821a/" target="_blank">Linkedin</a></li>
                <li className="mfcCol listitem social"><Facebook /> <a href="https://www.facebook.com/sanodzeg/" target="_blank">Facebook</a></li>
            </ul>
        </div>
        <hr className="footerHr" />
        <div className="crSection">
            <span>Built by <a href="https://github.com/sanodzegg" target="_blank">Giorgi Sanodze</a> - Template design by <a href="https://www.studiocorvus.com/" target="_blank">Studio Corvus</a> - Powerd by <a href="https://webflow.com/" target="_blank">Webflow</a></span>
        </div>
    </div>
  );
}
