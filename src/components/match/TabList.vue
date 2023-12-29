<template>
  <div class="tab">
    <div
      class="tab-item"
      v-for="(item, index) in tabList"
      :key="index"
      :class="tabId == item.id ? 'tab-active' : ''"
      @click="handleTab(item)"
      :style="{ marginRight: marginRight, height: height }"
    >
      {{ item.name }}
    </div>
    <a-select
      v-if="select"
      :style="{ width: selectWidth, fontWeight: 'bold' }"
      @change="handleChange"
      :defaultValue="selectList[0].id"
    >
      <template slot="menuItemSelectedIcon">
        <up-one theme="filled" size="14" fill="#C4C4C4" :strokeWidth="1" />
      </template>
      <template slot="suffixIcon">
        <down-one theme="filled" size="14" fill="#C4C4C4" :strokeWidth="1" />
      </template>
      <a-select-option :value="i.id" v-for="(i, j) in selectList" :key="j"
        >{{ i.name }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  name: "TabList",
  props: {
    tabList: {
      type: Array,
      default: () => [
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
          name: "成绩汇总",
        },
        {
          id: 5,
          name: "报表",
        },
      ],
    },
    marginRight: {
      type: String,
      default: "0",
    },
    select: {
      type: Boolean,
      default: false,
    },
    selectList: {
      type: Array,
      default: () => [],
    },
    selectWidth: {
      type: String,
      default: "170px",
    },
    height: {
      type: String,
      default: "50px",
    },
  },
  data() {
    return {
      tabId: 1,
    };
  },
  components: {},
  mounted() {},
  methods: {
    handleTab(item) {
      this.tabId = item.id;
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
  watch: {
    // 监听 tabId 变化，当 tabId 变化时触发父组件的 input 事件
    tabId(newTabId) {
      this.$emit("input", newTabId);
    },
  },
};
</script>

<style scoped lang="less">
.tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  &-item {
    border: 1px solid @main;
    box-sizing: border-box;

    padding: 0 30px;
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
/deep/ .ant-select {
  width: 100%;
  height: 50px;
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
/deep/ .ant-select-selection-selected-value {
  padding-left: 15px;
}
</style>
