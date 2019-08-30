import * as constants from './constants.js';
import { fromJS } from 'immutable';
import axios from 'axios';


//头部搜索框获取焦点
export const searchFocus = ()=>({
	type:constants.SEARCH_FOCUS
});
export const searchBlur = ()=>({
	type:constants.SEARCH_BLUR
});

//搜索框展开后的默认搜索块的点击后不隐藏，鼠标经过事件 onMouseEnter 离开事件 onMoustLeave
export const mouseEnter = ()=>({
	type:constants.MOUSE_ENTER
});
export const mouseLeave = ()=>({
	type:constants.MOUSE_LEAVE
});

//改变热门搜索的默认列表的当前页page
export const changePage = (page)=>({
	type:constants.CHANGE_PAGE,
	page
});
const getChangeList = (resData) =>({
	type:constants.CHANGE_SEARCH_LIST,
	resData:fromJS(resData),
	pageCount:Math.ceil(resData.length / 10)
});
//获取异步数据
export const getSearchList = ()=>{
	return (dispatch) =>{
		axios.get('/api/searchList.json').then((res)=>{
			console.log(res);
			const resData = res.data.data;
			dispatch(getChangeList(resData));
		}).catch(()=>{
			alert('获取数据失败')
		})
	}
	
}