import React,{ Component } from 'react';
import {HomeWrapper, HomeLeft,HomeRight} from './style.js';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import HomeLeftList from './components/homeLeftList.js';
// import HomerRecommend from './components/homerRecommend.js';
import HomeWriter from './components/homeWriter.js';

class Home extends Component {
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<div>
						<img className="homePic" src="//upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='' />
					</div>
					<HomeLeftList />
				</HomeLeft>
				<HomeRight>
					<div className="saoyisao">						
						<img alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" className="saoPic" />
						<div className="saotext">
							<p className="stp1">下载简书APP > </p>
							<p className="stp2">随时随地发现和创作内容</p>
						</div>
						<div className="saohoverPic">
							<img alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" className="shpic" />
						</div>
					</div>
					<div className="advert01"></div>
					<div className="advert02"></div>
					<HomeWriter />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount(){
		this.props.HomeData()
	}
}


const mapDispatchToProps = (dispatch) =>({
	HomeData(){
		dispatch(actionCreator.gethomeData())
	}
})

export default connect(null,mapDispatchToProps)(Home);

/*
###	home中的各个小组件的数据，均是在home页加载后同时加载的数据。所以在该组件中，
	使用mapDispatchToProps()函数 派发dispatch去各个小组件的数据。然后在各个小组件
	中使用 mapStateToProps()函数 来获取小组件对应的数据，并映射到组件的属性上

###	页面加载完成后就自动获取到数据 派发dispatch时（没有点击事件来触发），
	利用周期函数 componentDidMount(){
					this.props.方法();
				}
	再在 mapDispatchToProps中定义此方法 去派发dispatch
	componentDidMount(){
		this.props.HomeData()
	}
	const mapDispatchToProps(){
		HomeData(){
			dispatch(actionCreator.gethomeData())
		}
	}
*/