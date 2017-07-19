<template lang="pug">
    .container.nopadding
        .row
            .col-lg-12
                .header
                    h3 products
                    h3 living room
                .container-flex.products
                    itemComponent(
                        v-for="(item, index) in products" 
                        :info="item"
                        :key="item.id"
                        :cart="cart"
                    )
            .col-lg-12
                .more show more products
</template>

<script>
    import itemComponent from '~components/productItems/index';

    export default {
        layout: 'main',
        data() {
            return {
                products: [
                    {id: 1, name: 'red seat', price: 45, text: 'lorem ipsum dolor sit amet', img: '/img/red-seat.png'},
                    {id: 2, name: 'whit table', price: 350, text: 'lorem ipsum dolor sit amet', img: '/img/white-table.png'},
                    {id: 3, name: 'blue seat', price: 45, text: 'lorem ipsum dolor sit amet', img: '/img/blue-seat.png'},
                    {id: 4, name: 'modern bed', price: 350, text: 'lorem ipsum dolor sit amet', img: '/img/modern-bed.png'},
                    {id: 5, name: 'dark seat', price: 45, text: 'lorem ipsum dolor sit amet', img: '/img/dark-seat.png'}
                ]
            }
        },
        computed: {
            cart() {
                return this.$store.getters['cart/getProducts'];
            }
        },
        components: {
            itemComponent
        }
    }
</script>

<style>
    .header {
        display: flex;
        padding: 50px 0;
        justify-content: space-between;
    }
    .header h3 {
        align-self: center
    }
    .products .item-flex:nth-child(2n + 1) {
        width: 25%;
        flex-direction: column;
        padding: 15px;
    }

    .products .item-flex:nth-child(4n + 2) {
        width: 74%;
    }

    .products .item-flex:nth-child(4n + 4) {
        width: 48%;
    }

    .products .item-flex:nth-child(4n + 2) .img {
        width: 65%;
    }

    .products .item-flex:nth-child(5n + 2) .info,
    .products .item-flex:nth-child(4n + 4) .info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
    }

    .products .item-flex:nth-child(4n + 4) .img {
        width: 50%;
    }

    .more {
        display: flex;
        color: #0023ff;
        font-weight: bold;
        justify-content: center;
        text-transform: uppercase;
        padding: 50px 0;
    }

    @media screen and (max-width: 960px) {
        .products {
            flex-direction: row;
            justify-content: space-between;
        }

        .products .item-flex {
            width: 49% !important;
        }

        .products .item-flex:nth-child(4n + 4),
        .products .item-flex:nth-child(4n + 2) {
            flex-direction: column;
        }
    }
    @media screen and (max-width: 660px) {
        .products {
            flex-direction: column;
            justify-content: center;
        }

        .products .item-flex {
            width: 80% !important;
            align-self: center;
        }
    }
    @media screen and (max-width: 400px) {
        .products .item-flex {
            width: 96% !important;
            align-self: center;
        }
    }

</style>
