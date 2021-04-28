import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

export default () => {
    const { t } = useTranslation();
    const usi = "Università della Svizzera italiana (USI)";
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img src={require('../../assets/images/photo.jpg')} alt="Profile"/>
            </div>
            <div className="sidebar-bottom">
                <label>Eliã Rafael de Lima Batista</label>
                <label>{t("researcher")}</label>
                <label>{"Computer Systems Institute"}</label>
                <label>{"Faculty of Informatics"}</label>
                <label>{usi}</label>
                <div>
                <div className="sidebar-bottom-item">
                        <a href="https://www.usi.ch/en/university/where-to-find-us/lugano-east-campus" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/images/location.svg')} alt="Address"/>
                            <div>
                                <label>USI - Lugano - Campus Est</label>
                                <label>Via la Santa 1</label>
                                <label>CH-6962 Lugano - Viganello</label>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-bottom-item">
                        <a href="mailto:delime@usi.ch">
                            <img src={require('../../assets/images/mail.svg')} alt="Mail"/>
                            <label>{"delime@usi.ch"}</label>
                        </a>
                    </div>
                    <div className="sidebar-bottom-item">
                        <a href="tel:+41 77 992 55 44">
                            <img src={require('../../assets/images/phone.svg')} alt="Mail"/>
                            <label>{"+41 77 992 55 44"}</label>
                        </a>
                    </div>
                    <div className="sidebar-bottom-item">
                        <a href="http://usi.to/4t2" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/images/person.svg')} alt="Mail"/>
                            <label>{t("usiPage")}</label>
                        </a>
                    </div>
                    {/* <div className="sidebar-bottom-item">
                        <a href="http://usi.to/4t2" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/images/file.svg')} alt="Mail"/>
                            <label>{"Curriculum Vitae"}</label>
                        </a>
                    </div> */}
                </div>
            </div>
            
        </div>
    );
};