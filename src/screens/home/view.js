import React from 'react';
//import { useTranslation } from 'react-i18next';
import Page from '../../components/page';

const Title = props => <p className="section-title">{props.children}</p>
const Subtitle = props => <p className={`section-subtitle ${props.bold ? 'bold' : ''}`}>{props.children}</p>
const ExtLink = props => <a 
    className={`${props.noDecor?' no-decor':''}${props.marginLeft?' margin-left':''}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    href={props.to}>
        {props.children}
    </a>

export default () => {
    //onst { t } = useTranslation();
    const usi = "Università della Svizzera italiana (USI)";
    const poars = "Porto Alegre, RS";
    const lvga = "Lugano";
    const puc = "PUC-RS";
    const br = "Brazil";
    const ch = "Switzerland";
    
    return (
        <Page>    
                <Title>About me</Title>
                <p>
                    I am currently a PhD researcher at <ExtLink to="https://www.usi.ch/en">{usi}</ExtLink>, {lvga}, {ch}, 
                    in the Distributed Systems Group led by <ExtLink to="https://www.inf.usi.ch/faculty/pedone/">Prof. Fernando Pedone</ExtLink>.
                </p>
                <p>
                    My research interests include the theory and practice of distributed dependable systems, 
                    more specifically the replication paradigm, parallel SMR scheduling, state management and recovery.
                </p>
                <p>
                    Recently I've been working on optimized data structure in state transference protocols, 
                    mainly in large application state scenarios.
                </p>

                <Title>Education</Title>
                <div>
                    <Subtitle>
                        <ExtLink to="https://www.inf.usi.ch/en/study-informatics/phd-doctoral-studies">
                            Ph.D. in Informatics
                            {/* <span role="img" aria-label="A link"> &#128279;</span> */}
                        </ExtLink>
                    </Subtitle>
                    {usi} <span className="middle-dot">&bull;</span> {lvga}, {ch} <span className="middle-dot">&bull;</span> Currently
                </div>
                <div>
                    <Subtitle>
                        <ExtLink to="https://www.pucrs.br/politecnica/programa-de-pos-graduacao-em-ciencia-da-computacao/">
                            M.Sc. in Computer Science
                            {/* <span role="img" aria-label="A link"> &#128279;</span> */}
                        </ExtLink>
                    </Subtitle>
                    {puc} <span className="middle-dot">&bull;</span> {poars}, {br} <span className="middle-dot">&bull;</span> 2020
                    (<ExtLink to="http://tede2.pucrs.br/tede2/handle/tede/9165">Dissertation</ExtLink>)
                </div>
                <div>
                    <Subtitle>
                        <ExtLink to="https://www.pucrs.br/politecnica/curso/ciencia-da-computacao/">
                            B.Sc. in Computer Science
                            {/* <span role="img" aria-label="A link"> &#128279;</span> */}
                        </ExtLink>
                    </Subtitle>
                    {puc} <span className="middle-dot">&bull;</span> {poars}, {br} <span className="middle-dot">&bull;</span> 2011
                </div>
                <Title>Teaching assistance</Title>
                <div>
                    <Subtitle>
                        <ExtLink to="https://search.usi.ch/it/corsi/35262262/operating-systems">
                            Operating Systems
                            {/* <span role="img" aria-label="A link"> &#128279;</span> */}
                        </ExtLink>
                    </Subtitle>
                    {usi}, {lvga}, {ch} <span className="middle-dot">&bull;</span> Spring 2021
                </div>
                <Title>Publications</Title>
                <div>
                    <ExtLink to="https://ieeexplore.ieee.org/document/8995730">
                        Resource Utilization Analysis of Early Scheduling in Parallel State Machine Replication
                    </ExtLink>
                    <p className="no-margin"><i>Eliã Batista; Eduardo Alchieri; Fernando Dotti; Fernando Pedone</i></p>
                    <p className="no-margin">2019 9th Latin-American Symposium on Dependable Computing (LADC)</p>
                    <ExtLink noDecor  to="https://www.inf.usi.ch/phd/batista/papers/badpLADC2019.pdf">
                        <img src={require('../../assets/images/file-pdf.svg')} alt="pdf file"/>
                    </ExtLink>
                    
                    <ExtLink marginLeft noDecor to="https://www.inf.usi.ch/phd/batista/papers/IEEE Xplore Citation BibTeX8995730.bib">
                        <img src={require('../../assets/images/format-quote-close.svg')} alt="bibTex" />
                    </ExtLink>
                </div>

                <Title>Work experience</Title>
                <div>
                    <Subtitle bold>Senior Software Developer</Subtitle>
                    Compasso Tecnologia Ltda, {poars}, {br} <span className="middle-dot">&bull;</span> 2017 - 2020
                </div>
                <div>
                    <Subtitle bold>System Analyst</Subtitle>
                    Bem Promotora de Vendas e Serviços SA, {poars}, {br} <span className="middle-dot">&bull;</span> 2014 - 2017
                </div>
                <div>
                    <Subtitle bold>Software Developer</Subtitle>
                    DBServer Assessoria em Sistemas de Informação Ltda, {poars}, {br} <span className="middle-dot">&bull;</span> 2010 - 2013
                </div>
                <div>
                    <Subtitle bold>Junior Software Developer</Subtitle>
                    Vensis Sistemas de Informação Ltda, {poars}, {br} <span className="middle-dot">&bull;</span> 2008 - 2010
                </div>
                <p/>
                <br/>

        </Page>
    );
};