<template>
<div style="background-color: #EBEBEB;min-height:800px">
  <div style="width:100%;background-color: #636363; overflow: hidden; text-align: center">
    <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%">
        X光危险物品检测
    </span>
    <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
      <el-input
          placeholder="请输入"
          icon="search"
          v-model="searchCriteria"
          :on-icon-click="handleIconClick" 
          clearable>
            <el-button slot="append" icon="el-icon-search">
            </el-button>
      </el-input>
    </span>
    <span style="color: white; margin-left: -25%; font-size: 20px; margin-top: 15px;display: inline-block;">
      {{currentModel}}
    </span>
    <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link" style="color:white">
          admin<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>

    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu :default-active="defaultItem" class="el-menu-vertical-demo" style="min-height:800px" ref="menu">
              <router-link to="/detect" @click.native="changeModel('detect')">
                <el-menu-item index="1"><i class="el-icon-aim"></i>检测模型</el-menu-item>
              </router-link>
              <router-link to="/classify" @click.native="changeModel('classify')">
                <el-menu-item index="2"><i class="el-icon-help"></i>分类模型</el-menu-item>
              </router-link>
              <div class="toolbox">
                <el-row>
                  <i class="el-icon-setting"> 工具箱</i>
                </el-row>
                <el-row>
                  <el-checkbox v-model="showImgName" class="el-checkbox" style="color: black; margin-right:15px">显示图片名</el-checkbox>
                </el-row>
                <el-row>
                  <el-button type="primary" plain round size="mini" style="width:100px" @click="clear">清屏</el-button>
                   <!-- <el-checkbox v-model="clearScreen" class="el-checkbox" style="color: black; margin-right:15px">清屏</el-checkbox> -->
                </el-row>
                </div>
              <!-- <router-link to="/test">
                <el-menu-item index="3"><i class="el-icon-question"></i>导航二</el-menu-item>
              </router-link> -->
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
        <div>
          <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
            <keep-alive>
              <router-view :showImgName="showImgName" ref="model" ></router-view>
            </keep-alive>
         <!--<el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id">{{item}}</el-breadcrumb-item>
            </el-breadcrumb> -->
          </div>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        searchCriteria: '',
        breadcrumbItems: ['导航一', '导航二'],
        currentModel: '检测模型',
        showImgName: false,
        defaultItem: "1"
      }
    },
    methods:{
      handleIconClick(ev) {
          console.log(ev);
      },
      changeModel(model){
        if (model == 'detect'){
          this.currentModel = '检测模型'
        }
        else{
          this.currentModel = '分类模型'
        }
      },
      clear(){
        this.$refs.model.clearScreen()
        this.setDefaultItem("2")
        //console.log(this.$refs.model)
        //console.log(this.$refs.model.getModelName())
      },
      setDefaultItem(item){
        this.defaultItem = item
      }
    },
    mounted(){
      //this.$refs.menu.defaultActive = this.$refs.model.getModelName();
    },

  }
</script>
</script>

<style>
.el-row{
  margin-bottom: 10px;
}
.el-checkbox{
  display: block!important;
}
.el-menu-item{
  border-bottom-color:#ffffff!important;
  font-size: 16px;
}
.el-menu-item.is-active {
    background-color: #e6f2f2;
}

.el-checkbox__input.is-checked + .el-checkbox__label {
    color: black!important;
}

.toolbox{
  position: fixed;
  bottom: 100px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 200px;
  width: 180px;
  padding-left: 20px;
}

.toolbox i{
  color: gray;
  display: block;
  float: right;
  font-size: 13px;
  padding-top: 10px;
  padding-right: 10px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}
</style>