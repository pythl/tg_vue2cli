<template>
  <div class="home">
    <div class="detail">
      <img class="detail-img" src="@/assets/images/man.png" alt="" />
      <div class="detail-info">
        <div class="name">运动员姓名</div>
        <div>代表团：垫江县</div>
        <div>出生年月：1990-12-12</div>
        <div>性别：男</div>
        <div>项目：游泳</div>
      </div>
    </div>
    <div class="box">
      <div class="box-title">报项信息</div>
      <div class="box-item">
        <div>男子丙组800米自由泳</div>
        <div>男子丙组800米自由泳</div>
        <div>男子丙组800米自由泳</div>
        <div>男子丙组800米自由泳</div>
        <div>男子丙组800米自由泳</div>
        <div>男子丙组800米自由泳</div>
      </div>
    </div>
    <div class="row">
      <div class="bg">
        <div class="line">
          <div>成绩信息</div>
          <div>成绩</div>
          <div>名次</div>
          <div>奖牌</div>
        </div>
      </div>
      <div class="row">
        <div class="line">
          <div>男子丙组800米自由泳</div>
          <div>05:06:27</div>
          <div>1</div>
          <div class="medal">
            <template v-if="medalId == 1">
              <img src="@/assets/images/jin.png" alt="" srcset="" />
              <error
                theme="filled"
                size="14"
                fill="#333"
                :strokeWidth="1"
                style="margin-top: 2px"
              />
              111
            </template>
            <template v-else-if="medalId == 2">
              <img src="@/assets/images/yin.png" alt="" srcset="" />
              <error
                theme="filled"
                size="14"
                fill="#333"
                :strokeWidth="1"
                style="margin-top: 2px"
              />
              111
            </template>
            <template v-else-if="medalId == 3">
              <img src="@/assets/images/tong.png" alt="" srcset="" />
              <error
                theme="filled"
                size="14"
                fill="#333"
                :strokeWidth="1"
                style="margin-top: 2px"
              />
              111
            </template>
            <template v-else-if="medalId == 4"> 5352 </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerDetail",
  props: {},
  data() {
    return {
      player: {},
      medalId: 1,
    };
  },
  components: {},
  mounted() {
    console.log(111, this.$route.params);
    this.player = this.$route.params;
  },
  methods: {},
  watch: {},
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  .detail {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
    &-img {
      width: 180px;
      height: 230px;
      box-sizing: border-box;
      margin-right: 30px;
    }
    &-info {
      color: #333;
      font-size: 16px;
      .name {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 20px;
      }
      & div {
        line-height: 30px;
      }
    }
  }
  .box {
    &-title {
      padding: 20px 50px;
      height: 70px;
      width: 100%;
      font-weight: bold;
      font-size: 20px;
      color: #333;
      background-color: #e5f0f9;
      padding: 0 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
    }
    &-item {
      padding: 20px 50px;
      box-sizing: border-box;
      flex: 1;
      & div {
        line-height: 30px;
      }
    }
  }
  .row {
    width: 100%;
    .bg {
      background-color: #e5f0f9;
      font-weight: bold;
      font-size: 20px;
    }
    .line {
      padding: 0 50px;
      border-bottom: 1px solid #dddddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      box-sizing: border-box;
      text-align: center;
      & div:nth-child(1) {
        width: 30%;
        text-align: left;
      }
      & div:nth-child(2) {
        width: 30%;
      }
      & div:nth-child(3) {
        width: 30%;
      }
      & div:nth-child(4) {
        width: 10%;
      }
      .medal {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 46px;
          height: 46px;
        }
      }
    }
  }
}
</style>
