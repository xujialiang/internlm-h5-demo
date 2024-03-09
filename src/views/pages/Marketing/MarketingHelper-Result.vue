<template>
    <van-nav-bar title="AI推文" left-text="返回" left-arrow @click-left="onClickBack"/>
    <div class="card">
        <div class="border">
            <div class="img">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg">
            </div>
            <div class="content">
                <div class="title">标题</div>
                <div class="desc">描述</div>
            </div>
        </div>
    </div>
    
    <div class="buttons">
        <van-button type="primary" block class="share">分享推文</van-button>
        <van-button type="primary" block plain class="refresh">刷新</van-button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const onClickBack = () => {
  router.back();
}
</script>
  
<style scoped lang="scss">
.card {
    padding: 20px;
    height: 300px;
    .border {
        border: 1px solid #f7f7f7;
        border-radius: 8px;
        overflow: hidden;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .content {
        padding: 20px;
        .title {
            font-size: 16px;
            font-weight: bold;
        }
        .desc {
            margin-top: 8px;
            color: #666;
            font-size: 14px;
        }
    }
}
.buttons {
    display: flex;
    flex-direction: column;
    padding: 20px;
    .refresh {
        margin-top: 8px;
    }
}
</style>
  