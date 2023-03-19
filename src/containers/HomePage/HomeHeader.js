import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";
import { withRouter } from 'react-router';

import { changeLanguageApp } from '../../store/actions';


class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }
    returnHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)

        }
    }
    render() {
        let language = this.props.language;
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            {/* <i className="fas fa-bars"></i> */}
                            <div className='header-logo' onClick={() => this.returnHome()}></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                                <div><FormattedMessage id="home-header.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.medical-facility" /></b></div>
                                <div><FormattedMessage id="home-header.clinic-hospital" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div><FormattedMessage id="home-header.good-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="home-header.checkup-package" /></b></div>
                                <div><FormattedMessage id="home-header.health-check" /></div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div
                                className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                            </div>
                            <div
                                className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner === true &&
                    <div className='home-header-banner '>
                        <div className='content-up'>
                            <div className='title1'><FormattedMessage id="banner.title1" /></div>
                            <div className='title2'><FormattedMessage id="banner.title2" /></div>
                            <div className='search'>
                                <i className='fas fa-search'></i>
                                <input type='text' placeholder='Tìm chuyên khoa khám bệnh ...' />
                            </div>
                        </div>
                        <div className='content-down'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='far fa-hospital'></i></div>
                                    <div className='text-child'><FormattedMessage id="options.specialist-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="far fa-phone-rotary"></i></div>
                                    <div className='text-child'><FormattedMessage id="options.remote-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="far fa-books-medical"></i></div>
                                    <div className='text-child'><FormattedMessage id="options.general-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fal fa-microscope"></i></div>
                                    <div className='text-child'><FormattedMessage id="options.medical-test" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fal fa-tooth"></i></div>
                                    <div className='text-child'><FormattedMessage id="options.dental-examination" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="far fa-heartbeat"></i></div>
                                    <div className='text-child'><FormattedMessage id="options.mental-health" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
