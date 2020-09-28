<template>
	<view class="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png"></image>
			<view class="search">
				<!-- 会被解析成view标签 -->
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder" />
			</view>
			<button class="btn">搜索</button>
		</view>

		<!-- 滚动条 -->
		<!-- 直接渲染kingKongList，会报错，因为可能还没有生成，所有在外层先读取其父元素的数据 -->
		<!-- 因为 v-for比v-if先执行，等渲染到v-if的适合,v-for里面的数据已经回来了 -->
		<scroll-view class="navScroll" scroll-x v-if="indexData.kingKongModule">
			<view class="navItem" :class="navIndex === -1 ? 'active' : ''" @click="changeIndex(-1)">推荐</view>
			<view
				class="navItem"
				:class="navIndex === index ? 'active' : ''"
				v-for="(item, index) in indexData.kingKongModule.kingKongList"
				:key="item.L1Id"
				@click="changeIndex(index)"
			>
				{{ item.text }}
			</view>
		</scroll-view>

		<scroll-view class="contentScroll" scroll-y>
			<!-- 推荐 -->
			<Recommend v-if="navIndex === -1 "/>
			<!-- 其他推荐页面 -->
			<CateList :navIndex="navIndex" v-else/>
		</scroll-view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import Recommend from '../../components/Recommend/Recommend.vue';
import CateList from '../../components/cateList/cateList.vue';

/*
		onLoad->页面开始加载
		mounted->页面挂载完毕
		uniapp中,除了可以使用小程序的组件,还可以使用小程序的生命周期
		但是,无论是uniapp,还是mpvue,都推荐使用Vue的生命周期,不推荐小程序的生命周期
	*/
export default {
	data() {
		return {
			navIndex: -1
		};
	},

	components: {
		Recommend,
		CateList
	},

	async mounted() {
		// 获取indexData数据
		this.$store.dispatch('getIndexData');
	},

	methods:{
		// 改变下标
		changeIndex(index){
			this.navIndex = index
		}
	},
	
	computed: {
		...mapState({
			indexData: state => state.home.indexData
		})
	}
};
</script>

<style lang="stylus">
.indexContainer
	.header
		display flex
		align-items center
		margin-top 20upx
		.logo
			width 140upx
			height 40upx
			margin 0 20upx
			flex-shrink 0
		.search
			position relative
			height 60upx
			background #ededed
			border-radius 10upx
			padding-left 60upx
			.placeholder
				text-align center
				font-size 24upx
				text-indent -60upx
			.iconfont
				position absolute
				top 25%
				left 20upx
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
	.contentScroll
		/*	
			tabbar 和top栏 在H5端是div模拟的，属于前端屏幕窗口的一部分，
			如果要使用bottom居底定位方式，应该使用css变量--window-bottom，
			var(--window-bottom) 在h5端值为50px，在小程序端没有值
			比如悬浮在tabbar上方10px的按钮，样式如下bottom: calc(var(--window-bottom) + 10px)
			
		*/ 
		height calc(100vh - 60upx - 80upx - var(--window-bottom) - var(--window-top))
</style>
