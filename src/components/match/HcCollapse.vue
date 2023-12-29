<template>
  <div class="hc-collapse">
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

        <a-collapse-panel :key="item.id" :style="customStyle">
          <template #header="props">
            <slot name="header">
              <div
                class="match-title"
                :style="{
                  backgroundColor: props.isActive ? activeBg : bgColor,
                  borderBottom: '2px solid' + border,
                }"
              >
                <svg
                  class="iconpark-icon"
                  style="width: 40px; height: 40px; margin-right: 5px"
                >
                  <use :href="item.icon" color="#0167C3"></use>
                </svg>
                <span>{{ item.title }}</span>
              </div>
            </slot>
          </template>
          <div class="match">
            <slot name="content"></slot>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "HcCollapse",
  props: {
    bgColor: {
      type: String,
      default: "fff",
    },
    activeBg: {
      type: String,
      default: "#fff",
    },
    border: {
      type: String,
      default: "#0167c3",
    },
  },
  data() {
    return {
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
              address: "合川体育中心",
            },
            {
              id: 2,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "合川体育中心",
            },
            {
              id: 3,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "合川体育中心",
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
              address: "合川体育中心",
            },
            {
              id: 2,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "合川体育中心",
            },
            {
              id: 3,
              time: "上午9：00",
              project: "成年乙组跆拳道正式赛预赛",
              type: "1/16",
              address: "合川体育中心",
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
      activeKey: [1],
      customStyle: "background-color: #fff;border: 0;overflow: hidden;",
    };
  },
  components: {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped lang="less">
.hc-collapse {
  width: 100%;
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
}
</style>
