<template>
  <div class="home">
    <div class="collapse">
      <div class="row">
        <div class="row-item row-title">
          <div class="r-1">
            <div>名次</div>
          </div>
          <div class="r-2">
            <div>代表团</div>
          </div>
          <div class="r-3">
            <div>运动员</div>
          </div>
        </div>
        <div class="row-item" v-for="(item, index) in matchList" :key="index">
          <div class="r-1">
            <template v-if="item.id == 1">
              <img src="@/assets/images/jin.png" alt="" />
            </template>
            <template v-else-if="item.id == 2">
              <img src="@/assets/images/yin.png" alt="" />
            </template>
            <template v-else-if="item.id == 3">
              <img src="@/assets/images/tong.png" alt="" />
            </template>
            <template v-else>{{ item.id }}</template>
          </div>
          <div class="r-2">{{ item.venue }}</div>
          <div class="r-3">{{ item.player }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectMedal",
  title: "项目奖牌",
  props: {},
  data() {
    return {
      activeKey: ["1"],
      customStyle: "background-color: #fff;border: 0;overflow: hidden;",
      matchList: [
        {
          id: "1",
          type: "大项报表1",
          venue: "代表团1",
          player: "运动员1",
        },
        {
          id: "2",
          type: "大项报表2",
          venue: "代表2",
          player: "运动员2",
        },
        {
          id: "3",
          type: "大项报表3",
          venue: "代表3",
          player: "运动员3",
        },
        {
          id: "4",
          type: "大项报表4",
          venue: "代表4",
          player: "运动员4",
        },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  .collapse {
    width: 100%;

    .row {
      width: 100%;

      &-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid @main;
        height: 70px;
        padding: 0 50px;
        box-sizing: border-box;
        font-size: 16px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .r-1 {
          width: 5%;
          text-align: center;
          margin-right: auto;
        }
        .r-2 {
          width: 70%;
        }
        .r-3 {
          width: 10%;
        }
      }
      &-title {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        background-color: @mainBg;
        border-bottom: none;
        color: #333;
      }
    }
  }
  //  重置折叠面板
  /deep/
    .ant-collapse-icon-position-right
    > .ant-collapse-item
    > .ant-collapse-header {
    padding: 0 !important;
  }
  /deep/ .ant-collapse-content > .ant-collapse-content-box {
    padding: 0 !important;
  }

  /deep/
    .ant-collapse-icon-position-right
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
