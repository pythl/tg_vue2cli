<template>
  <div class="report-detail">
    <div class="title">{{ cityName }}</div>
    <div class="collapse">
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
                <div>男：8人</div>
                <div>女：4人</div>
                <div>总：12人</div>
              </div>
            </div>
          </template>
          <div class="match">
            <div
              class="match-item"
              v-for="(i, j) in item.child"
              :key="j"
              @click="handlePlayer(i)"
            >
              <img :src="i.img" alt="" />
              <div class="name">{{ i.name }}</div>
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportDetail",
  props: {},
  data() {
    return {
      cityName: "",
      activeKey: ["1"],
      customStyle: "background-color: #fff;border: 0;overflow: hidden;",
      projectList: [
        {
          name: "跆拳道1",
          icon: "q3",
          id: "1",
          child: [
            {
              id: 1,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
            },
            {
              id: 1,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
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
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
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
            },
            {
              id: 2,
              name: "运动员1",
              sex: 2,
              img: require("@/assets/images/man.png"),
            },
            {
              id: 3,
              name: "运动员1",
              sex: 1,
              img: require("@/assets/images/woman.png"),
            },
          ],
        },
      ],
    };
  },
  components: {},
  mounted() {
    console.log(1111, this.$route.params);
    this.cityName = this.$route.params.name;
  },
  methods: {
    handlePlayer(item) {
      this.$router.push({ name: "PlayerDetail", params: { ...item } });
    },
  },
  watch: {},
};
</script>

<style scoped lang="less">
.report-detail {
  width: 100%;
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .collapse {
    width: 100%;
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
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex: 1;
      gap: 20px;
      padding: 30px 0;
      box-sizing: border-box;
      &-item {
        width: 154px;
        display: flex;
        height: 240px;
        margin-bottom: 20px;
        justify-content: flex-start;
        flex-direction: column;
        background-color: #f1f1f1;
        border-radius: 4px;
        box-shadow: 0px 4px 25px 0px rgba(51, 51, 51, 0.1);
        box-sizing: border-box;
        cursor: pointer;
        img {
          width: 100%;
          height: 190px;
          border-radius: 4px 4px 0 0;
        }
        .name {
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 10px;
          font-size: 18px;
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
