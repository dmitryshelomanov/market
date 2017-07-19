<template lang="pug">
    li
        nuxt-link(:to="{name: 'categories-id', params: {id: info.id}}")
            span {{ info.name }}
        img(:src="info.icon", v-if="info.isIcon")
</template>

<script>
    export default {
        props: ['info']
    }
</script>

<style scoped>
    li {
        display: flex;
        list-style: none;
        text-transform: uppercase;
        padding: 15px 70px 25px 0;
        justify-content: flex-end;
        transition: .5s
    }
    li a {
        color: #c5c5c5;
        text-decoration: none;
        font-weight: bold
    }
    li:hover {
        padding-right: 80px
    }
    li img {
        align-self: center
    }
    li img {
        height: 50px;
        width: 50px;
    }
    li span {
        margin-right: 50px
    }
    li a {
        display: flex;
        flex-direction: column;
        justify-content: center
    }
</style>
