<template>
<div>
  <el-upload
  action="http://yh31388655.zicp.vip"
  list-type="picture-card"
  :auto-upload="true"
  :on-success="handleSuccess"
  :data="{'type': 'classify'}">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <el-tooltip class="item" effect="light" :content="currentObjs" placement="top-start">
        <img
          class="el-upload-list__item-thumbnail"
          :src="file.url" alt="">
      </el-tooltip>
      
      <!-- <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span> -->
    </div>
    
  </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        objs: ["['knife, gun']"],
      };
    },
    computed:{
      currentObjs(){
        return 'fuck'
      }
    },
    methods: {
      handleSuccess(res){
        console.log('wahahah')
        console.log(res)
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      loginfo(file){
        console.log(file);
      },
    }
  }
</script>

<style>
.el-upload-list--picture-card .el-upload-list__item {
  width: 200px;
  height: 200px;
}
.el-upload--picture-card {
  width:200px;
  height: 200px;
}


.el-upload--picture-card i {
    font-size: 28px;
    color: #8c939d;
    margin-top: 80px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.item {
  margin: 4px;
}


</style>