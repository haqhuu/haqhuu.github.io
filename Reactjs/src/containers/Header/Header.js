import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from "../../utils"
import { FormattedMessage } from 'react-intl';


class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.changeLanguageRedux(language)
    }

    render() {
        const { processLogout, language, userInfo } = this.props;
        console.log('chwck user in4:', userInfo)

        return (
            <div className="header-container">
                {/*  navigator bar */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className='languages'>
                    <span className='welcome' >
                        <FormattedMessage id="home-header.welcome" />, {
                            userInfo && userInfo.firstName ? " " + userInfo.firstName : " "
                        }!
                    </span>
                    <span className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} onClick={() =>
                        this.handleChangeLanguage(LANGUAGES.VI)}>
                        VI</span>
                    <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() =>
                        this.handleChangeLanguage(LANGUAGES.EN)}>
                        EN</span>
                    {/* logout button*/}
                    <div className="btn btn-logout" onClick={processLogout} title="Logout">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>


            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageRedux: (language) => dispatch(actions.changeLanguage(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
