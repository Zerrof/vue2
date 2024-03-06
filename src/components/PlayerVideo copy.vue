<template>
  <div class="playVideo-layout">
    <!-- 播放器 -->
    <!-- <div id="app-container" class="video-box">
      <video
        ref="videoElement"
        :src="videoUrl"
        id="videoElement"
        controls
        muted
        style="width: 100%; height: 100%; object-fit: fill"
      ></video>
    </div> -->
    <!-- <span class="iconfont icon-icon_likegood"></span> -->
    <!-- <button type="button" @click="aaaaa" class="btn">登录</button> -->
    <!-- <form id="click_form" action="https://my.click.uz/services/pay" method="get" target="_blank">
      <input type="hidden" name="amount" value="1000" />
      <input type="hidden" name="merchant_id" value="46" />
      <input type="hidden" name="merchant_user_id" value="4" />
      <input type="hidden" name="service_id" value="36" />
      <input type="hidden" name="transaction_param" value="user23151" />
      <input type="hidden" name="return_url" value="merchant website url" />
      <input type="hidden" name="card_type" value="uzcard/humo" />
      <button type="submit" class="click_logo"><i></i>Pay with CLICK</button>
    </form> -->
  </div>
</template>
<script>
// import hlsjs from "hls.js";
// import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// const provider = new GoogleAuthProvider();
// const auth = getAuth();
// import { clone } from "@jsmini/clone";
// const cloneLoop = require("@jsmini/clone").cloneLoop;
export default {
  name: "About",
  data() {
    return {
      // videoUrl:
      //   // "http://120.205.13.212:19080/huadouzonghengzhinixirensheng/huadouzonghengzhinixirensheng03/index.m3u8",
      //   "http://ivi.bupt.edu.cn/hls/jshd.m3u8",
    };
  },
  mounted() {
    // this.show();
    // console.log(
    //   Boolean(this.video.canPlayType("application/vnd.apple.mpegurl"))
    // );
    // this.initFirebase();
    // this.aaaaa();

    // var b = {
    //   a1: 1,
    //   a2: [
    //     { c1: 1, c2: 2 },
    //     { d1: 3, d2: 4 },
    //   ],
    //   a3: 3,
    // };
    // var c = cloneLoop(b);
    // b.a2[1].d1 = 111111;
    // console.log(b);
    // console.log(c);
  },
  methods: {
    // aaaaa() {
    //   const res = signInWithPopup(auth, provider);
    //   console.log(res);
    // },
    // initFirebase() {
    //   const firebaseConfig = {
    //     apiKey: "AIzaSyDwnGFuJyN6H9WOofEUjXb5e9C5vXb6-dA",
    //     authDomain: "login-947a1.firebaseapp.com",
    //     projectId: "login-947a1",
    //     storageBucket: "login-947a1.appspot.com",
    //     messagingSenderId: "788322020558",
    //     appId: "1:788322020558:web:d50608c2fde4443ece349f",
    //   };
    //   // Initialize Firebase
    //   initializeApp(firebaseConfig);
    // },
    //播放
    // show() {
    //   this.video = this.$refs.videoElement; //定义挂载点
    //   if (this.video.canPlayType("application/vnd.apple.mpegurl")) {
    //     this.video.play();
    //   } else if (hlsjs.isSupported()) {
    //     this.hlsjs = new hlsjs();
    //     this.hlsjs.loadSource(this.videoUrl); //设置播放路径
    //     this.hlsjs.attachMedia(this.video); //解析到video标签上
    //     console.log(this.hlsjs);
    //     this.hlsjs.on(hlsjs.Events.MANIFEST_PARSED, () => {
    //       this.video.play();
    //       console.log("加载成功");
    //     });
    //     this.hlsjs.on(hlsjs.Events.ERROR, (event, data) => {
    //       console.log(event, data);
    //       // 监听出错事件
    //       console.log("加载失败");
    //     });
    //   }
    // },
    // //停止播放
    // closeVideo() {
    //   if (this.hlsjs) {
    //     this.$refs.videoElement.pause();
    //     this.video.pause();
    //     this.hlsjs.destroy();
    //     this.hlsjs = null;
    //     this.$emit("closeVideo");
    //   }
    // },
  },
  destroyed() {},
  beforeCreate() {},
};
</script>
<style scoped>
.btn {
  width: 100px;
  height: 100px;
  font-size: 50px;
  color: #000;
}
.click_logo {
  padding: 4px 10px;
  cursor: pointer;
  color: #fff;
  line-height: 190%;
  font-size: 13px;
  font-family: Arial;
  font-weight: bold;
  text-align: center;
  border: 1px solid #037bc8;
  text-shadow: 0px -1px 0px #037bc8;
  border-radius: 4px;
  background: #27a8e0;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzI3YThlMCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYzhlZDciIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#27a8e0), to(#1c8ed7));
  background: -webkit-linear-gradient(#27a8e0 0%, #1c8ed7 100%);
  background: -moz-linear-gradient(#27a8e0 0%, #1c8ed7 100%);
  background: -o-linear-gradient(#27a8e0 0%, #1c8ed7 100%);
  background: linear-gradient(#27a8e0 0%, #1c8ed7 100%);
  box-shadow: inset 0px 1px 0px #45c4fc;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#27a8e0', endColorstr='#1c8ed7',GradientType=0 );
  -webkit-box-shadow: inset 0px 1px 0px #45c4fc;
  -moz-box-shadow: inset 0px 1px 0px #45c4fc;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
}
.click_logo i {
  background: url(https://m.click.uz/static/img/logo.png) no-repeat top left;
  width: 30px;
  height: 25px;
  display: block;
  float: left;
}
</style>
