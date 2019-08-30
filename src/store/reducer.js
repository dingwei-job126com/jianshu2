import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import {reducer as loginReducer } from '../login/store';
import { reducer as homereducer} from '../pages/home/store';
import { reducer as detailreducer} from '../pages/detail/store';
import { reducer as backtopreducer} from '../common/backtop/store';

const reducer = combineReducers ({
	header:headerReducer,
	login:loginReducer,
	home:homereducer,
	detail:detailreducer,
	backtop:backtopreducer
})

export default reducer;