import React from 'react'
import s from './ContactMe.scss'

class ContactMe extends React.Component {
	render() {
		return (
			<div className={`container-fluid ${s.mainContainer}`}>
				<div className="row p-4">
					<div className="col-11 p-0 m-auto text-center">
						<p className={s.copyRight}>Copyright © {new Date().getFullYear()} Aleksandra Spadlo</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactMe
