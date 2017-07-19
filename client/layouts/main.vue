<template lang="pug">
    div
        leftMenu
        nuxt
        rightMenu
        cart
</template>

<script>
    import leftMenu from '~components/menu/leftMenu/index';
    import rightMenu from '~components/menu/rightMenu/index';
    import cart from '~components/cart/index';

    export default {
        components: {
            leftMenu,
            rightMenu,
            cart
        }
    }
</script>