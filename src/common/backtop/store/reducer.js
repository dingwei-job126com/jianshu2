import * as constants from './constants';
import {fromJS } from 'immutable';

const defaultState = fromJS({
	showScoroll:false
});

export default ((state=defaultState,action)=>{
	switch(action.type){
		case constants.CHANGE_SCROLL:
			return state.set('showScoroll',action.isflag);
		default:
			return state;
	}
})