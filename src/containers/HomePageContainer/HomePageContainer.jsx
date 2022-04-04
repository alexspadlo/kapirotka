import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGitContent } from '../../actions';
import HomePage from '../../components/HomePage/HomePage';
// import loadingImg from '../../../static/loadingImage.gif';
import data from '../../../data/data.json'

class HomePageContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			retrievedObjet: [],
		};
	}

	componentDidMount() {
		this.props.getGitContent();
		console.log(data)
	}

	render() {
		return <HomePage retrievedObjet={data} />;
		// return (
		// 	<section className="w-100 text-center pt-5 mt-5">
		// 		<object alt="Loading" aria-label="Loading" className="mt-5" width="200" height="200" data={loadingImg} />
		// 	</section>
		// );
	}
}

HomePageContainer.propTypes = {
	getGitContent: PropTypes.func.isRequired,
};

HomePageContainer.defaultProps = {
	gitcontent: null,
};

function mapStateToProps(state) {
	return {
		gitcontent: state.get('gitcontent').toJS(),
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getGitContent,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
