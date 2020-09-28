<template>
  <view class="recommnedContainer">
    <!-- banner区域 -->
    <swiper class="bannerSwiper" indicator-dots autoplay>
      <swiper-item>
        <image
          class="bannerImg"
          src="https://yanxuan.nosdn.127.net/b4f1825564cb1c071ef3b96a11ae11a8.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          mode=""
        ></image>
      </swiper-item>
      <swiper-item>
        <image
          class="bannerImg"
          src="https://yanxuan.nosdn.127.net/3cdf019e3111d65b861d93c6182f7596.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          mode=""
        ></image>
      </swiper-item>
      <swiper-item>
        <image
          class="bannerImg"
          src="https://yanxuan.nosdn.127.net/7a67e59b334b50c6d94f13bedc50d2c3.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          mode=""
        ></image>
      </swiper-item>
    </swiper>

    <!-- 描述列表 -->
    <view class="policyDescList">
      <view
        class="descItem"
        v-for="descItem in indexData.policyDescList"
        :key="descItem.icon"
      >
        <image class="descItemImg" :src="descItem.icon"></image>
        <text class="text"> {{ descItem.desc }} </text>
      </view>
    </view>

    <!-- kingKongList区域 -->
    <view class="kingKongList" v-if="indexData.kingKongModule">
      <view
        class="kingKongItem"
        v-for="kingKong in indexData.kingKongModule.kingKongList"
        :key="kingKong.L1Id"
      >
        <image class="kingKongImg" :src="kingKong.picUrl"></image>
        <text class="text">{{ kingKong.text }}</text>
      </view>
    </view>

    <!-- 其他推荐页 -->
    <Categorys
      :category="category"
      v-for="category in indexData.categoryModule"
      :key="category.titlePicUrl"
    />
  </view>
</template>

<script>
import Categorys from "../Categorys/Categorys.vue";
import { mapState } from "vuex";
export default {
  name: "Recommend",

  components: {
    Categorys,
  },

  computed: {
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },
};
</script>

<style lang="stylus">
.recommnedContainer
	.bannerSwiper
		height 350upx
		image
			width 100%
			height 100%
	.policyDescList
		display flex
		.descItem
			flex-grow 1
			text-align center
			.descItemImg
				width 32upx
				height 32upx
				vertical-align middle
			.text
				font-size: 24rpx;
				vertical-align middle
	.kingKongList
		display flex
		// flex-wrap 在必要时拆行
		flex-wrap wrap
		margin-top 20upx
		.kingKongItem
			display flex
			flex-direction column
			width 20%
			align-items center
			flex-shrink 0
			.kingKongImg
				width 110upx
				height 110upx
			.text
				font-size: 24rpx;
</style>
