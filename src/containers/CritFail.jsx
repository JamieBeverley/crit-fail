import CritFail from '../components/CritFail'
import {connect} from 'react-redux';
import {createActions} from "../actions/index.js";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        actions: createActions(dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CritFail);
