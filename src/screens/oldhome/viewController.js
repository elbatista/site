import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeView from './view';
import { Sagas } from '../../redux/sagas';

class HomeController extends Component {
    render(){
        return (
            <HomeView value={this.props.Commons.value}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Sagas, dispatch)
)(HomeController);