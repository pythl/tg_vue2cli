<template>
  <div :style="{ '--width': size[0], '--height': size[1] }">
    <a-upload
      name="avatar"
      :multiple="multiple"
      :listType="listType"
      class="avatar-uploader"
      :fileList="files"
      :before-upload="beforeUpload"
      @preview="handleConverPreview"
      @change="handleConverChange"
      :openFileDialogOnClick="!cutImg"
      :disabled="false"
    >
      <div v-if="cutImg && files.length < length" @click="$refs.imgCut.edit(1)">
        <template v-if="listType != 'text'">
          <a-icon type="plus" />
        </template>
        <div :style="{ color: listType != 'text' ? '#666' : '#40a9ff', cursor: 'pointer' }">{{ uploadText }}</div>
      </div>
      <div v-if="!cutImg && files.length < length">
        <template v-if="listType != 'text'">
          <a-icon type="plus" />
        </template>
        <div :style="{ color: listType != 'text' ? '#666' : '#40a9ff', cursor: 'pointer' }">{{ uploadText }}</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="previewVisible = false">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
    <img-cut
      ref="imgCut"
      @ok="setavatar"
      :cutImgWidth="cutRange[0]"
      :cutImgHeight="cutRange[1]"
      :fixedNumber="cutRange"
      :fixed="keepCutFixed"
      :upToken="upToken"
    ></img-cut>
  </div>
</template>
<script>
import ImgCut from './ImgCut'
import * as qiniu from 'qiniu-js'
// 图片压缩库
import * as imageConversion from 'image-conversion'
function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export default {
  model: {
    prop: 'filePathList',
    event: 'event',
  },
  props: {
    // 文件大小限制, -1表示无限制，单位 KB
    fileMaxSize: {
      type: Number,
      default: -1,
    },
    // 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card
    listType: {
      type: String,
      default: 'picture-card',
    },
    // 是否要裁剪图片
    cutImg: {
      type: Boolean,
      default: true,
    },
    filePathList: {
      type: Array,
      default: () => {
        return []
      },
    },
    // 上传文字
    uploadText: {
      type: String,
      default: '',
    },
    // 要上传的图片个数
    length: {
      type: Number,
      default: 1,
    },
    // 裁剪框
    cutRange: {
      type: Array,
      default: () => {
        return [200, 200]
      },
    },
    // 是否保持裁剪比例, 默认为true
    keepCutFixed: {
      type: Boolean,
      default: true,
    },
    // 组件大小 [width, height]
    size: {
      type: Array,
      default: () => {
        return ['50px', '50px']
      },
    },
    // 允许上传的文件格式, 默认为图片
    fileFormat: {
      type: Array,
      default: () => {
        return ['jpg', 'png', 'jpeg', 'webp']
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    // 是否启用压缩, 默认为启用
    compress: {
      type: Boolean,
      default: true,
    },
    // 压缩图片大小, 默认压缩到300KB
    compressSize: {
      type: Number,
      default: 300,
    },
  },
  components: {
    ImgCut,
  },
  data () {
    return {
      //   imgurl: config.baseImgURL,
      files: [],
      previewVisible: false,
      previewImage: '',
      upToken: null,
      canUp: true,
      fileUrlList: [],
    }
  },
  mounted () {
    this.$api.jlp.fileUpToken().then((res) => {
      if (res.status === 0) {
        this.upToken = res.data.upToken
      }
    })
    this.fileUrlList = this.filePathList
    this.createFileData()
  },
  methods: {
    beforeUpload (file) {
      this.canUp = true
      let fileName = file.name
      // 获取文件后缀
      let suffix = fileName.substring(fileName.lastIndexOf('.') + 1)
      if (this.fileFormat.length > 0) {
        if (this.fileFormat.indexOf(suffix) == -1) {
          this.$message.error('只允许上传' + this.fileFormat + '格式的文件')
          this.canUp = false
          return false
        }
      }
      if (!this.fileMaxSize === -1) {
        if (file.size / 1024 > this.fileMaxSize) {
          this.$message.error('文件大小不能超过' + this.fileMaxSize / 1024 + 'M')
          this.canUp = false
          return false
        }
      }
      // 如果是图片检查图片是否需要压缩
      if (
        ['jpg', 'png', 'jpeg', 'webp'].indexOf(suffix) > -1 &&
        file.size / 1024 > this.compressSize &&
        this.compress
      ) {
        // 如果是图片，并且图片大小大于200K，启用压缩
        console.log('压缩图片.....')
        const that = this
        return new Promise((resolve) => {
          imageConversion
            .compressAccurately(file, {
              size: that.compressSize,
              accuracy: 0.9,
              scale: 0.5, // 尺寸缩放比例
            })
            .then((res) => {
              res['name'] = file.name
              resolve(res)
            })
        })
      }
      return false
    },
    async handleConverPreview (file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleConverChange ({ file, fileList }) {
      if (fileList.length === 0) {
        this.files = []
        this.modlFile([])
        return
      }
      if (file.status === 'removed') {
        let index = this.filePathList.indexOf(file.url)
        this.filePathList.splice(index, 1)
      }
      if (file != null && this.canUp && file.status != 'removed') {
        let uid = file.uid
        for (let i = 0; i < fileList.length; i++) {
          if (fileList[i].originFileObj && fileList[i].originFileObj.uid == uid) {
            this.uploadFile(fileList[i])
            break
          }
        }
      }
    },
    setavatar (url) {
      this.addFileObj(url)
    },
    uploadFile (file) {
      let key = new Date().getTime() + '_'+ Math.floor(Math.random() * 1000000000000) + '.' + file.name.substring(file.name.lastIndexOf('.') + 1) // 文件资源名
      let config = { useCdnDomain: true }
      let putExtra = {
        fname: file.name,
        params: {},
      }
      let that = this
      let observe = {
        next (res) {
          // 向父组件通知上传进度
          that.$emit('percent', Math.floor(res.total.percent))
        },
        error (err) {
          that.$message.error('上传失败' + err.message)
        },
        complete (res) {
          let fileServerPath = 'https://static.daoba.com/' + res.key
          that.addFileObj(fileServerPath)
        },
      }
      let observable = qiniu.upload(file.originFileObj, key, this.upToken, putExtra, config)
      observable.subscribe(observe)
    },
    createFileData () {
      this.files = []
      if (this.fileUrlList != null && this.fileUrlList.length > 0) {
        this.fileUrlList.forEach((item) => {
          this.addFileObj(item)
        })
      }
    },
    addFileObj (filePath) {
      let randomNum = Math.floor(Math.random() * 100000)
      let fileSuffix = filePath.substring(filePath.lastIndexOf('.'), filePath.length)
      const fileObj = {
        uid: randomNum + '',
        name: randomNum + fileSuffix,
        status: 'done',
        url: filePath,
        response: { qiniuUrl: filePath },
      }
      this.files.push(fileObj)
      this.modlFile(this.files)
    },
    modlFile (fs) {
      this.fileUrlList = []
      fs.forEach((item) => {
        this.fileUrlList.push(item.url)
      })
      this.$emit('event', this.fileUrlList)
    },
  },
  watch: {
    filePathList (newValue) {
      this.files = []
      this.fileUrlList = newValue
      if (newValue != null && newValue.length > 0) {
        this.fileUrlList.forEach((filePath) => {
          let randomNum = Math.floor(Math.random() * 100000)
          let fileSuffix = filePath.substring(filePath.lastIndexOf('.'), filePath.length)
          const fileObj = {
            uid: randomNum + '',
            name: randomNum + fileSuffix,
            status: 'done',
            url: filePath,
            response: { qiniuUrl: filePath },
          }
          this.files.push(fileObj)
        })
      }
    },
  },
}
</script>

<style scoped lang="less">
/deep/.avatar-uploader > .ant-upload {
  width: var(--width);
  height: var(--height);
}
/deep/.ant-upload-list-picture-card-container {
  float: left;
  width: var(--width);
  height: var(--height);
  margin: 0 8px 8px 0;
}
/deep/.ant-upload-list-picture-card .ant-upload-list-item {
  float: left;
  width: var(--width);
  height: var(--height);
  margin: 0 8px 8px 0;
}
/deep/.ant-upload-list-item {
  position: relative;
  height: 66px;
  padding: 1px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
/deep/.ant-upload-list-item-info {
  border-radius: 4px;
}
.ant-upload-select-picture-card i {
  color: #999;
}

/deep/ .ant-upload-list-picture-card .ant-upload-list-item {
  width: var(--width);
  height: var(--height);
}
</style>
