<template>
  <div class="program-swiper" :style="{ marginBottom: marginBottom + 'px' }">
    <div class="left-arrow" @click="handleLeft">
      <left
        theme="filled"
        size="36"
        fill="#fff"
        style="margin-top: 2px; margin-left: -2px"
      />
    </div>
    <div class="right-arrow" @click="handleRight">
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
          :class="projectIndex == index ? 'project-active' : ''"
        >
          <div class="type">{{ item.type }}</div>
          <div
            class="status"
            :class="
              item.status == 1 ? 'yellow' : item.status == 2 ? 'blue' : 'gray'
            "
          >
            {{
              item.status == 1
                ? "未开始"
                : item.status == 2
                ? "进行中"
                : "已结束"
            }}
          </div>
          <div class="date">
            <div>{{ item.date.slice(5, 10) }}</div>
            <div>{{ item.date.slice(10, 16) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramSwiper",
  props: {
    marginBottom: {
      type: String,
      default: 0,
    },
  },
  data() {
    return {
      projectList: [
        {
          id: 1,
          type: "1/16",
          status: 1,
          date: "2024-10-10 16:40",
        },
        {
          id: 2,
          type: "小组赛1",
          status: 2,
          date: "2024-10-10 16:40",
        },
        {
          id: 3,
          type: "1/小组赛1",
          status: 0,
          date: "2024-10-10 16:40",
        },
        {
          id: 4,
          type: "1/小组赛2",
          status: 2,
          date: "2024-10-10 16:40",
        },
        {
          id: 5,
          type: "小组赛5",
          status: 0,
          date: "2024-10-10 16:40",
        },
        {
          id: 6,
          type: "小组赛",
          status: 1,
          date: "2024-10-10 16:40",
        },
        {
          id: 7,
          type: "1/16",
          status: 2,
          date: "2024-10-10 16:40",
        },
        {
          id: 8,
          type: "小组赛16",
          status: 1,
          date: "2024-10-10 16:40",
        },
        {
          id: 9,
          type: "456",
          status: 0,
          date: "2024-10-10 16:40",
        },
        {
          id: 10,
          type: "123",
          status: 2,
          date: "2024-10-10 16:40",
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
      this.projectIndex = index;
    },
    handleLeft() {
      if (this.projectIndex > 0) {
        this.projectIndex -= 1;
      }
    },
    handleRight() {
      if (this.projectIndex + 1 < this.projectList.length) {
        this.projectIndex += 1;
      }
    },
  },
  watch: {},
  computed: {
    projectStyle() {
      let style = {
        width: this.projectList.length * 210 + "px",
        transform: "translateX(0px)",
      };
      if (this.projectIndex >= 6) {
        style.transform = `translateX(-${
          (this.projectIndex - 6) * 210 + 80
        }px)`;
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
      height: 130px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: nowrap;
      box-sizing: border-box;
      transition: all 0.5s;
    }
    &-item {
      width: 200px;
      margin-right: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      border: 2px solid #efefef;
      box-sizing: border-box;
      border-radius: 8px;
      flex: 1;
      cursor: pointer;
      border: 1px solid #efefef;
      .type {
        width: 100%;
        font-style: 14px;
        height: 60px;
        font-weight: bold;
        background-color: #e5f0f9;
        color: #666;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .status {
        font-style: 18px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
      }
      .date {
        width: 100%;
        height: 30px;
        color: #666;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & div {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    &-active {
      border: 2px solid @main;
      .type {
        background-color: @main;
        color: white;
      }
    }
  }
  .iconpark-icon {
    color: @main;
  }
}
</style>
