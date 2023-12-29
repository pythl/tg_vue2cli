<!-- 上传图片封装组件 -->
<template>
  <div>
    <a-upload
      :action="imgurl"
      :listType="listType"
      :fileList="imgs"
      :v-decorator="decorator"
      :disabled="disabled"
      @preview="handleConverPreview"
      @change="handleConverChange"
      :openFileDialogOnClick="!cutImg"
    >
      <div v-if="cutImg && imgs.length < length" @click="$refs.imgCut.edit(1)">
        <a-icon type="plus" />
        <div class="ant-upload-text">{{ uploadTest }}</div>
      </div>
      <div v-if="!cutImg && imgs.length < length">
        <a-icon type="plus" />
        <div class="ant-upload-text">{{ uploadTest }}</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="previewCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
    <img-cut ref="imgCut" @ok="setavatar" :cutImgWidth="cutImgWidth" :cutImgHeight="cutImgHeight" :fixedNumber="fixedNumber"></img-cut>
  </div>
</template>
<script>
import ImgCut from './ImgCut'
import config from '@/http/config'
function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
export default {
  components: {
    ImgCut
  },
  props: {
    listType: {
      type: String,
      default: 'picture-card'
    },
    imgs: {
      type: Array,
      default: () => {
        return []
      }
    },
    decorator: {
      type: Array,
      default: () => {
        return []
      }
    },
    pictures: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 要上传的图片个数
    length: {
      type: Number,
      default: 1
    },
    // 是否要裁剪图片
    cutImg: {
      type: Boolean,
      default: true
    },
    // 裁剪区域宽度
    cutImgWidth: {
      type: Number,
      default: 147
    },
    // 裁剪区域高度
    cutImgHeight: {
      type: Number,
      default: 206
    },
    // 裁剪比例
    fixedNumber: {
      type: Array,
      default: () => [1, 1]
    },
    uploadTest: {
      type: String,
      default: 'Upload'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      imgurl: config.baseImgURL,
      previewVisible: false,
      previewImage: ''
    }
  },
  methods: {
    clickCut () {
      this.$refs.imgCut.edit(1)
    },
    setImgs (imgsAry) {
      if (imgsAry != null && imgsAry.length > 0) {
        imgsAry.forEach(item => {
          var randomNum = Math.floor(Math.random() * 100000)
          const file = {
            uid: randomNum + '',
            name: randomNum + '.png',
            status: 'done',
            url: item,
            response: { qiniuUrl: item }
          }
          this.imgs.push(file)
        })
      }
    },
    async handleConverPreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleConverChange ({ fileList }) {
      console.log('fileList', fileList)
      this.imgs = fileList
      this.$emit('uploadSuccess', fileList)
    },
    previewCancel () {
      this.previewVisible = false
    },
    setavatar (url) {
      var randomNum = Math.floor(Math.random() * 100000)
      var file = {
        uid: randomNum + '',
        name: randomNum + '.png',
        status: 'done',
        url: url,
        response: { data: url }
      }
      this.imgs.push(file)
      this.uploadSuccess(this.imgs)
    },
    uploadSuccess (imgs) {
      this.$emit('uploadSuccess', imgs)
    }
  },
  watch: {
    pictures: {
      handler (newVal) {
        if (this.imgs.length === 0) {
          if (newVal !== null && newVal.length > 0) {
            this.setImgs(newVal)
          }
        }
      },
      deep: true
    }
  }
}
</script>
