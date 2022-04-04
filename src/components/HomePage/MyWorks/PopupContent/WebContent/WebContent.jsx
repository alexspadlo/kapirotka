import React from 'react';
import PropTypes from 'prop-types';
import s from './WebContent.scss';

class WebContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetCollapse: undefined,
            targetOn: undefined,
        }
        this.cumulativeOffset = this.cumulativeOffset.bind(this);
        this.scroolHandle = this.scroolHandle.bind(this);
    }
    
    cumulativeOffset(element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    }

    scroolHandle(id) {
        const myElement = document.querySelector(`#${id}`);
        const accordIon = document.querySelector('#accordion');
        const correctOffset = this.cumulativeOffset(myElement);
        accordIon.scrollTo({
            top: correctOffset.top - 80,
            behavior: 'smooth',
        });
    }

    render() {
        const { mainWorks } = this.props;
        const { targetCollapse, targetOn } = this.state;
        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                {mainWorks && mainWorks.length &&
                        <div className={s.popUp} id="accordion">
                            <span className={`${s.myClose} close`} onClick={() => this.props.handlePopupOverlay()}>&times;</span>
                            {mainWorks.map((wb, indwb) =>
                                <section key={`${wb.mainTitle}${indwb}`}>
                                    <h2 className={`h1 mb-2 ${wb.classTitle && wb.classTitle}`}>{wb.mainTitle}</h2>
                                    <hr className={`pb-0 ${wb.rightHr ? s.rightHr : `mb-3 ${s.hrLeft}`}`} />
                                    <h4 className={`pb-4 h5 ${s.h4Small} ${wb.classDescrip && wb.classDescrip}`}>{wb.descritpion}</h4>
                                    {wb.allWorks && wb.allWorks.map((cv, ind) =>
                                        <div key={`${cv.uniQueId}${ind}`} className={`${s.mainComponent} ${s[cv.uniQueId]} ${wb.allWorks.length === ind + 1 ? s.marginBottomcustom : 'mb-5'} ${targetCollapse === cv.uniQueId && targetOn == 'true' && s.autoHeight}`}>
                                            <div id={cv.uniQueId} className={`${s.bottomContainer} ${targetCollapse === cv.uniQueId && targetOn == 'true' && s.positionSmooth}`} onClick={() => {
                                                const getClickedDiv = document.querySelector(`#${cv.uniQueId}`);
                                                const att = getClickedDiv.getAttribute('aria-expanded');
                                                this.setState({
                                                    targetCollapse: cv.uniQueId,
                                                    targetOn: att
                                                }, () => {      
                                                    setTimeout(() => {
                                                        if (this.state.targetOn == 'true') {
                                                            this.scroolHandle(cv.uniQueId);
                                                        }
                                                    }, 400);
                                                });
                                            }} data-toggle="collapse" data-target={`#collapse${cv.uniQueId}`} aria-expanded="false" aria-controls={`collapse${cv.uniQueId}`}>
                                                <h2 className={`mb-0 ${s.h2Small} pl-4 float-left`}>{cv.workName}</h2>
                                        <h2 className={`mb-0 ${s.h2Small} pr-4 float-right`}>{targetCollapse === cv.uniQueId && targetOn == 'true' ? 'Shrink': 'Expand'} {targetCollapse === cv.uniQueId && targetOn == 'true' ? <i className="fas fa-chevron-circle-up"></i> : <i className="fas fa-chevron-circle-down"></i>}</h2>
                                            </div>
                                            <div className="collapse" data-parent="#accordion" id={`collapse${cv.uniQueId}`}>
                                                <div className={s.contentPopup}>
                                                    <img src={require(`../../../../../../static/${cv.bannerImage}`)} alt={cv.bannerImage} className={s.resizeImage} />
                                                    {cv.wNdescription &&
                                                    <div className="row mt-4">
                                                        <div style={cv.wNColStyle}>
                                                            <div dangerouslySetInnerHTML={{__html: cv.wNdescription}} />
                                                        </div>
                                                    </div>}
                                                    <div className={`row mt-4 ${s.clearDisplay}`}>
                                                        <div className="col" style={cv.styleColPallete}>
                                                            <h2 className="text-center">{cv.collorPallete.mainTitle}</h2>
                                                            {cv.collorPallete.description ? <div className="pt-2" dangerouslySetInnerHTML={{__html: cv.collorPallete.description}} /> : ''}
                                                            <div className={`row pt-4 ${s.textCenterSmall} ${s.clearDisplay}`}>
                                                                <div className="col">
                                                                    {cv.collorPallete.left &&
                                                                        cv.collorPallete.left.map((cpl, indcpl) =>
                                                                            <div key={`left${cpl.name}${indcpl}`} className="pb-3">
                                                                                <div className={s.colorRounded} style={{ border: `1px solid ${cpl.color === '#FFFFFF' ? '#000' : cpl.color}`, backgroundColor: `${cpl.color}` }}>&nbsp;</div>
                                                                                <p className="pt-3 mb-0">{cpl.color}</p>
                                                                                <p>{cpl.name}</p>
                                                                            </div>
                                                                        )}
                                                                </div>
                                                                <div className="col">
                                                                    {cv.collorPallete.right &&
                                                                        cv.collorPallete.right.map((cpr, indcpr) =>
                                                                            <div key={`right${cpr.name}${indcpr}`} className="pb-3">
                                                                                <div className={s.colorRounded} style={{ border: `1px solid ${cpr.color === '#FFFFFF' ? '#000' : cpr.color}`, backgroundColor: `${cpr.color}` }}>&nbsp;</div>
                                                                                <p className="pt-3 mb-0">{cpr.color}</p>
                                                                                <p>{cpr.name}</p>
                                                                            </div>
                                                                        )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col" style={cv.styleColTypography}>
                                                            <h2 className="text-center">{cv.typoGraphy.mainTitle}</h2>
                                                            {cv.typoGraphy.description ? <div className="pt-2" dangerouslySetInnerHTML={{__html: cv.typoGraphy.description}} /> : ''}
                                                            <div className={`row ${s.clearDisplay}`}>
                                                                <div className="col">
                                                                    {cv.typoGraphy.left &&
                                                                        cv.typoGraphy.left.map((ctl, indctl) =>
                                                                            <div key={`left${ctl.name}${indctl}`} className="pb-3">
                                                                                <h2 className={ctl.classes}>{ctl.type}</h2>
                                                                                <p className={ctl.sizeClass}>{ctl.size}</p>
                                                                                <p>{ctl.name}</p>
                                                                            </div>
                                                                        )}
                                                                </div>
                                                                <div className="col">
                                                                    {cv.typoGraphy.right &&
                                                                        cv.typoGraphy.right.map((ctr, indctr) =>
                                                                            <div key={`right${ctr.name}${indctr}`} className="pb-3">
                                                                                <h2 className={ctr.classes}>{ctr.type}</h2>
                                                                                <p className={ctr.sizeClass}>{ctr.size}</p>
                                                                                <p>{ctr.name}</p>
                                                                            </div>
                                                                        )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {cv.bannerSections &&
                                                        cv.bannerSections.map((bs, indbs) =>
                                                            <div key={`${bs.mainTitle}${indbs}`} className="row mt-4 pb-5" style={{ backgroundColor: `${bs.background ? bs.background : '#fff'}` }}>
                                                                <div className="col">
                                                                    <h2 className="mb-5 mt-5 text-center h1">{bs.mainTitle}</h2>
                                                                    <img src={require(`../../../../../../static/${bs.images}`)} alt={bs.images} className={s.resizeImage} />
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            )}
                        </div>
                    }
            </div>
        )
    }
}

export default WebContent;
