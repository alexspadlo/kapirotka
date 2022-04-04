import React from 'react';
import s from './MyWorks.scss';
import PopupContent from './PopupContent/PopupContent';

class MyWorks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			overlayActive: false,
			popUpcontent: undefined,
		}
		this.handlePopupOverlay = this.handlePopupOverlay.bind(this);
		this.equalHeights = this.equalHeights.bind(this);
	}

	handlePopupOverlay() {
		this.setState({
			overlayActive: !this.state.overlayActive,
		}, () => {
			const body = document.querySelector('body');
			if (this.state.overlayActive) {
				body.style.overflow = 'hidden';
			} else {
				body.style.overflow = 'initial';
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.equalHeights);
	}

	componentDidMount() {
		if (window.outerWidth && window.outerWidth > 499) {
			window.addEventListener('resize', this.equalHeights);
			setTimeout(() => {
				this.equalHeights();
			}, 600);
		}
	}

	equalHeights() {
		let findClass = document.getElementsByClassName('overflow-hidden');
		let tallest = 0;
		if(findClass){
			for (let i = 0; i < findClass.length; i++) {
				const ele = findClass[i];
				const eleHeight = ele.offsetHeight;
				tallest = (eleHeight > tallest ? eleHeight : tallest);
			}
			for (let i = 0; i < findClass.length; i++) {
				findClass[i].style.height = `${tallest}px`;
			}
		}
	}

	render() {
		const { myWorks, mainWorks } = this.props;
		const { overlayActive } = this.state;
		return (
			<div id="myWorks" className={`container-fluid ${s.containerBackground}`}>
				<div className="row">
					<div className={`col text-right ${s.paddingControl}`}>
						<h3 className={`${s.stencil} pt-4 pb-3 px-4`}>{myWorks && myWorks.title}</h3>
					</div>
				</div>
				<div className="row">
					{myWorks && myWorks.cards &&
						myWorks.cards.map((cv, ind) =>
							<section className="container-fluid" key={`socialId${ind}`}>
								{ind === 0 ?
									<div className="row">
										<div className={`col p-0 m-0 ${s.columControl} ${s.mywebBackground}`}>
										</div>
										<div className={`col p-0 m-0 position-relative ${s.columControl}`}>
											<div className={`${s.mysecondContainer}`}>
												<h2 className="h2 pb-3">{cv.cardTitle && cv.cardTitle}</h2>
												<p className={s.customPadding}>{cv.cardDescrip}</p>
												<section className={s.buttonWrap}>
													<a
														id={cv.target === 'web' ? 'mainidweb' : ''}
														onClick={() => {
															this.setState({
																popUpcontent: cv.target,
															}, () => {
																this.handlePopupOverlay();
															})
														}}
														className={`${s.mainButton} ${s.buttonRec} mb-4`}>
														<svg>
															<rect x="0" y="0" fill="none" width="100%" height="100%" />
														</svg>{cv.buttonDescrip && cv.buttonDescrip}
													</a>
												</section>
											</div>
										</div>
									</div>
									:
									<div className="row">
										<div className={`col p-0 m-0 ${s.columControl} ${s.mobileYes} ${s.myArtBackground}`}>
										</div>
										<div className={`col p-0 m-0 position-relative ${s.columControl}`}>
											<div className={`${s.mysecondContainer} pl-5`}>
												<h2 className="h2 pb-3">{cv.cardTitle && cv.cardTitle}</h2>
												<p className={s.customPadding}>{cv.cardDescrip}</p>
												<section className={s.buttonWrap}>
													<a
														id={cv.target === 'web' ? 'mainidweb' : ''}
														onClick={() => {
															this.setState({
																popUpcontent: cv.target,
															}, () => {
																this.handlePopupOverlay();
															})
														}}
														className={`${s.mainButton} ${s.buttonRec} mb-4`}>
														<svg>
															<rect x="0" y="0" fill="none" width="100%" height="100%" />
														</svg>{cv.buttonDescrip && cv.buttonDescrip}
													</a>
												</section>
											</div>
										</div>
										<div className={`col p-0 m-0 ${s.columControl} ${s.mobileNo} ${s.myArtBackground}`}>
										</div>
									</div>
								}
							</section>
						)}
					{overlayActive && (
						<PopupContent
							mainWorks={mainWorks}
							artWorks={this.props.artWorks}
							overlayActive={this.state.overlayActive}
							handlePopupOverlay={this.handlePopupOverlay}
							popUpcontent={this.state.popUpcontent}
						/>
					)}
				</div>
			</div>
		)
	}
}

export default MyWorks;
