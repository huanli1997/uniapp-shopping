<template>
	<view class="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png"></image>
			<view class="search">
				<!-- 会被解析成view标签 -->
				<i class='iconfont icon-sousuo'></i>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button class="btn">搜索</button>
		</view>
		
		<!-- 滚动条 -->
		<scroll-view class="navScroll" scroll-x>
			<view class="navItem active">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
			<view class="navItem ">居家生活</view>
		</scroll-view>
	</view>
</template>

<script>
	// 引入发送请求的函数
	import request from '../../utils/request.js';
	import indexData from '../../utils/datas/index.json';

	/*
		onLoad->页面开始加载
		mounted->页面挂载完毕
		uniapp中,除了可以使用小程序的组件,还可以使用小程序的生命周期
		但是,无论是uniapp,还是mpvue,都推荐使用Vue的生命周期,不推荐小程序的生命周期
	*/
	export default {
		data(){
				return {
					indexData:[]
				}
			},
		
			async mounted(){
			   // 发送请求
			   // 因为没有配置请求的基础路径，所有需要加上前面的http://localhost:3002
			   const result = await request('http://localhost:3002/getIndexData')
			   // 如果是失败的请求先使用虚假数据
			   if (!result) {
					result = indexData
			   }
			   this.indexData = indexData
		}
	}

</script>

<style lang="stylus">
.indexContainer
	.header
		display flex
		align-items center
		margin-top 20upx
		
		.logo
			width 140upx;
			height 40upx;
			margin 0 20upx
			flex-shrink 0
		.search
			position relative
			height 60upx
			background #ededed
			border-radius 10upx
			padding-left 60upx
			.placeholder{
				text-align center
				font-size 24upx
				text-indent -60upx
			}
			.iconfont{
				position absolute
				top 25%
				left 20upx
				
			}
			input
				height 100%
		.btn
			flex-shrink 0
			margin 0 20upx
			width 144ipx
			height 60upx
			line-height 60upx
			color red
			font-size 26upx
			
	.navScroll
		white-space nowrap
		height 80upx
		font-size 28upx
		.navItem
			display inline-block
			width 140upx
			height 80upx
			margin 0 10upx
			line-height 80upx
			box-sizing border-box
			text-align center
			&.active
				border-bottom 2rpx solid #bb2c08 
</style>
	