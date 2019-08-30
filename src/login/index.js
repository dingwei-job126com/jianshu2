import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import {LogoWrapper,LoginCon} from './style';

class Login extends Component {
	render(){
		const {loginStatus,logIn} = this.props;
		
		if (!loginStatus) {
			//未登录时 显示登录页面
			return (
				<LogoWrapper>
					<LoginCon>
						<input placeholder="账号" ref={(input)=>this.userName=input}/>
						<input placeholder="密码" ref={(input)=>this.userPass=input} type="password" />
						<button onClick={()=>logIn(this.userName,this.userPass)}>登录</button>
					</LoginCon>
				</LogoWrapper>
			)
			
		}else{
			//登录了 重新定向到 首页 (home页面)
			return <Redirect to='/'></Redirect>
		}
	}
}
const mapStateToProps = (state)=>({
	loginStatus:state.getIn(['login','login'])
})

const mapDispatchToProps = (dispatch) => ({
	logIn(elemName,elemPass){
		dispatch(actionCreators.logIn(elemName.value,elemPass.value))
	}
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);