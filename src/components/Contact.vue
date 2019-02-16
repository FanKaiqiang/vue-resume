<template>
  <main>
    <div class="main">
      <h2>联系我</h2>
      <div class="line"></div>
      <p class="title">本人是 2019 届南昌大学计算机专业的本科应届毕业生，正在寻求一份前端工程师的工作，如蒙青睐，不胜荣幸。</p>
      <p class="way">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tel"></use>
        </svg> 13296820568
      </p>
      <p class="way">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qq"></use>
        </svg> 1574989439@qq.com
      </p>
      <p class="way">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wechat"></use>
        </svg> 13296820568
      </p>
      <p class="way">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-email"></use>
        </svg> fankaiqiang001@gmail.com
      </p>
      <div class="wrap">
        <span class="ribbon6">联系方式</span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
a {
  color: blue;
  text-decoration: underline;
  font-weight: bold;
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

.main > p.title {
  color: #252728;
  font-size: 16px;
  line-height: 1.6em;
  letter-spacing: 1px;
  font-weight: 300;
}

p.way {
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: .4em;
  font-weight: bold;
  color: #333;
}
svg{
  margin-right: 5px;
  
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
    height: calc(100vh - 90px);
  }
  p.way{
    font-size: 20px;
  }
}
</style>