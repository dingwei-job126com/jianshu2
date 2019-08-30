import React,{ Component } from 'react';
import { ListDiv, ListItem,ListItemLeft } from '../style.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';

class LeftList extends Component {
	render(){
		const {articleList,moreList,articleListPage} = this.props;
		//console.log(articleListPage);
		return(

			<ListDiv>
			{
				articleList.map((item,index)=>{
					return (
						<ListItem key={index}>
							<ListItemLeft>
								<Link to={'/detail/' + item.get('id')} className='leftLink'>
								<h2 className="itemTitle">{item.get('title')}</h2>
								<p>{item.get('listCon')}</p>
								</Link>
							</ListItemLeft>
							<img className="ListPic" src={item.get('imgUrl')} alt="" />
						</ListItem>	
					)
				})
			}
			<div className="moreList" onClick={()=>moreList(articleListPage)} >加载更多</div>	
			</ListDiv>
			
		)
	}
}
const mapStateToProps = (state) => ({
	articleList:state.getIn(['home','articleList']),
	articleListPage:state.getIn(['home','articleListPage']),
	morearticleList:state.getIn(['home','morearticleList']),
	pageCount:state.getIn(['home','pageCount'])
});
const mapDispatchToProps =(dispatch)=>({
	moreList(articleListPage){
		dispatch(actionCreator.getMoreList(articleListPage))
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(LeftList);
