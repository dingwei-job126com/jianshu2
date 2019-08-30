import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {actionCreator} from '../store';
import { WriterWrapper,TitleDiv,WconDiv,WriterItem } from '../style.js';

class HomeWriter extends Component {
	getWriterData(){
		const { writerList,wrPage,wrPageCount } = this.props;
		const writerListJs = writerList.toJS();
		const newList=[];
		if (writerListJs.length) {
			for (let i =(wrPage-1)*5; i < wrPage*5; i++) {
				if (i < writerListJs.length) {
					newList.push(
						<WriterItem key={writerListJs[i].id}>
							<div className="witemPic">
								<img alt='pic' className="pic" src={writerListJs[i].imgUrl} />
							</div>
							<div className="witemCon">
								<h3>{writerListJs[i].outhor}</h3>
								<p>{writerListJs[i].numbars}</p>
							</div>
							<div className="witemGz">
								<span className="iconfont">&#xe605;</span>关注</div>
						</WriterItem>	
					);
				}
			}
		}
		//return newList; 新数组等到数据后，return出去 显示在页面上
		return (
			<WconDiv>{newList}</WconDiv>
			
		)
	}
	render(){
		const {wrPage,wrPageCount,getPaging } = this.props;
		//console.log(wrPage,wrPageCount);
		return(			
			<WriterWrapper>
				<TitleDiv>
					<span className="spanL">推荐作者</span>
					<span className="spanR" onClick={()=>getPaging(wrPage,wrPageCount,this.iconSpan)}>
						<span className="iconfont spicon" ref={(icon)=>{this.iconSpan=icon}}>&#xe614;</span>换一批
					</span>
				</TitleDiv>							
				{this.getWriterData()}	

			</WriterWrapper>
		)
	}
}
const mapStateToProps = (state) => ({
	writerList:state.getIn(['home','writerList']),
	wrPage:state.getIn(['home','wrPage']),
	wrPageCount:state.getIn(['home','wrPageCount'])
});
const mapDispatchToProps =(dispatch) =>({
	getPaging(wrPage,wrPageCount,iconSpan){
		//接收的 iconSpan 就是 获取到的 dom元素

		let Angle = iconSpan.style.transform.replace(/[^0-9]/ig,'');
			if (Angle) {
				Angle = parseInt(Angle,10);
			}else{
				Angle = 0;
			}
			console.log(Angle)
		iconSpan.style.transform ='rotate('+ (Angle+360) +'deg)';

		if (wrPage<wrPageCount) {
			dispatch(actionCreator.getpageData(wrPage+1))
		}else{
			dispatch(actionCreator.getpageData(1))
		}
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeWriter);

/*
## 将获取到的所有的数据 做分页：每页显示几条，共几页。home页加载时，此组件的
	数据就已经异步获取加载了。在异步获取加载时就开始计算页数了：
		总页数 = 数据的总条数 / 每页显示条数 


		下面代码是 没有做分页时候的正常获取数据
		{
			writerList.map((item,index)=>{
				return(
					<WriterItem key={index}>
						<div className="witemPic">
							<img alt='pic' className="pic" src={item.get('imgUrl')} />
						</div>
						<div className="witemCon">
							<h3>{item.get('outhor')}</h3>
							<p>{item.get('numbars')}</p>
						</div>
						<div className="witemGz">
							<span className="iconfont">&#xe605;</span>关注</div>
					</WriterItem>	
				)
			})
		}


###  js 字符串操作函数 .replace( , ); 将逗号前面的部分 替换成 逗号后面的内容，
		replace(/[^0-9]/ig,'');将不是0-9的数字的部分 替换成 空，
		# 那剩下的字符串就 都是数字了.[^0-9]中的 ^ 是 或的意思 非0非1非2……非9
		# 取到之后 得到的一个字符串类型的数字，将数字转换成正常的10进制数，才能进行计算
		  parseInt(Angle,10); 如果没有取到就直接赋值为0。
		# 改变 样式transform：rotate(60deg)的角度  当前角度+360(转一圈)
			rotate('+ (Angle+360) +'deg)
		完成代码如下：
		let Angle = iconSpan.style.transform.replace(/[^0-9]/ig,'');
			if (Angle) {
				Angle = parseInt(Angle,10);
			}else{
				Angle = 0;
			}
			console.log(Angle)
		iconSpan.style.transform ='rotate('+ (Angle+360) +'deg)';


*/