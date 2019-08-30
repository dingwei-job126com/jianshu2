import styled from 'styled-components';
import bgimgUrlA from '../../statics/advert.jpg';
import bgimgUrlB from '../../statics/advert02.jpg';

export const HomeWrapper = styled.div`
	width:960px;
	height:atuo!important;
	height:100%;
	display:table;
	margin:20px auto;
	//padding-bottom:50px;
`;
export const HomeLeft = styled.div`
	width:625px;
	float:left;
	.homePic{
		width:625px;
		height:270px;
	}

`;
export const ListDiv = styled.div`
	width:625px;
	margin-top:0px;
	border-bottom:1px solid #000;
	.moreList{
		width:100%;
		height:40px;
		line-height:40px;
		text-align:center;
		color:#000;
		background:#D8BFD8;
		cursor:pointer;
	}
`;
export const ListItem = styled.div`
	width:625px;
	margin:20px 0;
	display:table;
	padding:30px 0 20px 0;
	border-top:1px solid #f0f0f0;

	position:relative;
	.ListPic{
		float:right;
		width:150px;
		height:100px;
		position:absolute;
		right:0;
		top:50%;
		margin-top:-50px;
	}
`;
export const ListItemLeft = styled.div`
	float:left;
	width:458px;
	overflow:hidden;
	>h2{
		margin-bottom:10px;
	}
	// >p{
	// 	line-height:24px;
	// 	font-size:14px;
	// 	color:#999;
	// }
	.leftLink{
		text-decoration:none;
		color:#999;
		line-height:24px;
		font-size:14px;
		color:#999;
	}
`;
//右侧部分
export const HomeRight = styled.div`
	width:300px;
	float:right;
background:#D8BFD8;
	.saoyisao{
		padding:10px 20px 0;
		border:1px solid #C0C0C0;
		display:table;
		position:relative;
	}
	.saoPic{
		width:60px;
		height:60px;
		float:left;
		dispaly:block;
	}
	.saoyisao:hover .saohoverPic{
		display:block;

	}
	.saohoverPic{		
		position:absolute;
		z-index:3;
		top:80px;
		padding:10px;
		left:50%;
		margin-left:-65px;
		display: none;
	background:#DDA0DD;
	}	
	.shpic{
		width:130px;
		height:130px;
	}
	.saotext{
		float:left;
		margin-left:20px;
	}
	.stp1{
		font-size:14px;
		color:#333;
		margin-top:10px;
	}
	.stp2{
		font-size:12px;
		color:#999px;
		margin-top:8px;
	}
	.advert01{
		width:280px;
		height:160px;
		background:url(${bgimgUrlA}) no-repeat;
		margin-top:30px;
	}
	.advert02{
		width:280px;
		height:160px;
		background:url(${bgimgUrlB}) no-repeat;
		margin-top:30px;
	}
`;
export const WriterWrapper = styled.div`
	width:300px;
	margin-top:30px;
	padding-bottom:20px;
background:#BC8F8F;
`;
export const TitleDiv = styled.div`
	width:300px;
	height:40px;
	line-height:40px;
	border-bottom:1px solid #C0C0C0;
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
			transform:rotate(60deg);			
			//background:#FFFAFA;				
			width:16px;			
			float:left;//这个属性不写，没有效果
		}		
	}
`;
export const WconDiv = styled.div`
	width:300px;
	display:table;
`;

export const WriterItem =styled.div`
	margin:0px 0 20px 0;
	height:48px;
	.witemPic{
		float:left;		
		width:48px;
		height:48px;
		.pic{
			width:48px;
			height:48px;
			border-radius:50%;
		}
	}
	.witemCon{
		float:left;		
		width:170px;
		height:48px; 
		line-height:150%;
		margin-left:10px;
		>h3{
			font-size:14px;
		}
		>p{
			font-size:12px;
			color:#69969;
		}
	}
	.witemGz{
		float:right;
		height:48px; 
		color:#42c02e
		font-size:13px;
	}
`;
