<template>
    <van-swipe class="marketing-swipe" indicator-color="white" :autoplay="3000">
      <van-swipe-item class="page page1">
        <div class="card">
          <img :src="market1_img" alt="" width="100" height="100"/>
          <div class="textArea">
            <div class="title"></div>
            <div class="subtitle"></div>
            <div class="button" @click="onClickDetail('1')">查看详情</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item class="page page2">
        <div class="card">
          <img :src="market2_img" alt="" />
          <div class="textArea">
            <div class="title"></div>
            <div class="subtitle"></div>
            <div class="button" @click="onClickDetail('2')">查看详情</div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item class="page page3">
        <div class="card">
          <img :src="market3_img" alt="" />
          <div class="textArea">
            <div class="title"></div>
            <div class="subtitle"></div>
            <div class="button" @click="onClickDetail('3')">查看详情</div>
          </div>
        </div>
      </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import market1_img  from '../../assets/marketing/1.webp'
import market2_img  from '../../assets/marketing/2.webp'
import market3_img  from '../../assets/marketing/3.webp'

const router = useRouter();

const onClickDetail = (idx:any) => {
  router.push('/marketing-helper')
}


</script>
  
<style scoped lang="scss">

.marketing-swipe {
  height: 100%;
  box-sizing: border-box;
  .page {
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    
    .card {
      position: relative;
      box-sizing: border-box;
      background-color: yellow;
      height: 100%;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }
      .textArea {
        position: absolute;
        width: 100%;
        height: 30%;
        bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .title {
          font-size: 20px;
          font-weight: bold;
          margin-top: 8px;
        }
        .subtitle {
          font-size: 14px;
          color: #666;
          margin-top: 8px;
        }
        .button {
          margin-top: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          background-color: #1989fa;
          color: white;
        }
      }
    }
  }
  .page1 {
    
  }
}

</style>
  