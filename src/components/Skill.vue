<template>
  <main>
    <div class="main">
      <h2>专业技能</h2>
      <div class="line"></div>
      <h3>技能雷达图</h3>
      <div id="main"></div>
      <h3>技能描述</h3>
      <ul>
        <li>
          <p>
            在校期间主修的
            <span class="bold">专业课程</span>有C/C++、汇编语言、Java、计算机网络、操作系统、数据结构、数据库、软件工程等。
          </p>
        </li>
        <li>
          <p>
            熟练掌握
            <span class="bold">HTML 5</span> 和常用
            <span class="bold">CSS 3</span>，能够独立还原设计稿为真实网页。具有良好的前端编程习惯，致力于代码的整体结构规范及优化。
          </p>
        </li>
        <li>
          <p>
            熟练掌握
            <span class="bold">原生Javascript</span>，掌握重要概念如：
            <span class="bold">原型， 闭包， 作用域链， 面向对象</span>，熟练使用
            <span class="bold">ES5/6 及 以上</span> 部分新特性。
          </p>
        </li>
        <li>
          <p>
            熟悉
            <span class="bold">Vue</span> 常用功能，如
            <span class="bold">组件、Vue-Router、双向绑定</span>等
          </p>
        </li>
        <li>
          <p>
            熟悉
            <span class="bold">React</span> 常用功能，如：
            <span class="bold">组件、JSX、React-Router、React-Redux</span>等。
          </p>
        </li>
        <li>
          <p>
            熟悉
            <span class="bold">Yarn & Npm & Git</span> ，能够使用
            <span class="bold">Node.js</span>搭配
            <span class="bold">Express</span>进行基本后台开发
          </p>
        </li>
        <li>
          <p>
            熟悉
            <span class="bold">HTTP</span>协议及浏览器渲染原理，了解
            <span class="bold">前端性能优化</span> 策略
          </p>
        </li>
        <li>
          <p>
            熟悉
            <span class="bold">Ajax</span>与后端交互的原理，了解常用的跨域解决方案
            <span class="bold">JSONP、CORS</span> 等
          </p>
        </li>
        <li>
          <p>
            了解常用 UI 组件库，如
            <span class="bold">Bootstrap、ElementUI</span> 等
          </p>
        </li>
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
        shape: "circle",
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
          { name: "Node.js", max: 100 },
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
              value: [90, 75, 80, 80, 80, 85, 75, 90, 90],
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
#main {
  width: 400px;
  height: 260px;
  align-self: center;
  max-width: 90vw;
}
.main > p {
  color: #252728;
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 1px;
  font-weight: 300;
}
span.bold {
  font-weight: bold;
}
ul {
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
    margin: 80px 40px 40px;
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
    padding: 3em 1em;
    margin: 0;
  }
}
</style>