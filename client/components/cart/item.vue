<template lang="pug">
    li
        i.fa.fa-trash.fw.drop(@click="removeFromCart")
        .img(:style="`background: url('${info.img}') center center no-repeat; background-size: contain`")
        .info
            .name
                h4 {{ info.name }}
            .price
                i.fa.fa-rouble.fw {{ info.price }}
            .count
                .fa.fa-tag.fw
                | {{ info.count }}
</template>

<script>
    export default {
        props: ['info'],
        methods: {
            removeFromCart() {
                this.$store.dispatch('cart/onRemoveFromCart', this.info);
            }
        }
    }
</script>

<style scoped>
    li {
        display: flex;
        min-height: 100px;
        border-bottom: 2px solid #eee;
        padding: 0 15px;
    }
    .img {
        width: 40%;
    }
    .info {
        display: flex;
        flex-direction: column;
        padding: 15px;
    }
    .price {
        padding: 15px 0;
        font-weight: bold;
        color: #0023ff;
        font-size: 16px;
    }
    .drop {
        color: #0724ff;
        position: absolute;
        cursor: pointer;
        right: 0;
        padding: 25px;
        opacity: .5
    }
    li:hover .drop{
        opacity: 1
    }
    .count {
        font-weight: bold
    }
</style>
