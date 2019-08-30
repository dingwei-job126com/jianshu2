import * as constants from './constants.js';
import { fromJS } from 'immutable';

export const defaultState = fromJS({
	focused:false,
	mouseIn:false,
	//infoList:["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"],
	infoList:[],
	page:1,//当前页 默认当前为第一页
	pageCount:1 //总页数 默认共1页
	// infoList:[{
	// 	"id":1,
	// 	"con":"区块链"
	// },{
	// 	"id":2,
	// 	"con":"小程序"
	// },{
	// 	"id":3,
	// 	"con":"vue"
	// }]
});

export default (state = defaultState,action)=>{
	switch(action.type){
		case constants.SEARCH_FOCUS:
			return state.set('focused',true);
		case constants.SEARCH_BLUR:
			return state.set('focused',false);
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
			
		case constants.CHANGE_PAGE: //当前页码
			return state.set('page',action.page);
		case constants.CHANGE_SEARCH_LIST: 
			return state.set('infoList',action.resData).set('pageCount',action.pageCount)
		default:
			return state;
	}
}