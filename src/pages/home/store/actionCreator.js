import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const homeData = (result) =>({
	type:constants.GET_ARTICLE_DATA,
	articleList:result.articleList,
	writerList:result.writerList,
	wrPageCount:Math.ceil(result.writerList.length / 5) //数据的总条数  / 每页显示5条 得到 总页数
});
export const gethomeData = () =>{
	return (dispatch) =>{
		axios.get('/api/homeDataList.json').then((res)=>{
			const result = res.data.data;
			//console.log(result.writerList);
			dispatch(homeData(result))
		}).catch(()=>{
			alert('数据获取失败')
		})
	}
};

/*左侧文章列表的加载更多 并做分页 ,
点击第一次时，就加载第一页，点第二次，就加载第二页，要将当前的页码传给后台
*/
const addMoreList = (moreList,arNextPage) =>({
	type:constants.ADD_MORE_LIST,
	moreList:fromJS(moreList),
	arNextPage
})
export const getMoreList = (arlPage)=>{
	return (dispatch)=>{
		axios.get('/api/moreLeftList.json?arlPage=' + arlPage).then((res)=>{
			const result = res.data.data;
			console.log(result); //结果：直接是数据内容
			dispatch(addMoreList(result,arlPage+1))
		}).catch(()=>{
			alert('更多数据失败')
		})
	}
}

//右侧的作者的推荐 换一换功能 分页功能
export const getpageData =(wrPage)=>({
	type:constants.GET_PAGE_DATA,
	wrPage
})
