import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	articleList:[],
	writerList:[],
	morearticleList:[],
	articleListPage:1, //左侧文章列表的分页
	articPageCount:1,//文章列表的 总页数
	wrPage:1, //推荐作者部分的 当前页
	wrPageCount:1  //推荐作者部分的 总页数

	// articleList:[{
	// 	"id":1,
	// 	"title":"一文详解Spark基本架构原理",
	// 	"listCon":"Apache Spark是一个围绕速度、易用性和复杂分析构建的大数据处理框架，最初在2009年由加州大学伯克利分校的AMPLab开发，并于201...",
	// 	"imgUrl":"//upload-images.jianshu.io/upload_images/13192523-54ceb4f1eef6b338.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"	
	// },{
	// 	"id":2,
	// 	"title":"五个手机黑科技APP，每个都让人爱不释手",
	// 	"listCon":"大家每天都在使用各种各样的手机APP，常见的就不多说了，今天流光给大家分享五个小众但是非常强大的黑科技APP，可能你一个都没听过，但我保证每",
	// 	"imgUrl":"//upload-images.jianshu.io/upload_images/2915544-45b16dd8ea699de2.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
	// }]
});

export default ((state=defaultState,action)=>{
	switch(action.type){
		 case constants.GET_ARTICLE_DATA://获取首页的相关数据 左侧的文章，右侧的作者推荐
		 	//return state.set('articleList',fromJS(action.articleList));
		 	return state.merge({
		 		articleList:fromJS(action.articleList),
		 		writerList:fromJS(action.writerList),
		 		wrPageCount:fromJS(action.wrPageCount) //作者推荐 的总页数，默认值是1 ，通过获取数组的总条数和每页显示的条数相除等到总页数，来改变默认值
		 	});
		 case constants.ADD_MORE_LIST:
		 	//return state.set('articleList',state.get('articleList').concat(action.moreList))
			return state.merge({
				morearticleList:state.get(action.moreList),
				articleList:state.get('articleList').concat(action.moreList),
				articleListPage:action.arNextPage
			});
		case constants.GET_PAGE_DATA:
			return state.set('wrPage',action.wrPage);
		default:
			return state;
	}
	
});
/*
#	action.articleList的值是从接口中获取到的，是普通的js对象 是可变的。
	而组件中 获取数据并映射到组件上时的数据是 immutable对象 是不可变的
	const mapStateToProps = (state) => ({
		articleList:state.getIn(['home','articleList'])
	}) 这时的数据是 immutable对象 是不可变的。
	所以在重新设置数据时，要将接口获取的数据转换成 immutable对象，即：
	case constants.GET_ARTICLE_DATA:
		 	return state.set('articleList',fromJS(action.articleList));

#	加载更多：获取新的数据，将之前的数据和现在数据连接起来，得到一个新的数据
	.concat() 方法用于连接两个或多个数组
	return state.set('articleList',set.get('articleList').concat(action.moreList))

# 加载更多 分页：每次点击时 就加载 5条数据


*/