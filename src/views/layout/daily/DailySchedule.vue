<template>
  <div class="daily">
    <div class="select">
      <div class="left">
        <a-select
          default-value="lucy"
          style="width: 170px; font-weight: bold"
          @change="handleChange"
          size="large"
        >
          <template slot="menuItemSelectedIcon">
            <up-one theme="filled" size="14" fill="#C4C4C4" :strokeWidth="1" />
          </template>
          <template slot="suffixIcon">
            <down-one
              theme="filled"
              size="14"
              fill="#C4C4C4"
              :strokeWidth="1"
            />
          </template>
          <a-select-option value="jack"> 2024年1月 </a-select-option>
          <a-select-option value="lucy"> 2024年2月 </a-select-option>
          <a-select-option value="disabled"> 2024年3月 </a-select-option>
          <a-select-option value="Yiminghe">2024年4月 </a-select-option>
        </a-select>
      </div>
      <div class="date">
        <div
          class="date-item"
          v-for="(item, index) in dateList"
          :key="index"
          @click="hangldeDate(item, index)"
          :class="dateIndex == index ? 'date-active' : ''"
        >
          {{ item.date }}
        </div>
      </div>
    </div>
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
          v-for="(item, index) in matchList"
        >
          <template #header="props">
            <div
              class="match-title"
              :style="{ backgroundColor: props.isActive ? '#e5f0f9' : '#fff' }"
            >
              <svg
                class="iconpark-icon"
                style="width: 40px; height: 40px; margin-right: 5px"
              >
                <use :href="item.icon" color="#0167C3"></use>
              </svg>
              <span>{{ item.title }}</span>
            </div>
          </template>
          <div class="match">
            <div class="match-item" v-for="(i, j) in item.child" :key="j">
              <div class="match-left">{{ i.time }}</div>
              <div class="match-center">
                <div>
                  <div>{{ i.project }}</div>
                  <div>
                    <dot
                      theme="filled"
                      size="8"
                      fill="#999"
                      :strokeWidth="1"
                      style="margin: 0 10px"
                    />
                    <span>预赛</span>
                  </div>
                </div>
                <div>{{ i.address }}</div>
              </div>
              <div class="match-right" @click="matchDetail(item)">
                <span>查看详情</span>
                <arrow-right
                  theme="filled"
                  size="20"
                  fill="#999"
                  :strokeWidth="3"
                  style="margin: 8px 0 0 8px"
                />
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
  name: "DailySchedule",
  title: "每日赛程",
  props: {},
  data() {
    return {
      dateList: [
        {
          date: "1.1(一)",
        },
        {
          date: "1.2(二)",
        },
        {
          date: "1.3(三)",
        },
        {
          date: "1.4(四)",
        },
        {
          date: "1.5(五)",
        },
        {
          date: "1.6(六)",
        },
        {
          date: "1.6(六)",
        },
        {
          date: "1.6(六)",
        },
        {
          date: "1.6(六)",
        },
        {
          date: "1.6(六)",
        },
        {
          date: "1.6(六)",
        },
        {
          date: "1.6(六)",
        },
      ],
      dateIndex: 0,
      activeKey: ["1"],
      customStyle: "background-color: #fff;border: 0;overflow: hidden;",
      matchList: [
        {
          title: "足球",
          id: "1",
          icon: "#q3",
          child: [
            {
              id: 1,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "体育中心",
            },
            {
              id: 2,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "体育中心",
            },
            {
              id: 3,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "体育中心",
            },
          ],
        },
        {
          id: "2",
          icon: "#q2",
          title: "跆拳道",
          child: [
            {
              id: 1,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "体育中心",
            },
            {
              id: 2,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "体育中心",
            },
            {
              id: 3,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "体育中心",
            },
          ],
        },
        {
          id: "3",
          icon: "#q1",
          title: "自由搏击",
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
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    hangldeDate(item, index) {
      this.dateIndex = index;
    },
    handleClick(event) {
      event.stopPropagation();
    },
    matchDetail(item) {
      this.$router.push({ name: "MatchDetail" });
    },
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
};
</script>

<style scoped lang="less">
.daily {
  width: 100%;
  .select {
    display: flex;
    justify-content: flex-start;
    .left {
      margin-right: 20px;
    }
    .date {
      display: flex;

      justify-content: flex-start;
      flex-wrap: wrap;
      &-item {
        margin-right: 10px;
        width: 110px;
        height: 50px;
        border: 1px solid #efefef;
        border-radius: 4px;
        color: #999;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin-bottom: 10px;
        font-size: 20px;
      }
      &-active {
        border: 1px solid #0167c3;
        background-color: #0167c3;
        color: white;
      }
    }
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
      font-weight: bold;
      height: 70px;
      padding-left: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 22px;
    }
    .match {
      background-color: #fff;
      &-left {
        position: relative; // 添加相对定位
        width: 160px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: #333;
        font-weight: bold;
        &::before {
          content: "";
          width: 6px;
          height: 40px;
          background-color: #0167c3;
          position: absolute; // 使用绝对定位
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &::after {
          content: "";
          width: 1px;
          height: 60px;
          background-color: #cdcdcd;
          position: absolute; // 使用绝对定位
          right: -1px; // 负值等于 ::before 的宽度
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &-item {
        display: flex;
        height: 100px;
        margin-bottom: 20px;
        justify-content: space-between;
        margin-top: 10px;
        border-radius: 4px;
        box-shadow: 0px 4px 25px 0px rgba(51, 51, 51, 0.1);
      }
      &-center {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        box-sizing: border-box;

        & div:first-child {
          font-size: 18px;
          color: #333;
          font-weight: bold;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          & div:first {
            font-size: 20px;
            color: #333;
            font-weight: bold;
          }
          & div:last-child {
            color: #999;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }
        & div:last-child {
          font-size: 16px;
          color: #999;
        }
      }
      &-right {
        position: relative;
        width: 170px;
        height: 100%;
        color: #cdcdcd;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #999;
        &::before {
          content: "";
          width: 1px;
          height: 60px;
          background-color: #cdcdcd;
          position: absolute; // 使用绝对定位
          left: -1px; // 负值等于 ::before 的宽度
          top: 50%;
          transform: translateY(-50%);
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
  /deep/ .ant-select {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: @main;
  }
  /deep/ .ant-select-selection--single {
    border: 1px solid @main;
    width: 100%;
    height: 50px;
  }
  /deep/ .ant-select-selection__rendered {
    line-height: 50px;
  }
  /deep/ .ant-select-arrow {
    font-size: 18px;
    font-weight: bold;
    color: @main;
  }
}
</style>
