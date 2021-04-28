import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AboutView from './view';
import { Sagas } from '../../redux/sagas';

class AboutController extends Component {
    render(){
        return (
            <AboutView Commons={this.props.Commons} change={this.props.sagaTeste}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Sagas, dispatch)
)(AboutController);