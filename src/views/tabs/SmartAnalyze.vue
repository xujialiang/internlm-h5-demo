<template>
    
  <van-tabs v-model:active="active2" swipeable class="tabs" offset-top="46" sticky @rendered="onRender">
        <van-tab title="今天">
            <div class="canscroll">
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="pullrefresh">
                    <div class="zhibiao">
                        <div class="left">
                            <div class="number">2789/29014</div>
                            <div class="data">数据指标项</div>
                        </div>
                        <div class="right">
                            <div class="number">2789/29014</div>
                            <div class="data">数据指标项2</div>
                        </div>
                    </div>
                    <div class="zhuanhua">
                        <div class="title">订单转化</div>
                        <div class="charts">
                            <div ref="loudouChart" style="width: 100%; height: 300px;"></div>
                        </div>
                    </div>
                    <div class="laiyuanqudao">
                        <div class="title">来源渠道</div>
                        <div class="charts">
                            <div ref="laiyuanChart" style="width: 100%; height: 300px;"></div>
                        </div>
                    </div>
                    <div class="xiaofeitongji">
                        <div class="title">消费统计</div>
                        <div class="charts">
                            <div ref="xiaofeiChart" style="width: 100%; height: 300px;"></div>
                        </div>
                    </div>
                    <div class="zhifu">
                        <div class="title">支付统计</div>
                        <div class="charts">
                            <div ref="zhuzhuangChart" style="width: 100%; height: 300px;"></div>
                        </div>
                    </div>
                </van-pull-refresh>
            </div>
        </van-tab>
        <van-tab title="昨天">商机</van-tab>
        <van-tab title="近7天">推广</van-tab>
        <van-tab title="近30天">理财</van-tab>
        <van-tab title="自定义">
            <van-list
                        v-model:loading="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                        >
                        <van-cell v-for="item in list" :key="item" :title="item" />
                    </van-list>
        </van-tab>
    </van-tabs>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';
// @ts-ignore
import { loudou } from '../common/loudou.js'
// @ts-ignore
import { laiyuanData } from '../common/laiyuan.js'
// @ts-ignore
import { xiaofeitongji } from '../common/xiaofei.js'
// @ts-ignore
import { zhuzhuang } from '../common/zhuzhuang.js'

const loudouChart = ref();
const laiyuanChart = ref();
const xiaofeiChart = ref();
const zhuzhuangChart = ref();
const active2 = ref(0);

const list = ref<any>([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

onMounted(() => {
    nextTick(() => {
        
    });

    
});

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

const onRender = () => {
    console.log("onRender");
    setTimeout(() => {
        const myChart = echarts.init(loudouChart.value);
        myChart.setOption(loudou);

        const laiyuan = echarts.init(laiyuanChart.value);
        laiyuan.setOption(laiyuanData);

        const xiaofei = echarts.init(xiaofeiChart.value);
        xiaofei.setOption(xiaofeitongji);

        const zz = echarts.init(zhuzhuangChart.value);
        zz.setOption(zhuzhuang);
    }, 500);
    
}

</script>
  
<style scoped lang="scss">
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

.zhibiao {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    padding: 16px;
    .left {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .number {
            font-size: 20px;
            font-weight: bold;
        }
        .data {
            font-size: 14px;
            color: #333;
            margin-top: 8px;
        }
    }
    .right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .number {
            font-size: 20px;
            font-weight: bold;
        }
        .data {
            font-size: 14px;
            color: #333;
            margin-top: 8px;
        }
    }
}

.zhuanhua, .laiyuanqudao, .xiaofeitongji, .zhifu {
    padding: 8px;
    .charts {
        background-color: #fff;
        margin-top: 10px;
    }
}
</style>
  