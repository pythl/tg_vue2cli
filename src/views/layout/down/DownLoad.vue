<template>
  <div class="download">
    <div class="row">
      <div class="row-item" v-for="(item, index) in matchList" :key="index">
        <!-- <div class="row-left">{{ item.time }}</div> -->
        <div class="row-center">
          <div>
            <div>{{ item.project }}</div>
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
          <div>{{ item.time }}</div>
        </div>
        <div class="row-right" @click="downLoad(item)">
          <span>文件下载</span>

          <download
            theme="filled"
            size="20"
            fill="#808080"
            :strokeWidth="3"
            style="margin: 8px 0 0 8px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownLoad",
  title: "下载中心",
  props: {},
  data() {
    return {
      matchList: [
        {
          id: 1,
          time: "2024-09-28",
          project: "成年乙组跆拳道正式赛预赛",
          address: "合川体育中心",
        },
        {
          id: 2,
          time: "2024-09-28",
          project: "成年乙组跆拳道正式赛预赛",
          address: "合川体育中心",
        },
        {
          id: 3,
          time: "2024-09-28",
          project: "成年乙组跆拳道正式赛预赛",
          address: "合川体育中心",
        },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {
    downLoad(item) {
      console.log(111, "downLoad");
    },
  },
  watch: {},
};
</script>

<style scoped lang="less">
.download {
  .row {
    background-color: #fff;
    // &-left {
    //   position: relative; // 添加相对定位
    //   width: 160px;
    //   height: 100%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   font-size: 18px;
    //   color: #333;
    //   font-weight: bold;
    //   &::before {
    //     content: "";
    //     width: 6px;
    //     height: 40px;
    //     background-color: #0167c3;
    //     position: absolute; // 使用绝对定位
    //     left: 0;
    //     top: 50%;
    //     transform: translateY(-50%);
    //   }
    //   &::after {
    //     content: "";
    //     width: 1px;
    //     height: 60px;
    //     background-color: #cdcdcd;
    //     position: absolute; // 使用绝对定位
    //     right: -1px; // 负值等于 ::before 的宽度
    //     top: 50%;
    //     transform: translateY(-50%);
    //   }
    // }

    &-item {
      display: flex;
      height: 100px;
      margin-bottom: 20px;
      justify-content: space-between;
      margin-top: 10px;
      border-radius: 4px;
      box-shadow: 0px 4px 25px 0px rgba(51, 51, 51, 0.1);
      position: relative;
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
    &-center::before {
      content: "";
      width: 6px;
      height: 40px;
      background-color: #0167c3;
      position: absolute; // 使用绝对定位
      left: 0;
      top: 50%;
      transform: translateY(-50%);
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
      color: #0167c3;
      position: relative;
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
</style>
