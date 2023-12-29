<template>
  <div class="home">
    <TabList :tabList="teamList" v-model="selectedTeam" />
    <TabList :tabList="medalList" v-model="selectedType" marginRight="10px" />
    <div class="collapse">
      <a-collapse
        v-model="activeKey"
        expand-icon-position="right"
        :bordered="false"
        @change="addStyle"
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
          v-for="(item, index) in projectList"
        >
          <template #header="props">
            <div
              class="match-title"
              :style="{
                backgroundColor: props.isActive ? '#e5f0f9' : '#fff',
                borderBottom: props.isActive ? 'none' : '2px solid #0167c3',
              }"
            >
              <div class="left">
                <svg
                  class="iconpark-icon"
                  style="width: 50px; height: 50px; margin-right: 20px"
                >
                  <use :href="'#' + item.icon" style="color: #0167c3"></use>
                </svg>
                <div>{{ item.name }}</div>
              </div>
              <div class="right">
                <div>破市最高：3次</div>
                <div>破市记录：4次</div>
                <div>破市甲组：5次</div>
                <div>合计：12次</div>
              </div>
            </div>
          </template>
          <div class="match">
            <div class="title">
              少年乙组-男子25米手枪速射（8"30+30）（个人赛）
            </div>
            <div class="match-list">
              <div class="match-item" v-for="(i, j) in item.child" :key="j">
                <img :src="i.img" alt="" />
                <div class="right">
                  <div class="name">{{ i.name }}</div>
                  <div class="team">代表团：{{ i.team }}</div>
                  <div class="score">成绩：{{ i.score }}</div>
                  <div class="date">时间：{{ i.date }}</div>
                </div>
                <img class="max" src="@/assets/images/max.png" alt="" />
              </div>
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
  name: "RecordBreaking",
  title: "超破纪录",
  props: {},
  data() {
    return {
      teamList: [
        { id: 1, name: "青年组" },
        { id: 2, name: "成年组" },
      ],
      medalList: [
        { id: 1, name: "按比赛项目" },
        { id: 2, name: "按记录类型" },
      ],
      selectedTeam: 1, // 初始化一个值，用于双向绑定
      selectedType: 1, // 初始化一个值，用于双向绑定
      activeKey: ["1"],
      customStyle: "background-color: #fff;border: 0; overflow: visible;",
      projectList: [
        {
          name: "跆拳道1",
          icon: "q3",
          id: "1",
          child: [
            {
              id: 1,
              name: "运动员2",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 1,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
          ],
        },
        {
          id: "2",
          name: "跆拳道2",
          icon: "q3",
          child: [
            {
              id: 1,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
          ],
        },
        {
          id: "3",
          name: "跆拳道3",
          icon: "q3",
          child: [
            {
              id: 1,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
              team: "垫江县",
              score: "586_20x",
              date: "2024-09-08",
            },
          ],
        },
      ],
    };
  },
  components: {
    TabList,
  },
  mounted() {
    this.overflowVisible();
  },
  methods: {
    overflowVisible() {
      this.$nextTick(() => {
        const customCollapseContents = document.querySelectorAll(
          ".ant-collapse-content.ant-collapse-content-active"
        );
        customCollapseContents.forEach((content) => {
          content.style.overflow = "visible";
        });
      });
    },
    addStyle() {
      this.overflowVisible();
    },
  },
  watch: {
    selectedTeam(newTabId) {
      console.log("selectedTeam:", newTabId);
    },
    selectedType(newTabId) {
      console.log("selectedType:", newTabId);
    },
  },
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  .collapse {
    width: 100%;
    overflow: visible !important;
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
    .match-title {
      background-color: #e5f0f9;
      border-bottom: 2px solid #0167c3;

      height: 70px;
      padding-left: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 80px;
      box-sizing: border-box;
      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: bold;
        font-size: 22px;
      }
      .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 16px;
        & div {
          margin-left: 40px;
          color: #333;
          font-weight: 600;
        }
      }
    }
    .match {
      width: 100%;
      background-color: #fff;
      overflow: visible;
      .title {
        font-weight: bold;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 20px;
      }
      &-list {
        display: flex;
        justify-content: flex-start;
        gap: 40px;
        flex-wrap: wrap;
        padding-bottom: 30px;
      }
      &-item {
        width: 440px;
        height: 190px;
        display: flex;
        justify-content: flex-start;
        border-radius: 4px;
        box-shadow: 0px 4px 25px 0px rgba(51, 51, 51, 0.1);
        box-sizing: border-box;
        position: relative;
        img {
          width: 154px;
          height: 190px;
          border-radius: 4px 4px 0 0;
          margin-right: 30px;
        }
        .name {
          font-weight: bold;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 18px;
          margin-top: 20px;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .team,
        .score,
        .date {
          line-height: 30px;
        }
        .max {
          width: 117px;
          height: 87px;
          position: absolute;
          right: -50px;
          bottom: -20px;
          z-index: 99999;
        }
      }
    }
  }
}
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
