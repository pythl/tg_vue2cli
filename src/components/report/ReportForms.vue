<template>
  <div class="home">
    <div class="collapse">
      <div class="row">
        <div class="row-item row-title">
          <div class="r-1">
            <div>文件类型</div>
            <sort
              theme="filled"
              style="margin-top: 3px; cursor: pointer"
              size="20"
              fill="#c4c4c4"
              :strokeWidth="1"
            />
          </div>
          <div class="r-2">
            <div>项目</div>
            <sort
              theme="filled"
              style="margin-top: 3px; cursor: pointer"
              size="20"
              fill="#c4c4c4"
              :strokeWidth="1"
            />
          </div>
          <div class="r-3">
            <div>报表名称</div>
            <sort
              theme="filled"
              style="margin-top: 3px; cursor: pointer"
              size="20"
              fill="#c4c4c4"
              :strokeWidth="1"
            />
          </div>
          <div class="r-4">
            <div>更新时间</div>
            <sort
              theme="filled"
              style="margin-top: 3px; cursor: pointer"
              size="20"
              fill="#c4c4c4"
              :strokeWidth="1"
            />
          </div>
        </div>
        <div class="row-item" v-for="(item, index) in matchList" :key="index">
          <div class="r-1">{{ item.type }}</div>
          <div class="r-2">{{ item.venue }}</div>
          <div class="r-3">
            <div class="name">{{ item.name }}</div>
            <download
              theme="filled"
              size="20"
              fill="#808080"
              :strokeWidth="3"
              style="margin: 8px 0 0 8px"
            />
          </div>
          <div class="r-4">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportForms",
  props: {},
  data() {
    return {
      activeKey: ["1"],
      customStyle: "background-color: #fff;border: 0;overflow: hidden;",
      matchList: [
        {
          id: "1",
          type: "大项报表1",
          venue: "女子49公斤级16强",
          name: "名次公告",
          date: "2024-01-01",
        },
        {
          id: "2",
          type: "大项报表2",
          venue: "女子49公斤级16强",
          name: "名次公告",
          date: "2024-01-01",
        },
        {
          id: "3",
          type: "大项报表3",
          venue: "女子49公斤级16强",
          name: "名次公告",
          date: "2024-01-01",
        },
        {
          id: "4",
          type: "大项报表4",
          venue: "女子49公斤级16强",
          name: "名次公告",
          date: "2024-01-01",
        },
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped lang="less">
.home {
  width: 100%;
  .collapse {
    width: 100%;

    .row {
      width: 100%;

      &-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid @main;
        height: 70px;
        padding: 0 50px;
        box-sizing: border-box;
        font-size: 16px;
        .r-1 {
          width: 10%;
          text-align: center;
          margin-right: auto;
          display: flex;
          align-items: center;
          div {
            position: relative;
            span {
              position: absolute;
              top: 50%;
              transform: translateY(-30%);
              z-index: 999;
              right: 20px;
            }
          }
        }
        .r-2 {
          width: 25%;
          display: flex;
          align-items: center;
          div {
            position: relative;
            span {
              position: absolute;
              top: 50%;
              transform: translateY(-30%);
              z-index: 999;
              right: 20px;
            }
          }
        }
        .r-3 {
          width: 40%;
          display: flex;
          align-items: center;
          cursor: pointer;
          .name {
            color: @main;
          }
          div {
            position: relative;

            span {
              position: absolute;
              top: 50%;
              transform: translateY(-30%);
              z-index: 999;
              right: 20px;
            }
          }
        }
        .r-4 {
          width: 20%;
          display: flex;
          align-items: center;
          div {
            position: relative;
            span {
              position: absolute;
              top: 50%;
              transform: translateY(-30%);
              z-index: 999;
              right: 20px;
            }
          }
        }
      }
      &-title {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        background-color: @mainBg;
        border-bottom: none;
        color: #333;
        .r-3 {
          cursor: auto;
        }
      }
    }
  }
  //  重置折叠面板
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
