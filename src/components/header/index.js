import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { Sagas } from '../../redux/sagas';

class HeaderController extends Component {
    render(){
        return (
            <View value={this.props.Commons.value}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Sagas, dispatch)
)(HeaderController);