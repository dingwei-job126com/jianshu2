import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	articleList:[{
		"id":1,
		"title":"一文详解Spark基本架构原理",
		"listCon":"Apache Spark是一个围绕速度、易用性和复杂分析构建的大数据处理框架，最初在2009年由加州大学伯克利分校的AMPLab开发，并于201...",
		"imgUrl":"//upload-images.jianshu.io/upload_images/13192523-54ceb4f1eef6b338.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"	
	},{
		"id":2,
		"title":"五个手机黑科技APP，每个都让人爱不释手",
		"listCon":"大家每天都在使用各种各样的手机APP，常见的就不多说了，今天流光给大家分享五个小众但是非常强大的黑科技APP，可能你一个都没听过，但我保证每",
		"imgUrl":"//upload-images.jianshu.io/upload_images/2915544-45b16dd8ea699de2.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	}]
});

export default ((state=defaultState,action)=>{
	switch(action.type){
		// case constants.GET_LEFT_LIST:
		// 	return state.set('articleList',action.articleList)
		default:
			return state;
	}
	
})