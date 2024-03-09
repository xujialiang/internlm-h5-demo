<template>
    <van-nav-bar title="培训" left-text="返回" left-arrow @click-left="onClickBack"/>
    <div class="header">
        <div class="avatar">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" style="width: 70px; height: 70px; border-radius: 50%;" >
        </div>
        <div class="title">AI客户设计</div>
    </div>
    <van-form @submit="onSubmit" class="form">
        <van-cell-group>
            <van-field
                v-model="username"
                name="年龄"
                label="年龄"
                placeholder="年龄"
                :rules="[{ required: true, message: '请填写年龄' }]"
            />
            <van-field
                v-model="username"
                name="性别"
                label="性别"
                placeholder="性别"
                :rules="[{ required: true, message: '请选择性别' }]"
            />
            <van-field
                v-model="username"
                name="所在城市"
                label="所在城市"
                placeholder="所在城市"
                :rules="[{ required: true, message: '请输入所在城市' }]"
            />
            <van-field
                v-model="username"
                name="性格个性"
                label="性格个性"
                placeholder="性格个性"
                :rules="[{ required: true, message: '请选择性格个性' }]"
            />
            <van-field
                v-model="username"
                name="其他"
                label="其他"
                placeholder="其他"
                :rules="[{ required: true, message: '请输入其他特征' }]"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                开始演练
            </van-button>
        </div>
    </van-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Nav from "../common/TopNav.vue"

const username = ref('');
const password = ref('');

const onSubmit = (values:any) => {
      console.log('submit', values);
};

const onClickBack = () => {
    history.go(-1);
}
</script>

<style scoped lang="scss">
.form {
    margin-top: 16px;
}
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .avatar {
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>