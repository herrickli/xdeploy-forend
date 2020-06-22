<template>
  <div>
    <div v-for="(item, index) in urls" :key="index" class="block" >
      <el-tooltip class="item" effect="dark" content="点击查看大图" placement="top-start">
        <div style="width: 200px;">
          <el-image :src="item" style="width: 200px; height: 200px" class="box" @click="showBigPic(item)"> 
          <div slot="placeholder" class="content">
            <span class="el-icon-loading load" ></span> 
          </div>
        </el-image>
        <el-tag v-if="showImgName" type="info" style="display: table-row-group">{{ imgNames[index] }}</el-tag>
        <el-tag  v-for="(name, name_index) in objs[index]" :key="name_index" :type="getImportant(name)"
        style="margin-top: 2px">{{name}}</el-tag>
        </div>
      </el-tooltip>
    </div>
    <el-upload
      class="upload-demo"
      drag
      :action="host"
      multiple
      :on-success="handlSuccess"
      :data="{'type': 'classify'}"
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
      'showImgName': Boolean
    },
    data() {
      return {
        urls: [],
        fileList: [],
        host: "http://yh31388655.zicp.vip",
        dialogImageUrl: '',
        dialogVisible: false,
        objs: [],
        imgNames: [],
        //showImgName: this.showImgName
      };
    },
    methods: {
      handlSuccess(res, file){
        let url = URL.createObjectURL(file.raw)
        this.urls.push(url)
        // deal response
        let names = res.split(',')
        this.objs.push(names)
        this.imgNames.push(file['name'])
      },
      showBigPic(url){
        this.dialogImageUrl = url;
        this.dialogVisible = true;
      },
      getImportant(name){
        name = name.trim()
        if (name == 'knife' || name == 'gun' || name == 'grenade') return 'danger'
        if (name == 'scissors' || name == 'hammer' || name == 'firecracker') return 'warning'
        if (name == 'bottle' || name == 'battery') return ''
        return 'info'
      },
      clearScreen(){
        this.fileList = []
        this.urls = []
        this.imgNames = []
        this.objs = []
      },
    },
    mounted(){
      //this.$parent.$parent.$parent.setDefaultItem("2")
    },
    beforeRouteUpdate(){
      //this.$parent.$parent.$parent.setDefaultItem("2")
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

.el-tag {
  margin-right: 3px;
  margin-bottom: 3px;
}
</style>