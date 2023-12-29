<!-- 图片裁剪 -->
<template>
  <a-modal
    title="上传图片"
    :visible="visible"
    :maskClosable="false"
    :confirmLoading="confirmLoading"
    :width="400"
    :destroyOnClose="true"
    :footer="null"
    @cancel="cancelHandel">
    <a-row>
      <p>注：若图片无法上传，请检查图片大小，图片控制在1M以内</p>
      <a-col :xs="24" :md="24" :style="{height: '350px'}">
        <vue-cropper
          ref="cropper"
          :img="options.img"
          :info="true"
          outputType="png"
          :autoCrop="options.autoCrop"
          :autoCropWidth="cutImgWidth"
          :autoCropHeight="cutImgHeight"
          :fixedBox="options.fixedBox"
          :fixedNumber="fixedNumber"
          :fixed="true"
        >
        </vue-cropper>
      </a-col>
    </a-row>
    <br>
    <a-row>
      <a-col :lg="6" :md="6">
        <a-upload name="file" :beforeUpload="beforeUpload" :showUploadList="false">
          <a-button icon="upload">选择图片</a-button>
        </a-upload>
      </a-col>
      <a-col :lg="{span: 2, offset: 2}" :md="2">
        <a-button icon="plus" @click="changeScale(1)"/>
      </a-col>
      <a-col :lg="{span: 2, offset: 1}" :md="2">
        <a-button icon="minus" @click="changeScale(-1)"/>
      </a-col>
      <a-col :lg="{span: 2, offset: 1}" :md="2">
        <a-button icon="undo" @click="rotateLeft"/>
      </a-col>
      <a-col :lg="{span: 2, offset: 1}" :md="2">
        <a-button icon="redo" @click="rotateRight"/>
      </a-col>
      <a-col :lg="{span: 2, offset: 1}" :md="2">
        <a-button type="primary" @click="finish('blob')">保存</a-button>
      </a-col>
    </a-row>
  </a-modal>

</template>
<script>
import { VueCropper } from 'vue-cropper'
import config from '@/http/config'
import * as qiniu from 'qiniu-js'
export default {
  components: {
    VueCropper
  },
  props: {
    upToken: {
      type: String,
      default: null
    },
    cutImgWidth: {
      type: Number,
      default: 147
    },
    cutImgHeight: {
      type: Number,
      default: 206
    },
    fixedNumber: {
      type: Array,
      default: () => [1, 1]
    }
  },
  data () {
    return {
      visible: false,
      id: null,
      confirmLoading: false,
      uploading: false,
      upFile: null,
      newUpToken: '',
      imgurl: config.baseImgURL,
      options: {
        img: '',
        autoCrop: true,
        fixedBox: false
      }
    }
  },
  methods: {
    edit (id) {
      this.visible = true
      this.id = id
      this.$api.match.getUpToken().then(res => {
        if (res.status === 0) {
          this.newUpToken = res.data.upToken
        }
      })
      /* 获取原始头像 */
    },
    close () {
      this.id = null
      this.visible = false
      this.options.img = ''
    },
    cancelHandel () {
      this.close()
    },
    changeScale (num) {
      num = num || 1
      this.$refs.cropper.changeScale(num)
    },
    rotateLeft () {
      this.$refs.cropper.rotateLeft()
    },
    rotateRight () {
      this.$refs.cropper.rotateRight()
    },
    beforeUpload (file) {
      // 获取文件后缀名称
      this.upFile = file
      const reader = new FileReader()
      // 把Array Buffer转化为blob 如果是base64不需要
      // 转化为base64
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.options.img = reader.result
      }
      return false
    },

    // 上传图片（点击上传按钮）
    finish (type) {
      // 输出
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          let key = new Date().getTime() + '_'+ Math.floor(Math.random() * 1000000000000) + '.' + this.upFile.name.substring(this.upFile.name.lastIndexOf('.') + 1)// 文件资源名
          let config = { useCdnDomain: true }
          let putExtra = {
            fname: this.upFile.name,
            params: {}
          }
          let that = this
          let observe = {
            next (res) {
              console.log('上传进度：' + Math.floor(res.total.percent) + '%')
              // 向父组件通知上传进度
              that.$emit('percent', Math.floor(res.total.percent))
            },
            error (err) {
              that.$message.error('上传失败' + err.message)
            },
            complete (res) {
              let fileServerPath = 'https://static.daoba.com/' + res.key
              that.$message.success('上传成功')
              that.options.img = fileServerPath
              that.$emit('ok', fileServerPath)
              that.cancelHandel()
            }
          }
          console.log('newUpToken', this.newUpToken)
          let observable = qiniu.upload(data, key, this.newUpToken, putExtra, config)
          observable.subscribe(observe)
        })



        // const _this = this
        // const formData = new FormData()
        // this.$refs.cropper.getCropBlob((data) => {
        //   const img = window.URL.createObjectURL(data)
        //   this.model = true
        //   this.modelSrc = img
        //   formData.append('file', data, Math.floor(Math.random() * 1000000000000) + '.' + this.upFileSuffix)
        //   this.$api.match.upload(formData, { contentType: false, processData: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        //     .then((response) => {
        //       if (response.status === 0) {
        //         _this.$message.success('上传成功')
        //         this.visible = false
        //         _this.options.img = response.data.url
        //         _this.$emit('ok', response.data.url)
        //         _this.cancelHandel()
        //       } else {
        //         _this.$message.err('上传失败')
        //       }
        //     })
        // })
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.model = true
          this.modelSrc = data
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>

  .avatar-upload-preview {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    border-radius: 50%;
    box-shadow: 0 0 4px #ccc;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
