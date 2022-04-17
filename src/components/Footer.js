import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="footer-container">
		<div></div>
		<div className="footer-right">
			<div className="footer-right-1">
				Go to page
				<div className="footer-navbar">
					<Link className="footer-navbar-item" to="/">
						Home
					</Link>
					<Link className="footer-navbar-item" to="/about">
						About
					</Link>
				</div>
			</div>
			<div className="footer-right-2">
				Send us a message
				<div>
					<a href="mailto: test@gmail.com">
						<button>Send an email</button>
					</a>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Footer