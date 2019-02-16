<template>
  <main>
    <div class="main">
      <h2>博客</h2>
      <div class="line"></div>
      <p>在学习前端技术的历程中，我会将学习后的笔记以及遇到的难点整理为博客，截至目前已经有八十余篇。</p>
      <p>这是我的博客地址：<a target="_blank" href="http://franko.top">http://franko.top</a> 。</p>
      <p>其中涵盖各类前端相关的知识点，当然也不全是学习记录，因为有时我也会写一些随笔。</p>
      <p>博客是用 Hexo + GitHub  搭建的，有时我也会把一些博客搬运到 <a target="_blank" href="https://www.zhihu.com/people/fan-kai-qiang-10-26/activities">知乎</a> 或 <a href="https://www.jianshu.com/u/6717c72aaa43">简书</a> 上和大家分享。</p>
      <p>在日积月累的过程中，写博客已然成为我的一个爱好，在今后的工作与学习中，我还会继续保持这个习惯。</p>
      <div class="wrap">
        <span class="ribbon6">我的博客</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Blog"
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
a{
  color:blue;
  text-decoration: underline;
  font-weight: bold;
  user-select: auto;
}
.main {
  font-size: 18px;
  position: relative;
  background: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px,
    rgba(0, 0, 0, 0.23) 0px 6px 10px;
  font-family: 幼圆;
  display: flex;
  flex-direction: column;
}

.main > h2 {
  user-select: none;
}

.main > .line {
  width: 60px;
  border: 1px solid #607d8b;
}

.main > p {
  color: #252728;
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 1px;
  font-weight: 300;
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
</style>