<template>
  <main>
    <div class="main">
      <div class="message">
        <h1>我是樊凯强</h1>
        <div class="line"></div>
        <p>在我看来，前端工程师是工程师中的设计师，是设计师中的工程师，崇尚美观、 简约、细节与变化，是理性与感性的完美结合</p>
        <p><span class="bold">教育背景</span> 2019 应届本科 南昌大学 计算机科学与技术</p>
        <p><span class="bold">意向职位</span> 前端开发</p>
        <p>在校期间热衷于前端技术的学习，具有强烈的求知欲。做事认真，细致严谨，踏实肯干，有较强的团队合作能力、抗压能力、沟通能力和工作能力。愿意用激情与成果证明自己能够成为团队中流砥柱.</p>
        <div class="buttonWrapper">
          <a href="../../static/resume.pdf" download="2019-樊凯强-应聘前端工程师.pdf"><button class="download">下载 PDF 版简历</button></a>
          <router-link :to="{name:'Contact'}">
            <button class="skip">联系我</button>
          </router-link>
        </div>
      </div>
      <div class="border"></div>
      <img src="../assets/001.jpg" alt="照片">
      <div class="wrap">
        <span class="ribbon6">个人信息</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Message",
  mounted() {
    VanillaTilt.init(document.querySelector("img"), {
      max: 1,
      speed: 50
    });

    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll("img"));
  }
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
span.bold {
  font-weight: bold;
}
.message > .buttonWrapper {
  user-select: none;
}

.message > .buttonWrapper  button {
  height: 45px;
  font-size: 16px;
  border-radius: 2px;
  outline: none;
  font-weight: bold;
  padding: 0 1em;
  cursor: pointer;
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
    margin: 80px 40px 40px;
    width: calc(100vw - 180px);
    min-height: 400px;
    padding: 50px;
  }
}
@media (max-width: 768px) {
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
    padding: 3em 1em;
    margin: 0;
    min-height: 85vh;
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
