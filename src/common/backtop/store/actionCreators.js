import * as constants from './constants';
import {fromJS} from 'immutable'

export const changeScroll = (isflag)=>({
	type:constants.CHANGE_SCROLL,
	isflag
})


export const toogleTopShow = (flag) => ({

	type:constants.CHANGE_SCROLL,
	flag
});