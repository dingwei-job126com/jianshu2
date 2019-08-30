import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators} from '../../login/store';
import { Link } from 'react-router-dom';
import { toJS } from 'immutable';
import { HeaderWrapper,	TontText, 
	Nav,Logo, NavBar,NavBarLeft,NavSerch,NavInput,
	BarItem,RegWrit,RegWritItem,Register,Writing,
	SearchInFoDiv,InFoItem,InFoTitle
	 } from './style';

class Header extends Component {
	getInFoList(){
		const {focused,mouseIn,btnMoustEnter,btnMoustLeave,handleIcon,infoList} = this.props;
		const infoListNew = infoList.toJS();
		const newList = [];
		console.log(infoListNew);
		
		if (infoListNew.length) {
			for (var i = 0; i < infoListNew.length; i++) {
				newList.push(
					<InFoItem key={infoListNew[i]}>{infoListNew[i]}</InFoItem>
				);
			}
		}

		if (focused || mouseIn) {
			return(
				<SearchInFoDiv onMouseEnter = {btnMoustEnter} onMouseLeave = {btnMoustLeave}>
					<InFoTitle>
						<span className="spanL">热门搜索</span>
						<span className="spanR" onClick={()=>handleIcon(this.spanIcon)}>
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
		const {btnOnFocus,btnOnBlur,login,logOut} = this.props;
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
							<NavInput onFocus = {btnOnFocus} onBlur={btnOnBlur} className={this.props.focused ? 'focused' : ''}  />
							<span className={this.props.focused ? 'iconfont iconPic iconpiced' : 'iconfont iconPic' }>&#xe617;</span>
							{this.getInFoList()}
							{
							/*
							如果搜索是展开状态，则热门搜索显示。否则不显示
							{this.props.focused ? <SearchInFoDiv onMouseEnter = {btnMoustEnter}>
								<InFoTitle>
									<span className="spanL">热门搜索</span>
									<span className="spanR">
										<span className="iconfont">&#xe614;</span>换一批
									</span>
								</InFoTitle>
								<InFoItem >区链</InFoItem>								
							</SearchInFoDiv> : ''}
							当点击热门搜索时，随着搜索框失焦，它也不显示了。
							为了解决该问题，将这段热门搜索的jsx单独提到上面作为一个小函数
							*/
							}
							{/*<SearchInFoDiv onMouseEnter = {this.props.btnMoustEnter}>
							<InFoTitle>
									<span className="spanL">热门搜索</span>
									<span className="spanR">										
										<span className="iconfont">&#xe614;</span>换一批
									</span>
								</InFoTitle>
								<InFoItem >区链</InFoItem>								
							</SearchInFoDiv>*/}

							{/*在jsx语法中不能直接加if判断
							可以使用：三目运算（条件单一时可以使用）;
									拆分成小函数,在这函数内判断,
										符合条件就return(
											<SearchInFoDiv>.....</SearchInFoDiv>
											)
									如果是大块的元素都需要区分 拆成小函数来使用
							*/}						
						</NavSerch>
					</NavBar>
					<RegWrit>
						<RegWritItem><span className="iconfont">&#xe600;</span></RegWritItem>
						{  login ? <Link to={'/login'}>
								<RegWritItem onClick={logOut}>退 出</RegWritItem>	
							</Link>:<Link to={'/login'}>
								<RegWritItem>登录</RegWritItem>	
							</Link>	}
							
						
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
		login:state.getIn(['login','login']),
		infoList:state.getIn(['header','infoList'])
	}
};
const mapDispatchToProps = (dispatch)=>{
	return{
		// 搜索框获取 失去 焦点
		btnOnFocus(){
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
		handleIcon(spicon){
			//console.log(spicon); //返回一个dom节点
			let originAngle = spicon.style.transform.replace(/[^0-9]/ig, '');//将transform中非数字内容替换为空	
			if (originAngle) { //截取后 是个字符串，要计算应该转换成数字
				originAngle = parseInt(originAngle,10);//转换成10进制的的数字
			}else{
				originAngle = 0;
			}
			spicon.style.transform = 'rotate('+(originAngle+360)+'deg)';
		},
		logOut(){
			dispatch(loginActionCreators.logOut())
		}


	}
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);

/*
	注解：
	1：如果...  否则...
		可以使用三目运算符 直接在标签内进行判断
			如果搜索是展开状态，则热门搜索显示。否则不显示
			{this.props.focused ? <SearchInFoDiv onMouseEnter = {btnMoustEnter}>
				<InFoTitle>
					<span className="spanL">热门搜索</span>
					<span className="spanR">
						<span className="iconfont">&#xe614;</span>换一批
					</span>
				</InFoTitle>
				<InFoItem >区链</InFoItem>								
			</SearchInFoDiv> : ''}
	2：在jsx语法中不能直接加if判断 需拆成小函数来使用。如上面案例中代码：
			获取reducer.js中的默认数据 infoList:[],该数据时数组类型，利用for循环来
			循环获取数据。先定义一个新的空数组 newList=[]，来接收循环获取得到的数组中的数据，
			再在相应输出内容的标签的地方 输出这个新数组 { newList }
			当数据有时候只需要获取一次时：需要在循环外加个判断：
				原数据数组 加载后 再循环获取数据。这样就可以免去每次都要重新去请求数据了

	   当条件单一时，可以使用 三目运算符（参照第1条）
*/