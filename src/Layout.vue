
<template>
  <div id="layout">
    <div class="yv-header">
      <div class="yv-header-content">
        <!-- <img id="header-img" src="../assets/logo.png" /> -->

        <div class="header-important">
          <div class="header-title">
            <font id="header-title-font">育π网</font>
          </div>

          <div class="header-title-foo">
            <font id="header-title-font-foo">www.yvpai.com</font>
          </div>
        </div>

        <!-- <div class="header-tabs">
          <div
            @mouseover="activeTab(index)"
            @mouseout="moveActive"
            @click="changeTab(index)"
            class="header-tab"
            :class="[
              index === nowIndex ? 'tab-active' : '',
              index === activeIndex ? 'tab-active' : '',
            ]"
            v-for="(item, index) in tabList"
          >
            {{ item }}
          </div>
        </div> -->

        <div class="header-login-regist">
          <div class="header-login">登录</div>

          <div class="header-splid">|</div>

          <div class="header-login">注册</div>
        </div>
      </div>
    </div>

    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <div class="yv-footer">
      <div class="yv-footer-content">
        <div class="footer-record">互联网ICP备案：皖ICP备18007469号</div>
        <div class="footer-company">©www.dreamland.wang 梦境网版权所有</div>
      </div>
    </div>
  </div>
</template>

