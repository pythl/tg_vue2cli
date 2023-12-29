<template>
  <div class="home">
    <div class="collapse">
      <div class="row row-title">
        <div class="r-1">开始时间</div>
        <div class="r-2">地点</div>
        <div class="r-3">场次</div>
        <div class="r-4">
          <div></div>
          <div></div>
        </div>

        <div class="r-5">状态</div>
      </div>
      <a-collapse
        v-model="activeKey"
        expand-icon-position="right"
        :bordered="false"
      >
        <template #expandIcon="props">
          <div class="collapse-reduce" v-if="props.isActive">
            <minus theme="filled" size="14" fill="#333" :strokeWidth="2" />
          </div>
          <div class="collapse-add" v-else>
            <plus theme="filled" size="14" fill="#333" :strokeWidth="2" />
          </div>
        </template>

        <a-collapse-panel
          :key="item.id"
          :style="customStyle"
          v-for="(item, index) in matchList"
        >
          <template #header="props">
            <!--    :style="{
                  borderBottom: props.isActive
                    ? ' 1px solid #fff'
                    : '1px solid #0167C3',
                }" -->
            <div class="row">
              <div class="r-1">{{ item.time }}</div>
              <div class="r-2">{{ item.addr }}</div>
              <div class="r-3">
                {{ item.num }}
              </div>
              <div class="r-4">
                <div>
                  <div>{{ item.team }}</div>
                  <div>{{ item.team }}</div>
                </div>
                <div>
                  <div>{{ item.player }}</div>
                  <div>{{ item.player }}</div>
                </div>
                <div>
                  <div>{{ item.scoreA }}</div>
                  <div>{{ item.scoreB }}</div>
                </div>
                <div>
                  {{ item.type }}
                </div>
              </div>
              <div
                class="r-5"
                :class="
                  item.status == 1
                    ? 'blue'
                    : item.status == 2
                    ? 'yellow'
                    : 'gray'
                "
              >
                {{
                  item.status == 1
                    ? "进行中"
                    : item.status == 2
                    ? "未开始"
                    : "完成"
                }}
              </div>
            </div>
          </template>
          <div class="content">
            <div class="victory">
              <div class="left">
                <div class="left-win">胜方</div>
                <div class="left-team">酉阳土家族苗族自治县</div>
                <div class="left-score">3</div>
              </div>
              <div class="dot">-</div>
              <div class="right">
                <div class="right-score">2</div>
                <div class="right-team">九龙坡</div>
                <div class="right-win">胜方</div>
              </div>
            </div>
            <div class="content-item content-title">
              <div class="r-1">运动员/团队</div>
              <div class="r-2"></div>
              <div class="r-3">
                <div>第1轮</div>
                <div>第2轮</div>
                <div>第3轮</div>
                <div>第4轮</div>
                <div>第5轮</div>
              </div>
            </div>
            <div class="content-item">
              <div class="r-1">
                <div>酉阳土家族苗族自治县/团队</div>
                <div>九龙坡</div>
              </div>
              <div class="r-2">PTF</div>
              <div class="r-3">
                <div>
                  <div>6</div>
                  <div>3</div>
                </div>
                <div>
                  <div>6</div>
                  <div>3</div>
                </div>
                <div>
                  <div>6</div>
                  <div>3</div>
                </div>
                <div>
                  <div>6</div>
                  <div>3</div>
                </div>
                <div>
                  <div>6</div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
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
    position: relative;
    &-reduce,
    &-add {
      width: 24px;
      height: 24px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333333;
      border: 1px solid #e5f0f9;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid @main;
      font-size: 16px;
      font-weight: bold;
      padding: 0 50px;
      box-sizing: border-box;

      &-title {
        font-size: 20px;
        font-weight: bold;
        background-color: @mainBg;
        border-bottom: none;
      }
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
        width: 50%;
        display: flex;
        justify-content: space-evenly;
      }
      .r-5 {
        width: 10%;
        text-align: center;
      }
    }
    .content {
      width: 100%;
      .victory {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        background-color: #f6f6f6;
        .left {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 70px;
          padding-right: 30px;
          &-score {
            font-size: 24px;
            font-weight: bold;
            margin-left: 20px;
            line-height: 70px;
          }
          &-team {
            font-style: 16px;
            margin-left: 20px;
            line-height: 70px;
          }
          &-win {
            font-weight: bold;
            line-height: 70px;
            font-size: 16px;
          }
        }
        .dot {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 26px;
          font-weight: bold;
          height: 70px;
          margin-bottom: 10px;
        }
        .right {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 70px;
          padding-left: 30px;
          &-score {
            font-size: 24px;
            font-weight: bold;
            line-height: 70px;
            margin-right: 20px;
          }
          &-team {
            font-style: 16px;
            margin-right: 20px;
            line-height: 70px;
          }
          &-win {
            font-weight: bold;
            line-height: 70px;
            font-size: 16px;
          }
        }
      }
      &-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 0 50px;
        background-color: #f6f6f6;
        box-sizing: border-box;
        .r-1 {
          width: 20%;
        }
        .r-2 {
          width: 5%;
        }
        .r-3 {
          width: 75%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          & div {
            flex: 1;
            text-align: center;
          }
        }
      }
      &-title {
        font-size: 20px;
        font-weight: bold;
        background-color: #dddddd;
        height: 70px;
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
