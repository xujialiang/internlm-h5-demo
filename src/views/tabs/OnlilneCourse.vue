<template>
    <van-tabs v-model:active="active2" swipeable class="tabs" offset-top="46" sticky>
        <van-tab title="营销">
            <div class="canscroll">
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="pullrefresh">
                    <van-list
                        v-model:loading="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                        >
                        <van-cell v-for="item in list" :key="item" :title="item" />
                    </van-list>
                </van-pull-refresh>
            </div>
        </van-tab>
        <van-tab title="商机">商机</van-tab>
        <van-tab title="推广">推广</van-tab>
        <van-tab title="理财">理财</van-tab>
    </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active2 = ref(0);

const list = ref<any>([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    console.log('onLoad');
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            let ret = list.value.length + 1;
            list.value.push(ret);
        }

        // 加载状态结束
        loading.value = false;
        refreshing.value = false;
        console.log(' loading.value false');

        // 数据全部加载完成
        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 1000);
};

const onRefresh = () => {
      // 清空列表数据
      finished.value = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
};

</script>
  
<style scoped>
.tabs {
    height: 100%;
    overflow: scroll;
}
.canscroll {
    height: 100%;
}
.list {
    overflow: scroll;
}
.yingxiao {
    height: 100%;
    background-color: aqua;
}
.pullrefresh {
    height: calc(100% - 44px);
}
</style>
  