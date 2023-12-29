<template>
  <div class="overall-schedule">
    <div class="swiper">
      <div class="title">开幕式前及异地办赛项目</div>
      <ProgramSwiper />
    </div>
    <div class="schedule">
      <div class="schedule-title">
        <div class="left">运动会总日程</div>
        <div class="right">
          <div class="right-item">
            <div>比赛日：</div>
            <div></div>
          </div>
          <div class="right-item">
            <div>决赛日：</div>
            <div style="background-color: #fdb202"></div>
          </div>
          <div class="right-item">
            <div>开/闭幕式：</div>
            <div>
              <torch
                theme="outline"
                size="20"
                fill="#0167c3"
                :strokeWidth="1"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 赛程标题 -->
      <div class="row title">
        <div class="project">项目</div>
        <div class="date" v-for="(item, index) in dateList" :key="index">
          <div>{{ item.date }}</div>
          <div>{{ item.week }}</div>
        </div>
        <div class="medal">决赛</div>
      </div>
      <!-- >开/闭幕式 -->
      <div class="row">
        <div class="project">开/闭幕式</div>
        <div class="date" v-for="(item, index) in dateList" :key="index">
          <div
            class="date-item"
            v-if="index == 0 || index == dateList.length - 1"
          >
            <div style="margin: 0; padding: 0">
              <torch
                class="use"
                theme="outline"
                size="20"
                fill="#0167c3"
                :strokeWidth="1"
              />
            </div>
          </div>
          <div class="date-item" v-else>　</div>
        </div>
        <div class="medal"></div>
      </div>
      <!-- 赛程 -->
      <div class="row hover" v-for="(item, y) in projectList" :key="y">
        <div class="project">
          <div class="project-item">
            <svg class="iconpark-icon" style="width: 30px; height: 30px">
              <use :href="item.icon" color="#0167C3"></use>
            </svg>
            <div>{{ item.projectName }}</div>
          </div>
        </div>
        <div class="date">
          <div
            class="date-item"
            v-for="(i, x) in item.dateList"
            :key="x"
            @mouseover="handleMouseOver(i, x, y)"
            :style="{ backgroundColor: hoveredIndex == x ? '#e5f0f9' : '' }"
          >
            <a-popover trigger="hover" v-if="i.status != 0">
              <template slot="content">
                <p>Content</p>
              </template>
              <template v-if="i.status == 1">
                <div class="bg yellow"></div>
              </template>
              <template v-else-if="i.status == 2">
                <div class="bg blue"></div>
              </template>
            </a-popover>
            <div class="bg" v-else></div>
          </div>
        </div>
        <div class="medal">{{ item.medal }}/{{ item.total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgramSwiper from "@/components/match/ProgramSwiper";
export default {
  name: "OverallSchedule",
  title: "总赛程",
  props: {},
  data() {
    return {
      dateList: [
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
        {
          date: "2/26",
          week: "星期一",
        },
      ],
      projectList: [
        {
          projectName: "跆拳道1",
          icon: "#q1",
          medal: 0,
          total: 10,
          dateList: [
            {
              status: 1,
              des: "合川体育馆1",
            },
            {
              status: 1,
              des: "合川体育馆2",
            },
            {
              status: 2,
              des: "合川体育馆3",
            },
            {
              status: 0,
              des: "合川体育馆4",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
          ],
        },
        {
          projectName: "跆拳道2",
          icon: "#q1",
          medal: 0,
          total: 10,
          dateList: [
            {
              status: 1,
              des: "合川体育馆1",
            },
            {
              status: 2,
              des: "合川体育馆2",
            },
            {
              status: 2,
              des: "合川体育馆3",
            },
            {
              status: 0,
              des: "合川体育馆4",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
          ],
        },
        {
          projectName: "跆拳道3",
          icon: "#q1",
          medal: 0,
          total: 10,
          dateList: [
            {
              status: 1,
              des: "合川体育馆1",
            },
            {
              status: 1,
              des: "合川体育馆2",
            },
            {
              status: 2,
              des: "合川体育馆3",
            },
            {
              status: 0,
              des: "合川体育馆4",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
          ],
        },
        {
          projectName: "跆拳道3",
          icon: "#q1",
          medal: 0,
          total: 10,
          dateList: [
            {
              status: 1,
              des: "合川体育馆1",
            },
            {
              status: 1,
              des: "合川体育馆2",
            },
            {
              status: 2,
              des: "合川体育馆3",
            },
            {
              status: 0,
              des: "合川体育馆4",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
          ],
        },
        {
          projectName: "跆拳道3",
          icon: "#q1",
          medal: 0,
          total: 10,
          dateList: [
            {
              status: 1,
              des: "合川体育馆1",
            },
            {
              status: 1,
              des: "合川体育馆2",
            },
            {
              status: 2,
              des: "合川体育馆3",
            },
            {
              status: 0,
              des: "合川体育馆4",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
          ],
        },
        {
          projectName: "跆拳道3",
          icon: "#q1",
          medal: 0,
          total: 10,
          dateList: [
            {
              status: 1,
              des: "合川体育馆1",
            },
            {
              status: 1,
              des: "合川体育馆2",
            },
            {
              status: 2,
              des: "合川体育馆3",
            },
            {
              status: 0,
              des: "合川体育馆4",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
          ],
        },
        {
          projectName: "跆拳道3",
          icon: "#q1",
          medal: 0,
          total: 10,
          dateList: [
            {
              status: 1,
              des: "合川体育馆1",
            },
            {
              status: 1,
              des: "合川体育馆2",
            },
            {
              status: 2,
              des: "合川体育馆3",
            },
            {
              status: 0,
              des: "合川体育馆4",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
            {
              status: 1,
              des: "合川体育馆5",
            },
            {
              status: 0,
              des: "合川体育馆6",
            },
            {
              status: 1,
              des: "合川体育馆7",
            },
            {
              status: 1,
              des: "合川体育馆8",
            },
            {
              status: 2,
              des: "合川体育馆9",
            },
            {
              status: 1,
              des: "合川体育馆10",
            },
          ],
        },
      ],
      hoveredIndex: null,
    };
  },
  components: {
    ProgramSwiper,
  },
  mounted() {},
  methods: {
    handleMouseOver(_, j, index) {
      console.log(111, j, index);
      this.hoveredIndex = j;
    },
  },
  watch: {},
};
</script>

<style scoped lang="less">
.swiper {
  width: 100%;

  .title {
    font-weight: bold;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
}
.schedule {
  padding-top: 20px;
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .left {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
    .right {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:first-child div:nth-child(2) {
          width: 60px;
          height: 30px;
          background-color: #0167c3;
          border-radius: 4px;
          margin-right: 10px;
        }
        &:nth-child(2) div:nth-child(2) {
          width: 60px;
          height: 30px;
          border-radius: 4px;
          margin-right: 10px;
          background-color: yellow;
        }
        &:nth-child(3) div:nth-child(2) {
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(200deg);
        }
      }
    }
  }
  .row {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    .project {
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      &-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & div {
          margin-left: 10px;
        }
      }
    }
    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1; // 剩余空间平均分配给每个 date-item
      height: 60px;
      box-sizing: border-box;
      .use {
        transform: rotate(200deg);
        margin-left: -10px;
      }
      &-item {
        height: 60px;
        flex-grow: 1; // 剩余空间平均分配给每个 date-item
        text-align: center;
        display: flex;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        .bg {
          width: 60px;
          height: 30px;
          border-radius: 4px;
          cursor: pointer;
        }
        .yellow {
          background-color: #fdb202;
        }
        .blue {
          background-color: #0167c3;
        }
      }
    }
    .medal {
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .hover:hover {
    background-color: #e5f0f9;
  }
  .title {
    height: 70px;
    background-color: #0167c3;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 4px 4px 0 0;
    .date {
      flex-direction: column;
      gap: 10px;
      & div:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
      }
      & div:nth-child(2) {
        font-size: 14px;
      }
    }
  }
}
</style>
