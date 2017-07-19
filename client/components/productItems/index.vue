<template lang="pug">
    .item-flex
        .cart-block
            i.fa.fa-cart-plus.fw.cart(v-if="!inCart" @click="addToCart")
            i.fa.fa-trash.fw.cart(v-if="inCart" @click="removeFromCart")
            .count
                input(type="text" placeholder="count" value="1" v-model="count" v-if="!inCart")
                input(type="text" placeholder="count" value="1" v-model="count" disabled v-if="inCart")
            span 
                | {{ info.price * count }}
                i.fa.fa-rouble.fw
        .img(:style="`background: url(${info.img}) center center no-repeat; background-size: contain`")
        .info
            .name
                nuxt-link(:to="{name: 'product-id', params: {id: info.id}}")
                    h4 {{ info.name }}
            span {{ info.text }}
            .price
                i.fa.fa-rouble.fw
                | {{ info.price }}
</template>

<script>
    export default {
        props: ['info', 'cart'],
        data() {
            return {
                count: 1
            }
        },
        computed: {
            inCart() {
                let newInfo = this.cart.find(element => element.id === this.info.id);
                if (newInfo) {
                    this.count = newInfo.count;
                    return true;
                }
                return false;
            }
        },
        methods: {
            addToCart() {
                this.info.count = this.count;
                this.$store.dispatch('cart/onAddToCart', this.info);
            },
            removeFromCart() {
                this.$store.dispatch('cart/onRemoveFromCart', this.info);
            }
        }
    }
</script>

<style scoped>
    .img {
        display: flex;
        justify-content: center;
        width: 100%;
        min-height: 250px;
        
    }
    .img img {
        width: 100%;
        max-width: 200px;
    }
    span {
        color: #a8a8a8
    }
    .price {
        padding: 15px 0;
        font-weight: bold;
        color: #0023ff;
        font-size: 16px;
    }
    .cart {
        /*padding: 10px;*/
        font-weight: bold;
        cursor: pointer;
        color: #0724ff
    }
    .cart-block {
        display: flex;
        width: 100%;
        background: transparent;
        position: absolute;
        left: 0;
        top: 0;
        padding: 20px;
        transition: .5s
    }
    .item-flex {
        position: relative;
        justify-content: flex-start
    }
    .count,
    i {
        align-self: center
    }
    .count {display: none}
    .cart-block span {
        display: none;
        font-weight: bold;
    }
    .cart-block:hover .count,
    .cart-block:hover span {
        display: block
    }
    .cart-block:hover {
        background: #fff;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
    }
    input[type=text] {
        border: 1px solid transparent;
        border-bottom-color: #dcd9d9;
        outline: none;
        background: transparent;
        width: 100%;
        font-family: 'Open Sans Condensed', sans-serif;
        text-transform: uppercase;
        font-size: 14px !important;
        transition: .5s;
        margin-left: 15px;
    }   
    input[type=text]:focus {
        border-bottom-color: #7887f7;
    } 
</style>