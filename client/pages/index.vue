<template lang="pug">  
    div.container-fluid.nopadding
        div.main
            div.logo
                h1 OLIOS
</template>

<script>
export default {
  layout: "main",
};
</script>

<style lang="sass" scoped>
.main
    display: flex
    background: url('/market/img/bg.png') 100% 100% no-repeat
    background-size: cover
    width: 100%
    height: 100vh
    padding: 0
    margin: 0
    justify-content: center
.logo
    padding: 50px 0
</style>
