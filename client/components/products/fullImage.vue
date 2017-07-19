<template lang="pug">
    .full(:style="`background: #fff url('${img}') center center no-repeat`")
        .likes
            | 45
            i.fa.fa-heart-o.fw
</template>

<script>
    export default {
        props: ['img']
    }
</script>

<style scoped>
    .likes {
        position: absolute;
        top: 0;
        right: 0;
        margin: 20px;
        font-weight: bold
    }
    .likes i {
        color: #ff99b1
    }
</style>
