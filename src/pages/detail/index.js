import React,{ Component } from 'react';
import {ArcDetaill,TitleDiv,ConDiv} from './style.js';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import { withRouter } from 'react-router-dom';


class ArclWrapper extends  Component{
	render(){
		
		return (
			<ArcDetaill>
				<TitleDiv>{this.props.title}</TitleDiv>
				<ConDiv dangerouslySetInnerHTML={{__html:this.props.con}} />
				
			</ArcDetaill>
		)
	}
	componentDidMount(){
		this.props.getArcId(this.props.match.params.id);
	}
}
const mapStateToProps =(state)=>({
	id:state.getIn(['detail','id']),
	title:state.getIn(['detail','title']),
	con:state.getIn(['detail','con'])
})
const mapDispatchToProps =(dispatch)=>({
	getArcId(arcId){
		dispatch(actionCreators.getArcDetaill(arcId));
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ArclWrapper));
