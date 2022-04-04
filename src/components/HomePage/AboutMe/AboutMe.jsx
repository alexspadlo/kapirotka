import React from 'react'
import alexImage from '../../../../static/heroAlexbanner.png'
import s from './AboutMe.scss'
import square from '../../../../static/square.png'

class AboutMe extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { aboutMe } = this.props
		return (
			<section id="aboutMe">
				<div className={`container-fluid p-0 ${s.containerBackground}`}>
					<div className="row d-table w-100 mr-0 ml-0 h-100">
						<div className={`col p-0 ${s.mobileContainer}`}>
							<img src={alexImage} alt="aleksandra spadlo" className="img-fluid" />
						</div>
						<div className={`d-table-cell position-relative mt-5 mr-5 ml-5 w-50 ${s.blockControl}`}>
							<div className={s.rightBlock}>
								<h2 className="h3 mb-4">{aboutMe && aboutMe.title && aboutMe.title}</h2>

								<div className="mt-2 font-weight-light">{aboutMe && aboutMe.message && <div dangerouslySetInnerHTML={{ __html: aboutMe.message }} />}</div>
								<p className="mb-0"><strong>{aboutMe && aboutMe.footerMessage && aboutMe.footerMessage}</strong></p>
							</div>
							<img className={`${s.newTry}`} src={square} alt="" />
						</div>
						<div className={`d-table-cell m-0 pb-4 w-50 ${s.leftContainer}`}></div>
					</div>
				</div>
				<div className="container-fluid p-0">
					<div className="row p-0 m-0">
						<div className={`col-12 p-0 ${s.borderCorrection} ${s.mobileContainer}`}>
							<img className="w-100 img-fluid" src={square} alt="" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutMe
