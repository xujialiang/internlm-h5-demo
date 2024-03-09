<template>
    <van-nav-bar title="AIGC营销助手" left-text="返回" left-arrow @click-left="onClickBack"/>
    <van-form @submit="onSubmit" class="form">
        <van-field
            v-model="formData.type"
            is-link
            readonly
            name="picker"
            label=""
            placeholder="选择营销素材类型"
            @click="showPicker = true"
            />
        <van-popup v-model:show="showPicker" position="bottom">
            <van-picker
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>
        <div class="suggest">
            <div class="left">
                AI建议提问:
            </div>
            <div class="right">
                刷新
            </div>
        </div>
        <van-field
            v-model="formData.prompt"
            rows="2"
            autosize
            label=""
            type="textarea"
            maxlength="300"
            placeholder="请输入留言"
            show-word-limit
        />

        <van-field
            v-model="formData.prompt"
            rows="2"
            autosize
            label=""
            type="textarea"
            maxlength="50"
            placeholder="AI建议: "
        />


        <div class="upload">
            <div class="left">
                上传文件(可选)
            </div>
        </div>
        <div class="filelist">
            <van-uploader v-model="fileList" reupload max-count="2" />
        </div>
        

        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
            提交
            </van-button>
        </div>
    </van-form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const showPicker = ref(false);
const columns = [
    { text: '保险', value: 'Baoxian' },
    { text: '理财', value: 'licai' }
];
const formData = ref({
    type: '',
    prompt: ''
});

const fileList = ref([
      { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
]);

const onConfirm = () => {

}

const onSubmit = () => {
    router.push('/marketing-helper-result');
}

const onClickBack = () => {
  router.back();
}
</script>
  
<style scoped lang="scss">
.form {
    background-color: white;
}
.suggest, .upload {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    font-size: 12px;
    color: #666;
    background-color: white;
    .left {
        color: #333;
    }
    .right {
        color: #007aff;
    }
}
.filelist {
    padding: 16px;
}
</style>
  