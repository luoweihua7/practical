<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside width="250px" class="aside-left">
        <div class="logo"></div>

        <el-scrollbar>
          <el-menu default-active="2" class="aside-menu" :collapse="isCollapsed" :collapse-transition="false" router>
            <el-menu-item index="/dashboard">
              <el-icon><odometer /></el-icon>
              <span>概览</span>
            </el-menu-item>
            <el-sub-menu index="/manage">
              <template #title>
                <el-icon><odometer /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item index="/manage/1-1">item one</el-menu-item>
              <el-menu-item index="/manage/1-2">item two</el-menu-item>
              <el-menu-item index="/manage/1-1">item one</el-menu-item>
              <el-menu-item index="/manage/1-2">item two</el-menu-item>
              <el-sub-menu index="/manage/1-4">
                <template #title>item three</template>
                <el-menu-item index="1-4-1">three inner one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item v-for="i in 20" :index="`2-${i}`" :key="i">
              <el-icon><star /></el-icon>
              <span>Navigator 4-{{ i }}</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header :collapse.sync="isCollapsed" class="header-right">Dashboard Header</el-header>
        <el-main class="main-right">
          <el-scrollbar>
            <div>Dashboard Main</div>
            <slot></slot>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// 谜一般的element-plus，使用setting图标会卡顿（后续及时更新element-plus的模块，也许问题哪天就被解决了）
import { Odometer, Document, Menu as IconMenu, Location, Setting, Star } from '@element-plus/icons-vue';

const isCollapsed = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
}

.logo {
  flex: auto;
  width: calc(var(--el-aside-width) - 50px);
  height: 50px;
  margin: 5px 10px;
  background-color: #e7e7e7;
}

.aside-left,
.header-right,
.main-right {
  background: #fefefe !important;
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px #cfcfcfcf;
}

.aside-left {
  height: calc(100vh - 30px);
  overflow: hidden;
}
.aside-menu {
  border-right: 0;
  border-right-color: transparent;
}

.header-right {
  margin-left: 0;
  text-align: center;
}

.main-right {
  margin-left: 0;
  margin-top: 0;
  text-align: left;
}
</style>
