<template>
  <div class="home">
    <div class="title">
      <div>跆拳道</div>
    </div>
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
          <a-select-option value="jack"> 跆拳道/成年组1 </a-select-option>
          <a-select-option value="lucy"> 跆拳道/成年组2 </a-select-option>
          <a-select-option value="disabled"> 跆拳道/成年组3 </a-select-option>
          <a-select-option value="Yiminghe"> 跆拳道/成年组4 </a-select-option>
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
    <div class="pro">
      <div class="pro-name">今日项目：</div>
      <div class="pro-list">
        <div class="pro-item" v-for="(item, index) in projectList" :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="sch">
      <div class="sch-list">
        <div class="sch-title">
          <div class="i1">开始时间</div>
          <div class="i2">地点</div>
          <div class="i3">场次</div>
          <div class="i4">
            <div>　</div>
            <div>　</div>
            <div>　</div>
            <div>　</div>
            <div>　</div>
          </div>
          <div class="i5">状态</div>
        </div>
        <div
          class="sch-item"
          v-for="(item, index) in matchList"
          :key="index"
          @click="matchDetail(item)"
        >
          <div class="i1">{{ item.time }}</div>
          <div class="i2">{{ item.addr }}</div>
          <div class="i3">{{ item.venue }}</div>
          <div class="i4">
            <div>{{ item.num }}</div>
            <div>
              <div>{{ item.num }}</div>
              <div>{{ item.team }}</div>
            </div>
            <div>{{ item.player }}</div>
            <div>{{ item.type }}</div>
            <div>{{ item.date }}</div>
          </div>

          <div
            class="i5"
            :class="
              item.status == 1 ? 'blue' : item.status == 2 ? 'yellow' : 'gray'
            "
          >
            {{
              item.status == 1 ? "进行中" : item.status == 2 ? "未开始" : "完成"
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectMatchList",
  title: "赛事列表",
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
          id: "1",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 2,
        },
        {
          id: "1",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 0,
        },
        {
          id: "1",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 1,
        },
        {
          id: "1",
          time: "9:00",
          addr: "合川体育馆",
          venue: "女子49公斤级16强",
          num: "#101",
          team: "酉阳土家族苗族自治县",
          area: "九龙坡",
          player: "运动员/运动员/运动员",
          type: "PTG",
          status: 2,
        },
      ],
      projectList: [
        {
          id: 1,
          name: "100米",
        },
        {
          id: 2,
          name: "200米",
        },
        {
          id: 3,
          name: "400米",
        },
        {
          id: 4,
          name: "800米",
        },
        {
          id: 5,
          name: "跳远",
        },
        {
          id: 6,
          name: "三级跳",
        },
        {
          id: 7,
          name: "跳高",
        },
        {
          id: 8,
          name: "撑杆跳",
        },
        {
          id: 9,
          name: "投掷",
        },
        {
          id: 10,
          name: "三级跳1",
        },
        {
          id: 11,
          name: "三级跳2",
        },
        {
          id: 12,
          name: "三级跳3",
        },
        {
          id: 13,
          name: "三级跳4",
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
.home {
  width: 100%;
  .title {
    font-weight: bold;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
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
        background-color: #0167c3;
        border: 1px solid #0167c3;
        color: white;
      }
    }
  }
  .sch {
    width: 100%;
    &-list {
    }

    &-title,
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      font-size: 16px;
      flex: 1;
      border-bottom: 1px solid @main;
      box-sizing: border-box;
      cursor: pointer;
      .i1 {
        width: 10%;
        text-align: center;
      }
      .i2 {
        width: 10%;
      }
      .i3 {
        width: 10%;
      }
      .i4 {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex: 1;
      }

      .i5 {
        width: 10%;
        text-align: center;
      }
    }
    &-item:hover {
      background-color: #e5f0f9;
    }
    &-title {
      font-weight: bold;
      background-color: #e5f0f9;
      font-size: 20px;
      border-bottom: 1px solid #e5f0f9;
      cursor: auto;
    }
  }
  .pro {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    &-name {
      font-size: 20px;
      color: #333;
      height: 40px;
    }
    &-list {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
    }
    &-item {
      color: #999999;
    }
    &-active {
      color: #333;
    }
  }
}
</style>
