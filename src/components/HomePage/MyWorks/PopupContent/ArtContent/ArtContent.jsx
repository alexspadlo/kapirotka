import React from 'react'
import s from './ArtContent.scss'

class ArtContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: 'li0',
        }
    }

    render() {
        const { artWorks } = this.props
        const { activeList } = this.state

        $('.carousel') && $('.carousel').carousel({ interval: false })

        return (
            <div id="pop-up-one" className={`${s.popUpOverlay} ${s.popUpOverlaytarget}`}>
                <div className={s.popUp}>
                    <span className={`close ${s.myClose}`} onClick={() => this.props.handlePopupOverlay()}>&times;</span>
                    <div className={`row pt-5 pb-5 m-0 ${s.removeMobile}`}>
                        <div className="col-11 m-auto pt-4 text-right">
                            <h2 className="h1">Art Design</h2>
                            <hr className="float-right mb-0 pb-0" />
                        </div>
                    </div>
                    <div className={`row pb-5 m-0 ${s.removeMobile}`}>
                        <div className="col-11 p-0 m-auto">
                            <div className="row p-0 m-0">
                                {artWorks && artWorks.length && artWorks.map((cv, ind) => (
                                    <div key={`artWork${ind}`} className="col position-relative">
                                        <section className={s.buttonWrap}>
                                            <a
                                                id={`li${ind}`}
                                                onClick={() => this.setState({
                                                    activeList: `li${ind}`,
                                                })}
                                                href={`#${cv.title}`} data-toggle="tab"
                                                className={`${s.mainButton} ${activeList === `li${ind}` ? s.mainButtonActive : ''} ${s.buttonRec}`}>
                                                <svg>
                                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                                </svg>{cv.title}
                                            </a>
                                        </section>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-8 p-0 m-auto d-table ${s.removeMobile}`}>
                            <div className="tab-content d-table-cell align-middle p-5">
                                {artWorks && artWorks.length > 0 && artWorks.map((av, ix) => (
                                    <div key={`imagesArt${ix}`} className={`tab-pane ${ix === 0 ? 'active' : ''}`} id={av.title}>
                                        {av.images && av.images.length > 1 ?
                                            <div id={`mainCarousel${ix}`} className={`${s.carouselSpec} carousel slide`} data-ride="carousel">
                                                <div className="carousel-inner pl-5 pr-5">
                                                    {av.images && av.images.length && av.images.map((img, iImg) => (
                                                        <div key={`img${iImg}`} className={`carousel-item ${iImg === 0 ? 'active' : ''}`}>
                                                            {av.title === 'Motion' ? (
                                                                <video autoPlay loop className="d-block w-100">
                                                                    <source src={require(`../../../../../../static/${img.data}`)} type="video/mp4" />
                                                                </video>
                                                            ) :
                                                                <img className="d-block w-100" src={require(`../../../../../../static/${img.data}`)} alt={img.data} />
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                                <a className={`${s.carouseControl} ${s.carouselPrev} carousel-control-prev`} href={`#mainCarousel${ix}`} role="button" data-slide="prev">
                                                    <span className={`carousel-control-prev-icon ${s.controlLeft}`} aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className={`${s.carouseControl} ${s.carouselNext} carousel-control-next`} href={`#mainCarousel${ix}`} role="button" data-slide="next">
                                                    <span className={`carousel-control-next-icon ${s.controlRight}`} aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                            :
                                            <section className="w-100">
                                                {av.images && av.images.length && av.images.map((img, iImg) => (
                                                    <section className="w-100" key={`img${iImg}`}>
                                                        {av.title === 'Motion' ? (
                                                            <video autoPlay loop className="d-block w-100">
                                                                <source src={require(`../../../../../../static/${img.data}`)} type="video/mp4" />
                                                            </video>
                                                        ) :
                                                            <img className="d-block w-100" src={require(`../../../../../../static/${img.data}`)} alt={img.data} />
                                                        }
                                                    </section>
                                                ))}
                                            </section>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`col pb-5 ${s.mobileOnly}`}>
                            <span className={`close ${s.myCloseMobile}`} onClick={() => this.props.handlePopupOverlay()}>&times;</span>
                            {artWorks && artWorks.length && artWorks.map((av, ix) => (
                                <div key={`imagesArt${ix}`} id={`mobile${av.title}`}>
                                    <h2 className={`h2 pt-5 text-center pb-3 ${s.titleMobile}`}>{av.title}</h2>
                                    {av.images && av.images.length > 1 ?
                                        <div id={`mobileCarousel${ix}`} className={`${s.carouselSpec} carousel slide`} data-ride="carousel">
                                            <div className="carousel-inner pl-5 pr-5">
                                                {av.images && av.images.length && av.images.map((img, iImg) => (
                                                    <div key={`img${iImg}`} className={`carousel-item ${iImg === 0 ? 'active' : ''}`}>
                                                        {av.title === 'Motion' ?
                                                            <video playsInline autoPlay loop className="d-block w-100">
                                                                <source src={require(`../../../../../../static/${img.data}`)} type="video/mp4" />
                                                            </video>
                                                            :
                                                            <img className="d-block w-100" src={require(`../../../../../../static/${img.data}`)} alt={img.data} />
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                            <a className={`${s.carouseControl} ${s.carouselPrev} carousel-control-prev`} href={`#mobileCarousel${ix}`} role="button" data-slide="prev">
                                                <span className={`carousel-control-prev-icon ${s.controlLeft}`} aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className={`${s.carouseControl} ${s.carouselNext} carousel-control-next`} href={`#mobileCarousel${ix}`} role="button" data-slide="next">
                                                <span className={`carousel-control-next-icon ${s.controlRight}`} aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                        :
                                        <section className="w-100">
                                            {av.images && av.images.length && av.images.map((img, iImg) => (
                                                <section className="w-100" key={`img${iImg}`}>
                                                    {av.title === 'Motion' ?
                                                        <video playsInline autoPlay loop className="d-block w-100">
                                                            <source src={require(`../../../../../../static/${img.data}`)} type="video/mp4" />
                                                        </video>
                                                        :
                                                        <img className="d-block w-100" src={require(`../../../../../../static/${img.data}`)} alt={img.data} />
                                                    }
                                                </section>
                                            ))}
                                        </section>
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtContent;
