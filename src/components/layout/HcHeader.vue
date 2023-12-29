<template>
  <div class="hc-header">
    <div class="hc-header-1">
      <div class="left">
        <RouterLink :to="{ name: 'Home' }">
          <img class="logo" src="@/assets/images/header/logo.png" alt="" />
        </RouterLink>
        <div class="title">
          <div class="title-txt">2024年重庆市第七届运动会</div>
          <div class="title-des">The 7th Chongqing Municipal Games 2024</div>
        </div>
      </div>
      <div class="right">七运会竞赛系统</div>
    </div>
    <div class="hc-header-2"></div>
    <div class="hc-header-3">
      <div class="project">
        <div class="project-list">
          <div
            class="project-item"
            v-for="(item, index) in projectList"
            :key="index"
            @click="handleProject(item)"
          >
            <div>{{ item.name }}</div>
            <div
              class="project-line"
              :style="{
                backgroundColor: item.id == projectId ? '#fff' : '',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HcHeader",
  props: {},
  data() {
    return {
      projectList: [
        {
          id: 1,
          name: "奖牌榜",
          url: "MedalList",
        },
        {
          id: 2,
          name: "总赛程",
          url: "OverallSchedule",
        },

        {
          id: 4,
          name: "比赛项目",
          url: "Competition",
        },
        {
          id: 5,
          name: "创超记录",
          url: "RecordBreaking",
        },
        {
          id: 6,
          name: "报项",
          url: "ReportedItems",
        },
        {
          id: 7,
          name: "下载中心",
          url: "DownLoad",
        },
        {
          id: 3,
          name: "每日赛程",
          url: "DailySchedule",
        },
      ],
      projectId: localStorage.getItem("projectId")
        ? localStorage.getItem("projectId")
        : 1,
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleProject(item) {
      this.projectId = item.id;
      localStorage.setItem("projectId", this.projectId);
      this.$router.push({
        name: item.url,
      });
    },
  },
  watch: {},
};
</script>

<style scoped lang="less">
.hc-header {
  width: 100%;
  height: 500px;
  &-1 {
    width: 1400px;
    margin: 0 auto;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: @main;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .logo {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }

      .title {
        &-txt {
          font-size: 40px;
          font-weight: bold;
        }
        &-des {
          font-size: 20px;
        }
      }
    }
    .right {
      font-size: 28px;
      font-weight: bold;
    }
  }
  &-2 {
    width: 100%;
    height: 280px;
    background-image: url("../../assets/images/header/header-bg.png");
  }
  &-3 {
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, rgb(15, 199, 249), rgb(3, 59, 166) 100%);
    .project {
      width: 1400px;
      height: 80px;
      margin: 0 auto;
      font-size: 24px;
      &-list {
        display: flex;
        height: 80px;
        justify-content: flex-start;
        align-items: center;
        color: #fff;
      }
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 80px;
        cursor: pointer;
      }
      &-line {
        width: 100%;
        height: 4px;
        margin-top: 4px;
      }
      &-active {
        font-weight: bold;
      }
    }
  }
}
</style>
