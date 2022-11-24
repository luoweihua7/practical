<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-aside width="220px">
        <div class="logo"></div>

        <el-scrollbar>
          <el-menu default-active="2" class="" :collapse="isCollapsed">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
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
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item v-for="i in 20" :index="`4-${i}`">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header :collapse.sync="isCollapsed">Dashboard Header</el-header>
        <el-main>
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
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';

const isCollapsed = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
}

.logo {
  flex: auto;
  width: calc(var(--el-aside-width) - 20px);
  height: 50px;
  margin: 5px 10px;
  background-color: #e7e7e7;
}

:deep(.el-aside) {
  height: 100vh;
  overflow: hidden;
  border-right: solid 1px var(--el-menu-border-color);
}
</style>
