<template>
  <div class="home">
    <div class="collapse">
      <div class="row">
        <div class="row-item row-title">
          <div class="r-1">开始时间</div>
          <div class="r-2">地点</div>
          <div class="r-3">场次</div>
          <div class="r-4">
            <div></div>
            <div></div>
          </div>
          <div class="r-5">成绩</div>
          <div class="r-6"></div>
          <div class="r-7">状态</div>
        </div>
        <div class="row-item" v-for="(item, index) in matchList" :key="index">
          <div class="r-1">{{ item.time }}</div>
          <div class="r-2">{{ item.addr }}</div>
          <div class="r-3">{{ item.num }}</div>
          <div class="r-4">
            <div>{{ item.team }}</div>
            <div>{{ item.player }}</div>
          </div>

          <div class="r-5">{{ item.scoreA }}</div>
          <div class="r-6">{{ item.type }}</div>
          <div class="r-7">{{ item.status }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeavyCollapse",
  props: {},
  data() {
    return {
      activeKey: ["1"],
      customStyle: "background-color: #fff;border: 0;overflow: hidden;",
      matchList: [
        {
          id: "1",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 2,
          scoreA: 2,
          scoreB: 3,
          child: {},
        },
        {
          id: "2",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 0,
          scoreA: 2,
          scoreB: 3,
        },
        {
          id: "3",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 1,
          scoreA: 2,
          scoreB: 3,
        },
        {
          id: "4",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 2,
          scoreA: 2,
          scoreB: 3,
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
        .r-1 {
          width: 10%;
        }
        .r-2 {
          width: 20%;
        }
        .r-3 {
          width: 5%;
        }
        .r-4 {
          width: 40%;
          display: flex;
          justify-content: space-evenly;
        }
        .r-5 {
          width: 10%;
          text-align: center;
        }
        .r-6 {
          width: 5%;
          text-align: center;
        }
        .r-7 {
          width: 10%;
          text-align: center;
        }
      }
      &-title {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        background-color: @mainBg;
        border-bottom: none;
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
