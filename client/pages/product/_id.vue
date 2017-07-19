<template lang="pug">
    .container-fluid
        .row
            .col-lg-12
                .view
                    fullImage(:img="'/img/red-seat.png'")
                    .info
                        .product
                        .other
                            .other-item(v-for="item in products", :key="item.id")
                                div(:style="`background: url('${item.img}') center center no-repeat; background-size: contain`")
                                .other-item-info
                                    h4 {{ item.name }}
                                    span 
                                        i(class="fa fa-rouble fw")
                                        | {{ item.price }}
</template>

<script>
    import fullImage from '~components/products/fullImage';

    export default {
        layout: 'main',
        data() {
            return {
                products: [
                    { id: 1, img: '/img/dark-seat.png', name: 'read seat', price: 45 },
                    { id: 2, img: '/img/blue-seat.png', name: 'blue seat', price: 45 },
                    { id: 3, img: '/img/modern-bed.png', name: 'modern bedt', price: 45 }
                ]
            }
        },
        components: {
            fullImage
        }
    }
</script>

<style scoped>
    .view {
        display: flex;
    }
    .info {
        display: flex;
        flex-direction: column;
        width: 65%;
        height: 100vh
    }
    .full {
        position: relative;
        height: 100vh;
        width: 35%;
        box-shadow: 0 0 5px #c1b3b3;
        z-index: 2;
    }
    .product {
        background: transparent;
        height: 75%
    }
    .other {
        display: flex;
        background: #fff;
        height: 25%;
    }
    .other-item {
        display: flex;
        width: 33%;
        justify-content: flex-start;
        flex-direction: column
    }
    .other-item:not(:last-child) {
        border-right: 1px solid #eee
    }
    .other-item div {
        width: 80%;
        height: 60%;
        align-self: center
    }
    .other-item .other-item-info {
        align-self: center
    }
    .other-item-info {
        display: flex;
    }
    .other-item-info span {
        font-weight: bold;
        color: #0023ff;
        font-size: 16px;
        align-self: center;
        padding: 15px
    }
    .other-item-info h4 {
        align-self: center
    }
</style>
