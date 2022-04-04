import React from 'react'
import PropTypes from 'prop-types'
import s from './Navigation.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class Navigation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contactActive: false,
			copied: false,
			copiedEmail: false
		}
		this.handleClickOutside = this.handleClickOutside.bind(this)
		this.setWrapperRef = this.setWrapperRef.bind(this)
	}

	componentDidMount() {
		$('[data-toggle="tooltip"]').tooltip()
		document.addEventListener('mousedown', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside)
	}

	setWrapperRef(node) {
		this.wrapperRef = node
	}

	handleClickOutside(event) {
		const id = event.target.id
		const name = event.target.name
		const target = event.target
		if (this.wrapperRef && !this.wrapperRef.contains(target)) {
			if (target && name !== 'buttonToggle') {
				const { contactActive } = this.state
				if (contactActive) {
					if (id !== 'DontPlease') {
						this.setState({
							contactActive: false
						})
					}
				}
			}
		}
	}

	render() {
		const { navItems } = this.props
		const { contactActive } = this.state

		return (
			<nav className={s.topnav} id="myTopnav">
				{navItems &&
					<section className={`position-relative ml-5`}>
						<p className={s.stencil}>{navItems.title}</p>
						<div className={s.rightSection}>
							{navItems.socialNetwork && navItems.socialNetwork.length > 0 &&
								navItems.socialNetwork.map((social, ind) => (
									<a className={`${s.socialIcons} ${s.noMobile}`} key={`socialId${ind}`} href={social.url} target="_blank">
										<i className={`text-dark ${social.icon}`}></i>
									</a>
								))}
							<button name="buttonToggle" onClick={() => this.setState({ contactActive: !contactActive })} className={`${s.mybutton} ${s.removeButton}`} type="button" >{
								navItems.action.title}</button>
							<button name="buttonToggle" onClick={() => { this.setState({ contactActive: !contactActive }) }} className={`${s.toggleButton}`} type="button" ><i id="DontPlease" onClick={() => { this.setState({ contactActive: !contactActive }) }} className="fas pt-2 fa-bars" /></button>
						</div>
						<div ref={this.setWrapperRef} className={`${s.contactSection} ${contactActive ? '' : 'd-none'}`}>
							<h3
								onClick={() => {
									const wholeWidth = window.innerWidth
									if (wholeWidth <= 700) {
										this.setState({
											contactActive: !contactActive
										}, () => {
											window.location.href = `mailto:${navItems && navItems.contactMe && navItems.contactMe.emailAddress && navItems.contactMe.emailAddress}`
										})
									}
								}}
								className="h5 mb-0">
								<span
									data-toggle="tooltip"
									title="Click here to email me :)"
									onClick={() => {
										this.setState({
											contactActive: !contactActive
										}, () => {
											window.location.href = `mailto:${navItems && navItems.contactMe && navItems.contactMe.emailAddress && navItems.contactMe.emailAddress}`
										})
									}}
									className={s.contactmeLinks}>
									<i className="fas fa-envelope-open-text"></i> &nbsp; {navItems && navItems.contactMe && navItems.contactMe.emailAddress && navItems.contactMe.emailAddress}
								</span>
								<span className={`float-right ${s.noMobile}`}>
									<CopyToClipboard text={navItems && navItems.contactMe && navItems.contactMe.emailAddress && navItems.contactMe.emailAddress}
										onCopy={() => this.setState({ copiedEmail: true }, () => setTimeout(() => {
											this.setState({
												contactActive: !contactActive,
												copiedEmail: false
											})
										}, 1000))}>
										{!this.state.copiedEmail ? <span data-toggle="tooltip" title="Click here to copy."><i className="fas fa-copy" /></span> : <span><i className={`${s.successCheck} fas fa-check-circle`} /></span>}
									</CopyToClipboard>
								</span>
							</h3>
							<section className={s.mobileContainer}>
								{navItems.socialNetwork && navItems.socialNetwork.length > 0 &&
									navItems.socialNetwork.map((social, ind) => (
										<a className={s.socialIcons} onClick={() => this.setState({ contactActive: !contactActive })} key={`socialId${ind}`} href={social.url} target="_blank">
											{social.icon === 'instagram' ?
												<i className={`fa-2x fab fa-instagram`} />
												:
												<i className={`${social.icon}`} />
											}
										</a>
									))}
							</section>
						</div>
					</section>}
			</nav>
		)
	}
}

Navigation.propTypes = {
	navigation: PropTypes.func,
}

export default Navigation
