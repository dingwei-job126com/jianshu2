import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../login/store';
import { Link } from 'react-router-dom';
import { HeaderWrapper,	TontText, 
	Nav,Logo, NavBar,NavBarLeft,NavSerch,NavInput,
	BarItem,RegWrit,RegWritItem,Register,Writing,
	SearchInFoDiv,InFoItem,InFoTitle
	 } from './style';

class Header extends Component {
	getInFoList(){
		const {focused,mouseIn,btnMoustEnter,btnMoustLeave,handleIcon,infoList,page,pageCount} = this.props;
		const infoListNew = infoList.toJS();
		const newList = [];
		//console.log(infoListNew);
		console.log(page,pageCount);

		if (infoListNew.length) {
			for (var i = (page-1)*10; i < page*10; i++) {
				//循环几次 就有几页，当前页*10：表示当前页有10条数据，即每页显示10条
				if (i<infoListNew.length) {
					//当循环的次数
					newList.push(
						<InFoItem key={infoListNew[i]}>{infoListNew[i]}</InFoItem>
					);
				}
			}
			// for (var i = 0; i < infoListNew.length; i++) {
			// 	newList.push(
			// 		<InFoItem key={infoListNew[i]}>{infoListNew[i]}</InFoItem>
			// 	);
			// } //此段代码 没有分页功能
		}

		if (focused || mouseIn) {
			return(
				<SearchInFoDiv onMouseEnter = {btnMoustEnter} onMouseLeave = {btnMoustLeave}>
					<InFoTitle>
						<span className="spanL">热门搜索</span>
						<span className="spanR" onClick={()=>handleIcon(this.spanIcon,page,pageCount)}>
							<span className="iconfont spicon" ref={(iconS)=>{this.spanIcon=iconS}}>&#xe614;</span>换一批
						</span>
					</InFoTitle>
					{ newList }
					{/*<InFoItem >区链</InFoItem>*/}											
				</SearchInFoDiv>
			)
		}else{
			return null
		}
		
	}
	render(){
		const {btnOnFocus,btnOnBlur,login,logOut,infoList} = this.props;
		return (
			<HeaderWrapper>
				<TontText>加油啊。不要假装自己很努力，毕竟结局不会欺骗你自己。</TontText>
				<Nav>
					<Link to='/'>
						<Logo />
					</Link>
					<NavBar>
						<NavBarLeft>
							<BarItem className="txtcolor">
							<Link to='/' className='linkStyle'>
							<span className="iconfont">&#xe68d;</span>&nbsp;首页
							</Link>
							</BarItem>
							<BarItem><span className="iconfont">&#xe67a;</span>&nbsp;下载App</BarItem>
						</NavBarLeft>
						<NavSerch>
							<NavInput onFocus = {()=>btnOnFocus(infoList)} onBlur={btnOnBlur} className={this.props.focused ? 'focused' : ''}  />
							<span className={this.props.focused ? 'iconfont iconPic iconpiced' : 'iconfont iconPic' }>&#xe617;</span>
							{this.getInFoList()}												
						</NavSerch>
					</NavBar>
					<RegWrit>
						<RegWritItem><span className="iconfont">&#xe600;</span></RegWritItem>
						{  
							login ? <Link to={'/login'}>
								<RegWritItem onClick={logOut}>退 出</RegWritItem>	
							</Link>:<Link to={'/login'}>
								<RegWritItem>登录</RegWritItem>	
							</Link>	
						}
						<Register>注册</Register>
						<Writing><span className="iconfont">&#xe616;</span>&nbsp;写文章</Writing>
					</RegWrit>
				</Nav>
			</HeaderWrapper>
		)
	}
};
const mapStateToProps = (state)=>{
	return {
		focused:state.getIn(['header','focused']),
		mouseIn:state.getIn(['header','mouseIn']),
		infoList:state.getIn(['header','infoList']),
		page:state.getIn(['header','page']),
		pageCount:state.getIn(['header','pageCount']),
		login:state.getIn(['login','login'])
	}
};
const mapDispatchToProps = (dispatch)=>{
	return{
		// 搜索框 获取 失去 焦点
		btnOnFocus(infoList){
			if (infoList.size === 0) {//.size 等同于  > .length 和 <= .length
				dispatch(actionCreators.getSearchList());
			}
			dispatch(actionCreators.searchFocus())
		},
		btnOnBlur(){
			dispatch(actionCreators.searchBlur())
		},

		//搜索框展开后的默认搜索块的点击后不隐藏，鼠标经过事件 onMouseEnter 离开事件 onMoustLeave
		btnMoustEnter(){
			dispatch(actionCreators.mouseEnter())
		},
		btnMoustLeave(){
			dispatch(actionCreators.mouseLeave())
		},

		//默认搜索列表的 换一批 
		handleIcon(spicon,page,pageCount){
			//console.log(spicon); //返回一个dom节点
			let originAngle = spicon.style.transform.replace(/[^0-9]/ig, '');//将transform中非数字内容替换为空	
			if (originAngle) { //截取后 是个字符串，要计算应该转换成数字
				originAngle = parseInt(originAngle,10);//转换成10进制的的数字
			}else{
				originAngle = 0;
			}
			spicon.style.transform = 'rotate('+(originAngle+360)+'deg)';
			
			//点击换页，当前页+1 即 page+1 ，当最后一页+1时 显示第1页 。需改变page的值
			if (page<pageCount) {
				dispatch(actionCreators.changePage(page+1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
		},
		//退出登录
		logOut(){
			dispatch(loginActionCreators.logOut())
		}
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
/*
有分页：
	总数据 / 每页显示的条数10 = 可以分成几页 即总页数的值
	当 当前页<总页数时 点击换一换 就派发dispatch 让当前页 + 1 当前页为第1页 +1后 就是第2页
	   当前页 = 总页数时 点击换一换 就派发dispatch 让当前页=1 等于1 即 等于第1页
	   所以当前页最大就是总页数的值
	当前页页码变成第2页时：显示的数据也要是第2页的数据
		当前页*10 即此页显示10条数
		for（i=(page-1)*10;i<page*10;i++）{
			在此循环输出数据
		}
	当最后一页*10时 此页面的数据已经不够10条了，会报错会以乱码形式补全10条所以：
		for（i=(page-1)*10;i<page*10;i++）{
			if（i<list.length）{
				在此循环输出数据
			}			
		}
*/