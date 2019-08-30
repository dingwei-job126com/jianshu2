import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	id:'',
	title:'',
	con:''
});
export default ((state=defaultState,action)=>{
	switch(action.type){
		case constants.GET_DETAIL:
			return state.merge({
				id:action.id,
				title:fromJS(action.title),
				con:fromJS(action.con)
			})
		default:
			return state;
	}
})
