import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';
import AboutMe from './AboutMe/AboutMe';
import MyWorks from './MyWorks/MyWorks';
import ContactMe from './ContactMe/ContactMe';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicTab: undefined,
			heroBanner: undefined,
			aboutMe: undefined,
			contactMe: undefined,
			myWorks: undefined,
			navItems: undefined,
			mainWorks: undefined,
			artWorks: undefined,
		};
	}

	componentDidMount(){
		const { retrievedObjet } = this.props
		// const { content } = this.props.retrievedObjet;
		// let conversao = atob(content);
		// if (conversao.slice(0,1) == '"') {
		// 	conversao = JSON.parse(conversao.slice(1,-1));
		// } else {
		// 	conversao = JSON.parse(conversao);
		// }
		this.setState({
			navItems: retrievedObjet.navigation,
			heroBanner: retrievedObjet.heroBanner,
			aboutMe: retrievedObjet.aboutMe,
			myWorks: retrievedObjet.myWorks,
			contactMe: retrievedObjet.contactMe,
			mainWorks: retrievedObjet.mainWorks,
			artWorks: retrievedObjet.artWorks,
		}, () => {
			const link = window.location.href
			if(link.includes(`?portfolio`)){
				setTimeout(() => {
					const buttonweb = document.querySelector('#mainidweb')
					buttonweb.click()
				}, 600)
			}
		})
	}
	
	render() {
		return (
			<section>
				<Navigation navItems={this.state.navItems} />
				<AboutMe aboutMe={this.state.aboutMe} />
				<MyWorks artWorks={this.state.artWorks} myWorks={this.state.myWorks} mainWorks={this.state.mainWorks} />
				<ContactMe contactMe={this.state.contactMe} />
			</section>
		);

	}
}

HomePage.propTypes = {
	retrievedObjet: PropTypes.objectOf(PropTypes.any),
};

HomePage.defaultProps = {
	retrievedObjet: [],
};

export default HomePage;
