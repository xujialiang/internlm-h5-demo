<template>
    <div class="bg">
        <van-nav-bar title="AI导师" left-text="返回" left-arrow @click-left="onClickBack"/>
        <div class="scrollDesc" v-if="messages.length<=0">
          <div class="logo">
              <h1>大模型AI导师答疑</h1>
          </div>
          <div class="showDescContainer">
              <div class="card">
                  <div class="title">
                      <h2>
                          <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                          <div>提问示例</div>
                      </h2>
                      
                  </div>
                  <div class="box">
                      <div class="desc1">"疫情防护需要做什么?"</div>
                      <div class="desc2">"情人节送什么礼物?"</div>
                      <div class="desc3">"如何写一首诗?"</div>
                  </div>
              </div>
              <div class="card">
                  <div class="title">
                      <h2>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6" height="1.3em" width="1.3em"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
                          <div>AI能力</div>
                      </h2>
                  </div>
                  <div class="box">
                      <div class="desc1">能记住对话过程中，前面提过的内容</div>
                      <div class="desc2">可以用教AI修正错误回答</div>
                      <div class="desc3">懂得拒绝不合理的提问</div>
                  </div>
              </div>
              <div class="card">
                  <div class="title">
                      <h2>
                          <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                          能力限制
                      </h2>
                  </div>
                  <div class="box">
                      <div class="desc1">回答中偶尔会有事实性错误</div>
                      <div class="desc2">可能会输出有偏见或歧视性的回答</div>
                      <div class="desc3">对2021年以后发生的事情不了解</div>
                  </div>
              </div>
          </div>
      </div>
      <div ref="scrollMessage" class="scrollMessage" v-if="messages.length>0">
          <div class="message" v-for="msg in messages" v-bind:key="msg">
              <div class="recv" v-if="msg.type=='recv'">
                  <div class="avatar" style="width: 30px; height: 30px;">
                      <div style="display: flex; width: 30px; height: 30px; justify-content: center; align-items: center; background-color: #4aa181; border-radius: 2px;">
                          <svg width="22" height="22" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="h-6 w-6" ><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>
                      </div>
                  </div>
                  <div class="content">
                      <div class="msg">
                          <md-editor v-model="msg.message" preview-only theme="dark"/>
                      </div>
                      <div class="operation">
                          <div v-if="!msg.zan || msg.zan == 1" class="zan" @click="doZan(msg, '1');">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                          </div>
                          <div v-if="!msg.zan || msg.zan == -1" class="unzan"  @click="doZan(msg, '-1');">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                          </div>
                          <div class="token" v-if="msg.tokens">{{msg.tokens}}Tokens</div>
                      </div>
                  </div>
              </div>
              <div class="send" v-if="msg.type=='send'">
                  <div class="avatar">
                      <img :src="avatar"/>
                  </div>
                  <div class="content">{{msg.message}}</div>
              </div>
          </div>
          <div class="recv" v-if="isLoading">
              <div class="avatar" style="width: 30px; height: 30px;">
                  <div style="display: flex; width: 30px; height: 30px; justify-content: center; align-items: center; background-color: #4aa181; border-radius: 2px;">
                      <svg width="22" height="22" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="h-6 w-6" ><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>
                  </div>
              </div>
              <div class="content">
                  <div class="msg">
                      请稍后...
                  </div>
              </div>
          </div>
      </div>
  
      <div class="inputArea">
          <div class="custInput">
              <van-field
                    id="inputPrompt"
                  v-model="text"
                  rows="1"
                  autosize
                  label=""
                  type="textarea"
                  placeholder="请输入..."
                  style="background-color: transparent;"
              />
  
              <div class="sendBtn" @click="debounceSend">
                  <div v-if="isLoading">...</div>
                  <svg v-if="!isLoading" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </div>
          </div>
      </div>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, nextTick, onMounted } from 'vue'
  import avatar from '../../../assets/avatar.jpg'
  import { showNotify } from 'vant';
  import {useRouter, useRoute} from 'vue-router'
  import {debounce} from 'lodash-es'
  import { MdEditor } from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';
  
  const router= useRouter();
  const onClickBack = ()=>{
      router.go(-1);
  }
  
  const showRightBtn = ref(false);
  const text = ref("");
  const lastMessageid= ref("")
  const lastConversationId = ref("");
  const scrollMessage = ref();
  const paramSettings = localStorage.getItem('gpt_settings');
  const messages:any = ref([
      
  ]);
  const isLoading = ref(false);

  
  
  const sendMsg = ()=>{
      
  }
  
  let debounceSend = debounce(sendMsg, 300)
  
  
  const doZan = (msg:any, zan:any) => {

  }
  
  const clearMsg = ()=>{
  }
  </script>
  
  <style  lang="scss">
    #inputPrompt{
              color: white;
    }
    </style>
  <style scoped lang="scss">
  .bg{
      background-color: #353540;
      height: 100%;
  }
  
  .scrollDesc {
      overflow: scroll;
      height: calc(100% - 44px - 100px);
  }
  
  .scrollMessage {
      overflow: scroll;
      height: calc(100% - 44px - 100px);
      display: flex;
      flex-direction: column;
      .avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          img{
              width: 30px;
              height: 30px;
              border-radius: 2px;
          }
      }
      .send{
          background-color: #353540;
          display: flex;
          padding: 1em;
          min-height: 65px;
          gap: 1rem;
  
          .content{
              margin-top: -3px;
          }
      }
  
      .recv{
          background-color: #454653;
          display: flex;
          padding: 1em;
          min-height: 65px;
          gap: 1rem;
          .operation {
              display: flex;
              flex-direction: row;
              margin-top: 15px;
              .zan{
                  margin-right: 15px;
              }
              .token {
                  display: flex;
                  margin-left: 15px;
                  font-size: 10px;
                  color: gray;
              }
          }
          
      }
  }
  .header{
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-color: hsla(0,0%,100%,.2);
      border-bottom-width: 1px;
      border-bottom-style: solid;
  
      .leftBtn{
          color:white;
          position: absolute;
          left: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .rightBtn{
          color:white;
          position: absolute;
          right: 5px;
      }
  }
  
  .logo {
      width: 100%;
      h1 {
          font-weight: 600;
          font-size: 2.25rem;
          line-height: 2.5rem;
          text-align: center;
          color: white;
      }
  }
  .showDescContainer {
      padding-left: 2.5em;
      padding-right: 2.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  
      
      .card{
          width: 100%;
          margin-bottom: 10px;
          .title {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              h2{
                  display: flex;
                  font-weight: 500;
                  font-size: 1.125rem;
                  line-height: 1.75rem;
                  gap: 0.75rem;
                  align-items: center;
                  color: white;
                  svn{
                      width: 1.5rem;
                      height: 1.5rem;
                  }
              }
          }
          .box {
              display: flex;
              flex-direction: column;
              width: 100%;
              justify-content: center;
              align-items: center;
              gap: 0.875rem;
              div{
                  background-color: hsla(0,0%,100%,.05);
                  padding: 0.75rem;
                  border-radius: 0.375rem;
                  width: 100%;
                  text-align: center;
                  color: white;
                  font-size: 14px;
                  font-weight: 500;
                  font-family: inherit;
                  &:hover{
                      background-color: #202123;
                  }
              }
          }
          
      }
  }
  
  @media (min-width: 500px) {
      .showDescContainer{
          padding-left: 2.5em;
          padding-right: 2.5em;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-direction: row;
          // background-color: red;
          .card{
              width: 30%;
              max-width: 300px;
          }
      }
    }
  
  .inputArea {
      border-color: hsla(0,0%,100%,.2);
      border-top-width: 1px;
      border-top-style: solid;
      width: 100%;
      box-sizing: border-box;
      padding-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      background-color: #35353f;
  
      position: absolute;
      bottom: 0px;;
  
      .custInput {
          background-color: #41414e;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-right: 8px;
          max-height: 80;
          border-radius: 5px;
          color: white;
          
          textarea {
              max-height: 80px;
              min-height: 40px;
              color: white;
          }
          .sendBtn {
              display: flex;
              align-items: center;
              cursor: pointer;
          }
          .elInputStyle {
              border-width: 0px;
          }
      }
  }
  .footer{
      font-size: .75rem;
      line-height: 1rem;
      text-align: center;
      padding-top: 10px;
      color: hsla(0,0%,100%,.5);
  }
  .van-cell:after{
      border-bottom-width: 0px;
  }
  
  
  </style>
  