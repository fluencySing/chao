<template>
  <div class="loading">
        <span>loading...</span> 
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {}
    },
  }
</script>
<style scoped>
  .loading{
    width: 100%;
    height: 100%;
    margin: 30px 300px;
  }
  .loading span{
    color: #999;
  }
</style>