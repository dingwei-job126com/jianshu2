import * as constants from './constants';
import axios from 'axios';


const changeLogin = () =>({
	type:constants.GET_LOGIN,
	value:true
})
export const logIn = (userName,userPass)=>{
	return (dispatch)=>{
		axios.get('/api/login.json?userName = '+userName+'&userPass='+userPass).then((res)=>{
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin())
			}else{
				alert('登录失败');
			}
		})
	}

};

export const logOut = () =>({
	type:constants.GET_LOGOUT,
	value:false
})