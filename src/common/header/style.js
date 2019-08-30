import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	width:100%;
	height:70px;
	border-bottom:1px solid #f0f0f0;
	.linkStyle{
		text-decoration:none
	}
`;
export const TontText = styled.div`
	text-align:center;
	font-size:12px;
	letter-spacing:5px;
`;
export const Nav = styled.div`
	min-width:768px;
	max-width:1440px;
	margin:0 auto;
	height:56px;
	position:relative;
`;
export const Logo = styled.div`
	width:100px;
	height:56px;
	float:left;
	background:url(${logoPic}) no-repeat;
	background-size:contain;
`;
export const NavBar = styled.div`
	width:945px;
	margin:0 auto;
	height:56px;
`;
export const NavBarLeft = styled.div`
	float:left;
`;
export const BarItem = styled.div`
	float:left;
	height:56px;
	line-height:56px;
	font-size:14px;
	margin-right:20px;
	cursor:pointer;	
	&.txtcolor{
		color:#ea6f5a;
	}	
`;
export const NavSerch = styled.div`
	height:30px;
	margin-top:10px;
	position:relative;
	float:left;
	.iconPic{
		position:absolute;
		right:5px;
		top:5px;
		font-size:20px;
		cursor:pointer;
	}
	.iconpiced{		
		background:#F5F5DC;
		color:#BDB76B;
	}
	.focused{
		width:400px;
		background:#E6E6FA;
		transition:all 0.5s 
	}
`;
export const NavInput = styled.input.attrs({
	placeholder:'搜索:现在的努力是为了在以后的日子里都是自己喜欢的人和事'
})`
	width:180px
	border-radius:15px;
	border:1px solid #fcfcfc;
	background:#DCDCDC;
	outline:none;
	height:30px;
	padding:0 15px;
	transition:all 0.5s
`;
export const SearchInFoDiv = styled.div`
	position:absolute;
	width:250px;
	background:#FFF;
	border-radius:4px;
	padding:10px 10px;
	top:35px;
	border:1px solid #fcfcfc;
	box-shadow:0 0 8px #EEE8AA;
`;
export const InFoTitle = styled.div`
	height:20px;
	margin:0px 5px;
	width:240px;
	color:#BDB76B;
	font-size:12px;
	.spanL{
		float:left;
	}
	.spanR{
		float:right;
		cursor:pointer;
		.spicon{
			position:relative;
			transition:all 0.5s;
			transform-origin:center,center;
			//transform:rotate(60deg);			
							
			width:16px;
			float:left;//这个属性不写，没有效果
		}		
	}

`;
export const InFoItem = styled.div`
	float:left;
	margin:5px
	border:1px solid #EEE8AA;
	padding:5px;
	font-size:12px;
	cursor:pointer;
`;

export const RegWrit = styled.div`
	height:40px;
	font-size:14px;
	position:absolute;
	right:0;
	top:0;
	margin-top:10px;
`;
export const RegWritItem = styled.div`
	float:left;
	margin-left:20px;
	padding:0 10px;
	line-height:40px;
	cursor:pointer;	

`;
export const Register = styled.div`
	float:left;
	margin:0 20px;
	border:1px solid #ea6f5a;
	border-radius:28px;
	padding:0 20px;
	height:35px;
	line-height:35px;
	text-align:center;
	color:#ea6f5a;
	cursor:pointer

`;
export const Writing = styled.div`
	float:left;	
	background:#ea6f5a;
	border-radius:28px;
	width:100px;
	height:38px;
	line-height:38px;
	text-align:center;
	color:#FFF;
	cursor:pointer;
	&:hover{
		background:#CD5C5C
		font-size:16px;
	}
`;