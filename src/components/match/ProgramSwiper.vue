<template>
  <div class="program-swiper">
    <div class="left-arrow" @click="handleLeft" v-if="projectIndex > 0">
      <left
        theme="filled"
        size="36"
        fill="#fff"
        style="margin-top: 2px; margin-left: -2px"
      />
    </div>
    <div
      class="right-arrow"
      @click="handleRight"
      v-if="projectIndex < projectList.length - 10"
    >
      <right
        theme="filled"
        size="36"
        fill="#fff"
        style="margin-top: 2px; margin-right: -2px"
      />
    </div>
    <div class="project" v-if="projectList.length > 0">
      <div :style="projectStyle" class="project-list">
        <div
          class="project-item"
          v-for="(item, index) in projectList"
          :key="index"
          @click="handleProject(item, index)"
        >
          <svg class="iconpark-icon" style="width: 72px; height: 72px">
            <use :href="item.icon" color="#0167C3"></use>
          </svg>
          <div class="team">({{ item.team }})</div>
          <div class="name">{{ item.name }}</div>
          <div class="date">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramSwiper",
  props: {},
  data() {
    return {
      projectList: [
        {
          id: 1,
          name: "跆拳道",
          icon: "#q1",
          date: "2024-10-10",
          team: "青少组1",
        },
        {
          id: 2,
          name: "跆拳道",
          icon: "#q2",
          date: "2024-10-10",
          team: "青少组2",
        },
        {
          id: 3,
          name: "跆拳道",
          icon: "#q3",
          date: "2024-10-10",
          team: "青少组3",
        },
        {
          id: 4,
          name: "跆拳道",
          icon: "#q4",
          date: "2024-10-10",
          team: "青少组4",
        },
        {
          id: 5,
          name: "跆拳道",
          icon: "#q5",
          date: "2024-10-10",
          team: "青少组5",
        },
        {
          id: 6,
          name: "跆拳道",
          icon: "#q1",
          date: "2024-10-10",
          team: "青少组6",
        },
        {
          id: 7,
          name: "跆拳道",
          icon: "#q2",
          date: "2024-10-10",
          team: "青少组7",
        },
        {
          id: 8,
          name: "跆拳道",
          icon: "#q3",
          date: "2024-10-10",
          team: "青少组8",
        },
        {
          id: 9,
          name: "跆拳道",
          icon: "#q4",
          date: "2024-10-10",
          team: "青少组9",
        },
        {
          id: 10,
          name: "跆拳道",
          icon: "#q5",
          date: "2024-10-10",
          team: "青少组10",
        },
        {
          id: 11,
          name: "跆拳道",
          icon: "#q1",
          date: "2024-10-10",
          team: "青少组11",
        },
        {
          id: 12,
          name: "跆拳道",
          icon: "#q2",
          date: "2024-10-10",
          team: "青少组12",
        },
        {
          id: 13,
          name: "跆拳道",
          icon: "#q3",
          date: "2024-10-10",
          team: "青少组13",
        },
      ],
      projectIndex: 0,
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleProject(item, index) {
      console.log("handleProject", this.projectIndex, index);
      this.$router.push({ name: "ProjectMatchList" });
    },
    handleLeft() {
      if (this.projectIndex > 0) {
        this.projectIndex -= 1;
      }
    },
    handleRight() {
      if (this.projectIndex < this.projectList.length - 10) {
        this.projectIndex += 1;
      }
    },
  },
  watch: {},
  computed: {
    projectStyle() {
      let style = {
        width: this.projectList.length * 140 + "px",
        transform: "translateX(0px)",
      };
      if (this.projectIndex <= this.projectList.length - 10) {
        style.transform = `translateX(-${this.projectIndex * 140}px)`;
      }
      return style;
    },
  },
};
</script>

<style scoped lang="less">
.program-swiper {
  width: 100%;
  position: relative;

  .left-arrow {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #cdcdcd;
    color: white;
    top: 50%;
    left: -56px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    box-sizing: border-box;
    cursor: pointer;
    opacity: 0.8;
    animation: all 0.3s;
  }
  .right-arrow {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #cdcdcd;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
    cursor: pointer;
    box-sizing: border-box;
    opacity: 0.8;
    animation: all 0.3s;
  }
  .left-arrow:hover,
  .right-arrow:hover {
    opacity: 1;
  }
  .project {
    width: 100%;
    overflow: hidden;

    &-list {
      height: 160px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      box-sizing: border-box;
      transition: all 0.5s;
    }
    &-item {
      width: 130px;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid #efefef;
      box-sizing: border-box;
      border-radius: 8px;
      flex: 1;
      cursor: pointer;

      .team {
        font-style: 14px;
        font-weight: bold;
      }
      .name {
        font-style: 18px;
        font-weight: bold;
      }
      .date {
        color: #999;
        font-size: 14px;
      }
      &:hover {
        background: linear-gradient(
          137.57deg,
          rgb(15, 199, 249) 0%,
          rgb(3, 59, 166) 90.206%
        );
        box-shadow: 0px 4px 15px 0px rgba(51, 51, 51, 0.25);
        color: white;
        .date {
          color: #fff;
        }
        use {
          color: white;
        }
      }
    }
  }
  .iconpark-icon {
    color: @main;
  }
}
</style>
