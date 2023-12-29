<template>
  <div class="medal-list">
    <TabList :tabList="tabList" v-model="selectedTeam" />
    <TabList
      :tabList="medalList"
      v-model="selectedMedal"
      :select="true"
      :selectList="selectList"
      marginRight="20px"
    />

    <!--  bgColor="#e5f0f9" -->
    <div class="collapse">
      <div class="ask" @click="handleHelp">
        <help
          theme="filled"
          size="20"
          fill="#999999"
          :strokeWidth="4"
        />记牌计分办法
      </div>
      <div class="row row-title">
        <div>名次</div>
        <div>代表团</div>
        <div>
          <img src="@/assets/images/jin.png" alt="" srcset="" />
          <sort theme="filled" size="20" fill="#c4c4c4" :strokeWidth="1" />
        </div>
        <div>
          <img src="@/assets/images/yin.png" alt="" srcset="" />
          <sort theme="filled" size="20" fill="#c4c4c4" :strokeWidth="1" />
        </div>
        <div>
          <img src="@/assets/images/tong.png" alt="" srcset="" />
          <sort theme="filled" size="20" fill="#c4c4c4" :strokeWidth="1" />
        </div>
        <div>
          <img src="@/assets/images/total.png" alt="" srcset="" />
          <sort theme="filled" size="20" fill="#c4c4c4" :strokeWidth="1" />
        </div>
        <div>团体总分</div>
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
            <div class="row">
              <div>{{ item.id }}</div>
              <div>{{ item.name }}</div>
              <div>
                {{ item.gold }}
              </div>
              <div>
                {{ item.silver }}
              </div>
              <div>
                {{ item.copper }}
              </div>
              <div>
                {{ item.copper }}
              </div>
              <div>{{ item.total }}</div>
            </div>
          </template>
          <div class="content">
            <div class="medal">
              <div
                class="medal-item"
                v-for="(item, index) in tabMedal"
                :key="index"
                @click="medalTab(item)"
              >
                <div class="name">{{ item.name }}</div>
                <div
                  class="line"
                  :style="{
                    backgroundColor: item.id == medalId ? '#0167C3' : '#f6f6f6',
                  }"
                ></div>
              </div>
            </div>
            <div style="padding-left: 20px">
              <TabList
                :tabList="medalSelect"
                v-model="selectTab"
                height="40px"
                marginRight="10px"
                ref="score"
              />
            </div>
            <div class="content-row" style="font-size: 18px; font-weight: bold">
              <div>序号</div>
              <div>运动员</div>
              <div>项目</div>
              <div>
                <template v-if="selectTab != 1">
                  <template v-if="selectTab == 2">两次积分单位</template>
                  <template v-else-if="selectTab == 3">大赛成绩</template>
                  <template v-else-if="selectTab == 4">输送地</template>
                </template>
              </div>
              <div>奖牌</div>
            </div>
            <div class="content-row">
              <div>1</div>
              <div>运动员1</div>
              <div>项目</div>
              <div>
                <template v-if="selectTab != 1">
                  <template v-if="selectTab == 2">两次积分单位</template>
                  <template v-else-if="selectTab == 3">大赛成绩</template>
                  <template v-else-if="selectTab == 4">输送地</template>
                </template>
              </div>
              <div>
                <template v-if="medalId == 1">
                  <img src="@/assets/images/jin.png" alt="" srcset="" />
                  <template v-if="selectTab == 3">222</template>
                  <error
                    theme="filled"
                    size="14"
                    fill="#333"
                    :strokeWidth="1"
                  />
                  111
                </template>
                <template v-else-if="medalId == 2">
                  <img src="@/assets/images/yin.png" alt="" srcset="" />
                  <template v-if="selectTab == 3">222</template>
                  <error
                    theme="filled"
                    size="14"
                    fill="#333"
                    :strokeWidth="1"
                  />
                  111
                </template>
                <template v-else-if="medalId == 3">
                  <img src="@/assets/images/tong.png" alt="" srcset="" />
                  <template v-if="selectTab == 3">222</template>
                  <error
                    theme="filled"
                    size="14"
                    fill="#333"
                    :strokeWidth="1"
                  />
                  111
                </template>
                <template v-else-if="medalId == 4"> 5352 </template>
              </div>
            </div>
            <div class="mypage">
              <a-pagination :default-current="6" :total="500" />
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>
<script>
import TabList from "@/components/match/TabList";
export default {
  name: "MedalList",
  title: "奖牌榜",
  props: {},
  data() {
    return {
      tabList: [
        { id: 1, name: "青年组" },
        { id: 2, name: "成年组" },
      ],
      medalList: [
        { id: 1, name: "代表团总成绩榜" },
        { id: 2, name: "比赛成绩榜" },
      ],
      selectList: [
        {
          id: 1,
          name: "单项奖牌榜1",
        },
        {
          id: 2,
          name: "单项奖牌榜2",
        },
        {
          id: 3,
          name: "单项奖牌榜3",
        },
      ],
      selectedTeam: 1, // 初始化一个值，用于双向绑定
      selectedMedal: 1, // 初始化一个值，用于双向绑定
      selectTab: 1,
      activeKey: ["1"],
      customStyle: "background-color: #fff;border: 0;overflow: hidden;",
      matchList: [
        {
          id: "1",
          name: "代表团1",
          gold: 1,
          silver: 1,
          copper: 2,
          total: 4,
          child: [
            {
              id: 1,
              name: "代表团1",
              gold: 1,
              silver: 1,
              copper: 2,
            },
            {
              id: 2,
              name: "代表团2",
              gold: 1,
              silver: 1,
              copper: 2,
            },
            {
              id: 3,
              name: "代表团3",
              gold: 1,
              silver: 1,
              copper: 2,
              total: 4,
            },
          ],
        },
        {
          id: "2",
          name: "代表团1",
          gold: 1,
          silver: 1,
          copper: 2,
          total: 4,
          child: [
            {
              id: 1,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              address: "合川体育中心",
            },
            {
              id: 2,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              address: "合川体育中心",
            },
            {
              id: 3,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              address: "合川体育中心",
            },
          ],
        },
        {
          id: "3",
          name: "代表团1",
          gold: 1,
          silver: 1,
          copper: 2,
          total: 4,
          child: [
            {
              id: 1,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              address: "合川体育中心",
            },
            {
              id: 2,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              address: "合川体育中心",
            },
            {
              id: 3,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              address: "合川体育中心",
            },
          ],
        },
      ],
      tabMedal: [
        {
          id: 1,
          name: "金牌",
        },
        {
          id: 2,
          name: "银牌",
        },
        {
          id: 3,
          name: "铜牌",
        },
        {
          id: 4,
          name: "团体总分",
        },
      ],
      tabId: 1,
      medalSelect: [
        {
          id: 1,
          name: "比赛获得",
        },
        {
          id: 2,
          name: "两次计分获得",
        },
        {
          id: 3,
          name: "高水平赛事获得",
        },
        {
          id: 4,
          name: "选招输送获得",
        },
      ],
      medalId: 1,
    };
  },
  components: {
    TabList,
  },
  mounted() {},
  methods: {
    medalTab(item) {
      this.medalId = item.id;
      this.selectedTab = 1;
      console.log(this.$refs);
    },
    handleHelp() {
      this.$router.push({ name: "ScoringMethod" });
    },
  },
  watch: {
    selectedTeam(newTabId) {
      console.log("selectedTeam:", newTabId);
    },
    selectMedal(newTabId) {
      console.log("selectedMedal:", newTabId);
    },
    selectTab(newTabId) {
      console.log("selectTab:", newTabId);
    },
  },
};
</script>

<style scoped lang="less">
.medal-list {
  width: 100%;
  .collapse {
    width: 100%;
    position: relative;
    .ask {
      position: absolute;
      top: -30px;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #999999;
      span {
        margin-bottom: -5px;
        margin-right: 5px;
        cursor: pointer;
      }
    }
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      border-bottom: 1px solid @main;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      img {
        width: 67px;
        height: 66px;
        border-radius: 50%;
      }
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-30%);
        z-index: 999;
        right: 20px;
      }
      & div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & div:nth-child(1) {
        width: 10%;
      }
      & div:nth-child(2) {
        justify-content: flex-start;
        width: 25%;
      }
      & div:nth-child(3) {
        width: 10%;
        position: relative;
      }
      & div:nth-child(4) {
        width: 10%;
        position: relative;
      }
      & div:nth-child(5) {
        width: 10%;
        position: relative;
      }
      & div:nth-child(6) {
        width: 10%;
        position: relative;
      }
      & div:nth-child(7) {
        width: 25%;
        text-align: center;
      }
      &-title {
        font-size: 20px;
        font-weight: bold;
        background-color: @mainBg;
        border-bottom: none;
      }
    }

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
      padding-top: 4px;
    }

    .content {
      width: 100%;
      background-color: #f6f6f6;
      padding: 30px 0;
      box-sizing: border-box;
      .medal {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        &-item {
          cursor: pointer;
          margin-right: 30px;
          .name {
            margin-bottom: 10px;
            color: #333;
            font-weight: bold;
            font-size: 20px;
            padding: 0 10px;
          }
          .line {
            width: 100%;
            height: 2px;
          }
        }
      }
      &-row {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        & div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70px;
          font-weight: 600;
          border-bottom: 1px solid #dddddd;
        }
        & div:nth-child(1) {
          width: 10%;
        }
        & div:nth-child(2) {
          width: 20%;
        }
        & div:nth-child(3) {
          width: 30%;
        }
        & div:nth-child(4) {
          width: 20%;
        }
        & div:nth-child(5) {
          width: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
          // font-size: 16px;
          img {
            width: 46px;
            height: 46px;
          }
          span {
            margin-top: 2px;
            margin-right: 5px;
          }
        }
      }

      .mypage {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
      }
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
</style>
