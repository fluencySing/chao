<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  body{
    background-color: #F1F1F1;
    overflow:Scroll;
    overflow-y:hidden
  }
  a{
    text-decoration: none;
    color: #000;
  }
  img {   
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;   
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
    }

</style>
