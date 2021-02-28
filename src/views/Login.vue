<template>
    <div class="login-box">
        <!-- 登录框部分 -->
        <div class="layer">
            <input type="text">
            <input type="text">
        </div>
        <!-- 背景粒子特效 -->
        <vue-particles
        color="#6495ED"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#6495ED"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss" scoped>
   .login-box {
       .layer {
           width: 460px;
            height: auto;
            background: rgba(36, 36, 85, 0.5);
       }
   }
</style>