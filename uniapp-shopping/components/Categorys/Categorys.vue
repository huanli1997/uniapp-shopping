<template>
  <view class="categorysContainer">
    <!-- 图片 -->
    <image class="titleImg" :src="category.titlePicUrl"></image>
    <scroll-view class="categoryScroll" scroll-x>
      <view
        class="categoryItem"
        v-for="item in category.itemList"
        :key="item.id"
      >
        <image class="categoryImg" :src="item.showPicUrl"></image>
        <text class="text">{{ item.simpleDesc }}</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Categorys",
  props: ["category"],

  computed: {
    ...mapState({
      indexData: (state) => state.home.indexData,
    }),
  },
};
</script>

<style lang="stylus">
.categorysContainer
	margin-top 20upx
	.titleImg
		width 100%
		height 370upx
	.categoryScroll
		white-space nowrap
		.categoryItem
			display inline-flex
			flex-direction column
			white-space pre-wrap
			width 200upx
			margin 10upx 10upx
			.categoryImg
				width 200upx
				height 200upx
			.text
				display -webkit-box
				-webkit-line-clamp 2
				-webkit-box-orient vertical
				font-size 24upx
				height 64upx
</style>
