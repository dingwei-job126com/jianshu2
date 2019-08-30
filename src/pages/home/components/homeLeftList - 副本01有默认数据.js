import React,{ Component } from 'react';
import { ListDiv, ListItem,ListItemLeft } from '../style.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';

class LeftList extends Component {
	render(){
		const {articleList} = this.props;
		console.log(articleList);
		return(
			<ListDiv>
			{
				articleList.map((item)=>{
					return (
						<ListItem key={item.get('id')}>
							<ListItemLeft>
								<h2 className="itemTitle">{item.get('title')}</h2>
								<p>{item.get('listCon')}</p>
							</ListItemLeft>
							<img className="ListPic" src={item.get('imgUrl')} alt="" />
						</ListItem>	
					)
				})
			}
				
			</ListDiv>
		)
	}
}
const mapStateToProps = (state) => ({
	articleList:state.getIn(['home','articleList'])
})

export default connect(mapStateToProps,null)(LeftList);

/*
# 注解：
	# 进入当前页面时：直接获取store中的数据，
	  store的数据是从当前组件的reducer文件中拿的
		#组件中通过mapStateToProps 函数来获取数据
			const mapStateToProps =()=>({
				articleList:state.getIn(['home','articleList'])
			})
		#在reducer文件中定义默认数据defaultState = fromJS({
			"articleList":[{...},{...}],
			
		})
*/