import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getData, getSelectedPeriod, setSelectedPeriod} from '../module/form_module';


import Dashboard from '../components/Dashboard/index';

function mapStateToProps(state) {
    return {
        data: state.dashboard.data,
        selectedPeriod: state.dashboard.selectedPeriod,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getData, getSelectedPeriod, setSelectedPeriod}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);