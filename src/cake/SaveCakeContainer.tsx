import { connect } from 'react-redux';
import { saveCake } from '../actions/cakeActions';
import SaveCake from './SaveCake';

export default connect(undefined, {
    saveCake
})(SaveCake);
