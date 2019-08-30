import React,{ Component,Fragment } from 'react';
import { BackTop } from './style.js';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class BackTopWrapper extends Component {
	
	backTop(){
		window.scrollTo(0,0);
	}
	render(){
		return(
			<Fragment>
			{ this.props.showScoroll ? <BackTop onClick={this.backTop}><span className='iconfont'>&#xe6ab;</span></BackTop> : null }
		
			</Fragment>
		)
	}

	componentDidMount(){
		//页面加载完成后 就加载一个:绑定方法（自己定义的）
		this.bindEvents();
	}
	bindEvents(){
		//自动加载一个 窗口监听事件 window.addEventListener()
		//监听 'scroll' 的滚动距离
		window.addEventListener('scroll',this.props.listenerScroll);
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.listenerScroll)
	}
}

const mapStateToProps = (state) => ({
	showScoroll:state.getIn(['backtop','showScoroll'])
});



 const mapDispatchToProps = (dispatch) => ({
 	listenerScroll(){
 		if (document.documentElement.scrollTop>70) {
 			dispatch(actionCreators.changeScroll(true))
		}else{
 			dispatch(actionCreators.changeScroll(false))
 		}
 		//console.log(document.documentElement.scrollTop)
 	}

 })

export default connect(mapStateToProps,mapDispatchToProps)(BackTopWrapper);

/*
 ## 点击回到顶部 直接调用事件 onClick = {this.this.backTop}
 	在render(){} 的上方 直接定义了该方法
	 	backTop(){
			window.scrollTo(0,0);
		}
	到此 回到顶部 可以直接完成。

	当页面滚到一定距离时 才出现 回到顶部的箭头
		定义个变量 showScoroll：false
		利用三木运算符直接在组件中进行判断
		当滚动超过70时 改变showScoroll的值变为true，显示 ，否则不显示

##  监听滚动距离是Window的函数 Window.AddEventListener('scroll',需要监听的元素或事件)
	window.addEventListener('scroll',this.props.listenerScroll);
	this.props.listenerScroll 该组件中的 listenerScroll()方法 来监听滚动距离
		在listenerScroll()中 document.documentElement.scrollTop 得到纵向滚动条滚动的距离
	当滚动距离超过70像素时 触发dispatch派发action 来改变store（reducer）的值
*/

