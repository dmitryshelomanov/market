<template lang="pug">
    div
        .open-cart(@click="open", :class="{'active': show, 'alert': getFlag}")
            i.fa.fa-opencart.fw
        transition(name="slide-fade")
            .wrapper(v-show="show")
                .cart
                    ul
                        item(
                            v-for="item in getProducts"
                            :key="item.id"
                            :info="item"
                        )
</template>

<script>
    import item from './item';

    export default {
        data() {
            return {
                show: false,
            }
        },
        computed: {
            getFlag () {
                return this.$store.getters['cart/getFlag'];
            },
            getProducts() {
                return this.$store.getters['cart/getProducts'];
            }
        },
        methods: {
            open() {
                this.show = !this.show;
                this.$store.commit('cart/UPDATE_FLAG', false);
            }
        },
        mounted() {
            this.$store.dispatch('cart/onGetProducts');
        },
        components: {
            item
        },
    }
</script>

<style scoped>
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100vh;
        z-index: 5
    }
    .cart {
        display: block;
        position: fixed;
        top:0;
        right: 0;
        width: 365px;
        height: 100%;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
        background: #fff;
        z-index: 3;
        box-sizing: border-box;
        overflow: auto
    }
    .open-cart {
        display: flex;
        width: 60px;
        height: 60px;
        position: fixed;
        top: 65px;
        right: 0;
        margin: 25px;
        cursor: pointer;
        background: #fff;
        border-radius: 50%;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
        transition: .5s;
        justify-content: center;
        z-index: 6
    }
    .open-cart:hover {
        box-shadow: 0 0 10px 5px #eee
    }
    .open-cart i {
        align-self: center;
        color: #0023ff
    }
    .active {
        background: #7888f8
    }
    ul {
        display: flex;
        padding: 0;
        flex-direction: column;
        margin: 0;
        justify-content: flex-end;
        padding-top: 200px;
        list-style: none

    }
    @media screen and (max-width: 960px) {
        .cart {
            width: 50%
        }
    }
    @media screen and (max-width: 760px) {
        .cart {
            width: 80%
        }
        ul {
            padding-top: 100px
        }
    }
    @media screen and (max-width: 460px) {
        .cart {
            width: 100%
        }
    }
    @keyframes animScale {
        to {
            transform: scale(1.1);
            background: #c6cdfd
        }
    }
    .alert {
        animation: animScale 1s infinite ease-in-out ;
        animation-direction: alternate
    }
</style>

