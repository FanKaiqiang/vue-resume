<template>
  <main>
    <div class="main">
      <h2>专业技能</h2>
      <div class="line"></div>
      <h3>技能雷达图</h3>
      <div id="main" style="width: 400px;height:260px;"></div>
      <h3>技能描述</h3>
      <ul>
        <li><p>在校期间主修的专业课程有C/C++、汇编语言、Java、计算机网络、操作系统、数据结构、数据库、软件工程等。</p></li>
        <li><p>熟练掌握 HTML 5 和常用 CSS 3，能够独立还原设计稿为真实网页。具有 平均水准之上 的审美，追求设计的优雅。</p></li>
        <li><p>熟练掌握原生Javascript，掌握重要概念如： 原型， 闭包， 作用域链， 面向对象，熟练使用 ES6及ES7 部分新特性。</p></li>
        <li><p>熟悉 Vue 常用功能，如组件、Vue-Router、双向绑定等</p></li>
        <li><p>熟悉 React 框架及相关流行库的使用，理解重要概念如：生命周期，异步更新，性能优化，虚拟DOM（DCG），Immutable data等。</p></li>
        <li><p>熟悉Yarn & Npm & Git ，能够使用Node.js搭配Express进行基本后台开发</p></li>
        <li><p>熟悉HTTP协议及浏览器渲染原理，了解前端 性能优化策略</p></li>
        <li><p>拥有总结书写技术博客(点击进入)的习惯</p></li>
        <li><p>熟练利用Ajax与后端交互，了解常用的跨域解决方案 JSONP、CORS 等</p></li>
      </ul>
      <div class="wrap">
        <span class="ribbon6">专业技能</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Skill",
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    var option = {
      tooltip: {},
      radar: {
        shape: 'circle',
        name: {
          textStyle: {
            color: "#fff",
            backgroundColor: "#999",
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: "JavaScript", max: 100 },
          { name: "JQuery", max: 100 },
          { name: "React", max: 100 },
          { name: "小程序", max: 100 },
          { name: "Vue", max: 100 },
          { name: "HTTP", max: 100 },
          { name: "移动端页面", max: 100 },
          { name: "HTML/CSS", max: 100 }
        ]
      },
      series: [
        {
          name: "预算 vs 开销（Budget vs spending）",
          type: "radar",
          // areaStyle: {normal: {}},
          data: [
            {
              value: [90, 75, 80, 80, 80, 85, 90, 90],
              name: "自我评价"
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
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
  flex-direction: column;
}

.main > h2 {
  user-select: none;
}

.main > .line {
  width: 120px;
  border: 1px solid #607d8b;
}
#main{
  align-self: center;
}
.main > p {
  color: #252728;
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 1px;
  font-weight: 300;
}
ul{
  margin: 0;
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
    padding: 1em;
    margin: 0;
  }
}
</style>