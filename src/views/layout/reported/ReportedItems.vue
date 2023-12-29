<template>
  <div class="reported">
    <div class="search">
      <a-input
        placeholder="请输入代表团名称"
        @change="onSearch"
        @pressEnter="onSearch"
      >
        <template v-slot:suffix>
          <search theme="outline" size="20" fill="#0167C3" :strokeWidth="1" />
        </template>
      </a-input>
    </div>
    <div class="row" v-for="(item, index) in groupedCities" :key="index">
      <div class="sort">
        <svg class="iconpark-icon" style="width: 50px; height: 50px">
          <use :href="'#' + item.letter"></use>
        </svg>
      </div>
      <div
        class="row-item"
        v-for="(i, j) in item.cities"
        :keyi="j"
        @click="reportDetail(i)"
      >
        {{ i }}
      </div>
    </div>
    <div>{{ groupedCities }}</div>
  </div>
</template>

<script>
import pinyin from "pinyin";
export default {
  name: "ReportedItems",
  title: "报项",
  props: {},
  data() {
    return {
      cityList: [
        "巴南区",
        "城口县",
        "北碚区",
        "璧山区",
        "长寿区",
        "涪陵区",
        "九龙坡区",
        "奉节县",
        "江津区",
        "大渡口区",
        "梁平区",
        "合川区",
        "大足区",
        "南川区",
        "彭水苗族土家族自治县",
        "璧山区",
        "石柱土家族自治县",
        "秀山土家族苗族自治县",
        "酉阳土家族苗族自治县",
        "渝北区",
        "忠县",
      ],
    };
  },
  components: {},
  mounted() {},
  methods: {
    getFirstPinyinLetter(word) {
      const pinyinArray = pinyin(word, { style: pinyin.STYLE_FIRST_LETTER });
      return pinyinArray[0][0].toUpperCase();
    },
    reportDetail(item) {
      this.$router.push({ name: "ReportDetail", params: { name: item } });
    },
    onSearch() {
      console.log("onSearch");
    },
  },
  watch: {},
  computed: {
    groupedCities() {
      const grouped = {};
      this.cityList.forEach((city) => {
        const firstLetter = this.getFirstPinyinLetter(city);
        if (!grouped[firstLetter + firstLetter]) {
          grouped[firstLetter + firstLetter] = [];
        }
        if (!grouped[firstLetter + firstLetter].includes(city)) {
          grouped[firstLetter + firstLetter].push(city);
        }
      });

      return Object.keys(grouped).map((letter) => ({
        letter,
        cities: grouped[letter],
      }));
    },
  },
};
</script>

<style scoped lang="less">
.reported {
  width: 100%;
  .search {
    margin: 0 auto;
    width: 600px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    .sort {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconpark-icon {
        color: #fff;
      }
    }
    .row-item {
      margin-right: 15px;
      border: 1px solid @main;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border-radius: 4px;
      height: 50px;
      font-size: 20px;
      color: #333;
      padding: 0 10px;
      cursor: pointer;
    }
    .row-item:hover {
      background-color: @main;
      color: #fff;
    }
  }
}
/deep/ .ant-input {
  width: 100%;
  height: 70px;
  color: #4091ff;
  border: 1px solid @main;
  padding: 0 10px;
  font-size: 18px;
  box-sizing: border-box;
  border-radius: 10px;
  &::placeholder {
    color: #999999;
    font-size: 16px;
  }
}
/deep/ input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-transition-delay: 99999s;
  -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
}
// /deep/ .ant-input-affix-wrapper .ant-input:not(:first-child) {
//   padding-left: 40px;
// }
</style>
