import React from 'react';
import PropTypes from 'prop-types';
import s from './PopupContent.scss';
import WebContent from './WebContent/WebContent';
import ArtContent from './ArtContent/ArtContent';

class PopupContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUpcontent: this.props.popUpcontent === 'fashion' ? 'fashion' : 'web',
            targetCollapse: undefined,
            targetOn: undefined,
        }
        this.escFunction = this.escFunction.bind(this);
    }

    escFunction(event) {
        if (event.keyCode === 27) {
            this.props.handlePopupOverlay()
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.escFunction, false);
    }


    render() {
        const { popUpcontent, mainWorks, artWorks } = this.props;
        return (
            <section>
                {popUpcontent === 'fashion' ? (
                    <ArtContent handlePopupOverlay={this.props.handlePopupOverlay} artWorks={artWorks}/>
                    ) : (
                    <WebContent handlePopupOverlay={this.props.handlePopupOverlay} mainWorks={mainWorks}/>
                )}
            </section>
        )
    }
}

export default PopupContent;
