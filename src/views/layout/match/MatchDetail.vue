<template>
  <div class="match-detail">
    <div class="swiper">
      <div class="title">
        <div>跆拳道</div>
        <div class="title-sub">/ 个人竞技男子乙组65kg</div>
      </div>
      <div class="tab">
        <div
          class="tab-item"
          v-for="(item, index) in tabList"
          :key="index"
          :class="tabId == item.id ? 'tab-active' : ''"
          @click="hangldeTab(item)"
        >
          {{ item.name }}
        </div>
      </div>
      <ScheduleSwiper marginBottom="30" />
      <!-- <HeavyTeamCollapse /> -->
      <!-- <HeavySingleCollapse /> -->
      <HeavyScoreCollapse v-if="tabId == 1" />
      <ProjectReported v-else-if="tabId == 2" />
      <ProjectMedal v-else-if="tabId == 3" />
      <ReportForms v-else-if="tabId == 4" />
    </div>
  </div>
</template>

<script>
import ScheduleSwiper from "@/components/match/ScheduleSwiper";
import HeavyTeamCollapse from "@/components/match/HeavyTeamCollapse";
import HeavySingleCollapse from "@/components/match/HeavySingleCollapse ";
import HeavyScoreCollapse from "@/components/match/HeavyScoreCollapse";
import ProjectReported from "@/components/report/ProjectReported";
import ProjectMedal from "@/components/medal/ProjectMedal";
import ReportForms from "@/components/report/ReportForms";
export default {
  name: "MatchDetail",

  props: {},
  data() {
    return {
      tabList: [
        {
          id: 1,
          name: "对战数据",
        },
        {
          id: 2,
          name: "报项",
        },
        {
          id: 3,
          name: "奖牌榜",
        },
        {
          id: 4,
          name: "报表",
        },
      ],
      tabId: 1,
    };
  },
  components: {
    ScheduleSwiper,
    HeavyTeamCollapse,
    HeavySingleCollapse,
    HeavyScoreCollapse,
    ProjectReported,
    ProjectMedal,
    ReportForms,
  },
  mounted() {},
  methods: {
    hangldeTab(item) {
      this.tabId = item.id;
    },
  },
  watch: {},
};
</script>

<style scoped lang="less">
.match-detail {
  width: 100%;
  .swiper {
    width: 100%;

    .title {
      font-weight: bold;
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &-sub {
        color: #999;
        font-size: 20px;
        margin-left: 10px;
      }
    }
    .tab {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 30px;
      &-item {
        margin-right: 10px;
        border: 1px solid @main;
        box-sizing: border-box;
        height: 50px;
        padding: 0 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: @main;
        font-size: 18px;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
      }
      &-active {
        background-color: @main;
        color: #fff;
      }
    }
  }
}
</style>
