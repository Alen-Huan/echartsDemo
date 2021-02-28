<template>
    <div class="login-box">
        <!-- 登录框部分 -->
        <div class="layer">
            <div class="form">
               <h3>大数据可视化平台</h3>
                <div class="item">
                  <input type="text" placeholder="admin">
                </div>
                <div class="item">
                  <input type="password" placeholder="123456">
                </div>
                <button>立即登录</button>
                <p>默认用户名：admin, 默认密码：123456</p>
            </div>
        </div>
        <!-- 背景粒子特效 -->
        <vue-particles
        color="#6495ED"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="triangle"
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
      <!-- 背景图轮播 -->
      <bgAnimation/>
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
            position: absolute;
            height: 100%;
            width: 100%;
            .form {
                display: flex;
                flex-direction: column;
                position: absolute;
                padding: 35px 30px 25px;
                width: 460px;
                height: auto;
                background: rgba(36, 36, 85, 0.5);
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 25px rgba(255, 255, 255,  0.5);
                border-radius: 10px;
                h3 {
                    font-size: 26px;
                    color: #d3d7f7;
                    margin-bottom: 35px;
                }
                  .item {
                      margin-bottom: 25px;
                      input {
                          width: 100%;
                          padding: 0;
                          border: none;
                          border-bottom: 1px solid #d3d7f7;
                          height: 49px;
                          outline: none;
                          color: #d3d7f7;
                          background: transparent;
                          &::placeholder {
                              color: #d3d7f7;
                          }
                      }
                  }
                  button {
                      height: 48px;
                      line-height: 40px;
                      border: 1px solid #d3d7f7;
                      background: transparent;
                      color: #d3d7f7;
                      margin-bottom: 20px;
                      outline: none;
                  }
                  p {
                      text-align: left;
                      color: #d3d7f7;
                  }
            }
       }
   }
</style>