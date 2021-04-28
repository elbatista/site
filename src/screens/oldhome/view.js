import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, getI18n } from 'react-i18next';

const Title = props => <p className="sectionTitle">{props.children}</p>
const Content = props => <p className="sectionContent">{props.children}</p>
const ExtLink = props => <a target="_blank" rel="noopener noreferrer" href={props.to}>{props.children}</a>

export default () => {
    const { t } = useTranslation();
    const usi = "Università della Svizzera italiana (USI)";
    return (
        <>
            <h2><Link to="/about">Eliã Rafael de Lima Batista</Link></h2>
            <label onClick={()=>getI18n().changeLanguage('en')} style={{cursor:"pointer", textDecoration:'underline'}}>EN</label>
            <label onClick={()=>getI18n().changeLanguage('pt')} style={{cursor:"pointer", textDecoration:'underline', marginLeft:"1em"}}>PT</label>
            <label onClick={()=>getI18n().changeLanguage('it')} style={{cursor:"pointer", textDecoration:'underline', marginLeft:"1em"}}>IT</label>

            <h3>{t("researcher")}</h3>
            <p>{t("phone")}: +41 77 992 55 44</p>
            <p>Email: delime at usi dot ch</p>
            <p><ExtLink to="http://usi.to/4t2">{t("usiPage")}</ExtLink></p>
            <br></br>

            <Title>{t("about")}</Title>
            <Content>{t("aboutText1")} <ExtLink to="https://www.usi.ch/en">{usi}</ExtLink>, Lugano, {t("switzerland")}, {t("aboutText2")} <ExtLink to="https://www.inf.usi.ch/faculty/pedone/">Fernando Pedone.</ExtLink></Content>
            <Content>My research interests include the theory and practice of distributed dependable systems, more specifically the replication paradigm, parallel SMR scheduling, state management and recovery.</Content>
            <Content>Recently I've been working on optimized data structure in state transference protocols, mainly in large application state scenarios.</Content>
        
            <Title>{t("education")}</Title>
            <Content><ExtLink to="https://www.inf.usi.ch/en/study-informatics/phd-doctoral-studies">{t("phd")}</ExtLink></Content>
            <Content><i>{usi} · Lugano, {t("switzerland")} · Currently</i></Content>
            <Content><ExtLink to="https://www.pucrs.br/politecnica/programa-de-pos-graduacao-em-ciencia-da-computacao/">{t("ms")}</ExtLink> </Content>
            <Content><i>PUCRS · Porto Alegre, RS, {t("brasil")} · 2020</i></Content>
            <Content><ExtLink to="https://www.pucrs.br/politecnica/curso/ciencia-da-computacao/">{t("ba")}</ExtLink></Content>
            <Content><i>PUCRS · Porto Alegre, RS, {t("brasil")} · 2011</i></Content>

            <Title>{t("teachAssis")}</Title>
            <Content>Spring 2021</Content>
            <Content><ExtLink to="https://search.usi.ch/it/corsi/35262262/operating-systems">Operating Systems</ExtLink> · {usi}, Lugano, {t("switzerland")}</Content>

            <Title>{t("publications")}</Title>
            <Content> <ExtLink to="https://ieeexplore.ieee.org/document/8995730">Resource Utilization Analysis of Early Scheduling in Parallel State Machine Replication</ExtLink></Content>
            <Content> <i>Eliã Batista; Eduardo Alchieri; Fernando Dotti; Fernando Pedone</i></Content>
            <Content> <ExtLink to="https://ladc2019.imd.ufrn.br/">2019 9th Latin-American Symposium on Dependable Computing (LADC) </ExtLink></Content>

            <Title>{t("experience")}</Title>
            <Content>2017 - 2020 · Senior Software Developer · Compasso Tecnologia Ltda, Porto Alegre, Brazil.</Content>
            <Content>2014 - 2017 · System Analyst · Bem Promotora de Vendas e Serviços SA, Porto Alegre, Brazil.</Content>
            <Content>2010 - 2013 · Software Developer · DBServer Assessoria em Sistemas de Informação Ltda, Porto Alegre, Brazil.</Content>
            <Content>2008 - 2010 · Junior Software Developer · Vensis Sistemas de Informação Ltda, Porto Alegre, Brazil.</Content>

        </>
    );
};
