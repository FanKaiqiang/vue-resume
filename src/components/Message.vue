<template>
  <main>
    <div class="main">
      <div class="message">
        <h1>我是樊凯强</h1>
        <div class="line"></div>
        <p>前端于我而言，是理性与感性的完美结合，逻辑的精密搭配设计的笃定，诠释一名优秀工程师的必备品质。</p>
        <p>教育背景 2019 应届本科 南昌大学 计算机科学与技术</p>
        <p>意向职位 前端开发 并对接触后端有较强兴趣</p>
        <p>思维灵活发散，强大的自我驱动能力。在独立项目开发过程中体现出优秀的新技术学习、问题分析解决能力。寻找技术驱动，成长空间用激情与成果证明快速成为团队中流砥柱，is not impossible.</p>
        <div class="buttonWrapper">
          <button class="download">下载 PDF 版简历</button>
          <button class="skip">联系我</button>
        </div>
      </div>
      <div class="border"></div>
      <img src="../assets/photo.jpg" alt="照片">
      <div class="wrap">
        <span class="ribbon6">个人信息</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Message"
};
</script>

<style scoped>
.main {
  font-size: 18px;
  position: relative;
  background: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px,
    rgba(0, 0, 0, 0.23) 0px 6px 10px;
  font-family: 幼圆;
  display: flex;
}

.main > .message {
  flex: 1;
  margin-right: 35px;
}
.message > h1 {
  user-select: none;
}
.message > .line {
  width: 120px;
  border: 1px solid #607d8b;
}
.message > p {
  color: #252728;
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 1px;
  font-weight: 300;
}

.message > .buttonWrapper {
  user-select: none;
}

.message > .buttonWrapper > button {
  height: 45px;
  font-size: 16px;
  border-radius: 2px;
  outline: none;
  font-weight: bold;
  padding: 0 1em;
}

button.download {
  border: none;
  background: #607d8b;
  color: #fff;
}
button.download:hover {
  background: #444;
}


button.skip {
  border: 1px solid #607d8b;
  background: #ddd;
  color: #607d8b;
}
button.skip:hover {
  background: #f0f0f0;
}
.wrap {
  position: absolute;
  top: -8px;
  left: -8px;
  overflow: hidden;
  width: 150px;
  height: 150px;
  user-select: none;
}

.wrap:before {
  content: "";
  display: block;
  border-radius: 8px 8px 0px 0px;
  width: 40px;
  height: 8px;
  position: absolute;
  left: 100px;
  background: #212121;
}

.wrap:after {
  content: "";
  display: block;
  border-radius: 0px 8px 8px 0px;
  width: 8px;
  height: 40px;
  position: absolute;
  left: 0px;
  top: 100px;
  background: #212121;
}

.ribbon6 {
  color: #fafafa;
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  left: -50px;
  z-index: 2;
  overflow: hidden;
  transform: rotate(-45deg);
  border: 1px dashed;
  box-shadow: 0 0 0 3px #607d8b, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);
  background: #607d8b;
}

.main > img {
  height: 320px;
  padding: 10px;
  background: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px,
    rgba(0, 0, 0, 0.23) 0px 6px 10px;
  z-index: 1;
  user-select: none;
}

.main > .border {
  position: absolute;
  width: 225px;
  height: 320px;
  top: 80px;
  right: 80px;
  border: 10px solid #607d8b;
}
@media (min-width: 1125px) {
  .main {
    margin: 60px 375px;
    width: calc(100vw - 550px);
    min-height: 400px;
    padding: 50px;
  }
}
@media (max-width: 1125px) {
  .main {
    margin: 40px;
    width: calc(100vw - 180px);
    min-height: 400px;
    padding: 50px;
  }
}
@media (max-width: 666px) {
  .border,
  img {
    display: none;
  }
  .main > .message {
    margin-right: 0;
  }
}
@media (max-width: 550px) {
  .wrap {
    display: none;
  }
  .main {
    width: auto;
    padding: 1em 2em;
    margin: 0;
  }
}

@media (max-width: 1200px) and (min-width: 1125px) {
  .main > .message > .buttonWrapper {
    position: absolute;
    top: 450px;
    right: 80px;
  }
}
</style>
