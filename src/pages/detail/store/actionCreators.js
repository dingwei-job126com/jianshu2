import axios from 'axios';
import * as constants from './constants';

const getDetail = (id,title,con)=>({
	type:constants.GET_DETAIL,
	id,
	title,
	con
})
export const getArcDetaill =(id)=>{
	return(dispatch) =>{
		axios.get('/api/arcDetail.json?id=' + id).then((res)=>{
			const result=res.data.data;
			console.log(result);
			dispatch(getDetail(result.id,result.title,result.con));

		}).catch((msg)=>{
			alert(msg)
		})
	}
}