<template>
  <div>
    <div v-for="(item, index) in urls" :key="index" class="block" @click="showBigPic(item)">
      <el-tooltip class="item" effect="dark" content="点击查看大图" placement="top-start">
        <el-image :src="item" style="width: 200px; height: 200px" class="box">
          <div slot="placeholder" class="content">
            <span class="el-icon-loading load" ></span>
            <div >检测中</div>
          </div>
        </el-image>
      </el-tooltip>
      <el-tag v-if="showImgName" type="info" style="display: table-row-group">{{ imgNames[index] }}</el-tag>

    </div>
    <el-upload
      class="upload-demo"
      drag
      :action="host"
      multiple
      :on-success="handlSuccess"
      :data="{'type': 'detect'}"
      :file-list="fileList">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只支持jpeg/jpg/png图片</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props:{
      "showImgName": Boolean
    },
    data() {
      return {
        urls: [],
        fileList: [],
        host: "http://yh31388655.zicp.vip",
        dialogImageUrl: '',
        dialogVisible: false,
        imgNames: [],
        //showImgName: true
      };
    },
    methods: {
      handlSuccess(res, file){
        //let url = URL.createObjectURL(file.raw)
        let url = this.host + '/' + res
        this.urls.push(url)
        this.imgNames.push(file['name'])
      },
      showBigPic(url){
        this.dialogImageUrl = url;
        this.dialogVisible = true;
      },
      clearScreen(){
        this.urls = []
        this.fileList = []
      },
    },
    mounted(){
      //this.$parent.$parent.$parent.setDefaultItem("2")
    },
    beforeRouteLeave(){
      //this.$parent.$parent.$parent.setDefaultItem("1")
    }
  }
</script>

<style lang="css" scoped>
.block{
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  transform: translate3d(0, 0, 0);
}

.item {
  margin: 4px;
}

.load {
  text-align: center;
  color: #5cb6ff;
}

.box {
  position: relative;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content div {
  transform: translate(-25%, 0);
  color: #5cb6ff;
}
</style>