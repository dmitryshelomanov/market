<template lang="pug">
    div
        .humburger(@click="show = !show", :class="{'active': show}")
            i.fa.fa-list.fw
        transition(name="slide-fade")
            .wrapper(v-show="show")
                .right-menu
                    ul
                        itemMenu(
                            v-for="item in items" 
                            :info="item"
                            :key="item.id"
                        )
</template>

<script>
import itemMenu from "./menuItem";

export default {
  data() {
    return {
      // items-ы типа с сервера пришли
      items: [
        {
          id: 1,
          name: "living room",
          icon: "/market/img/r-1.png",
          isIcon: true,
        },
        { id: 2, name: "office", icon: "/market/img/r-5.png", isIcon: true },
        { id: 3, name: "for kids", icon: "/market/img/r-4.png", isIcon: true },
        { id: 4, name: "kitchen", icon: "/market/img/r-3.png", isIcon: true },
        {
          id: 5,
          name: "accesories",
          icon: "/market/img/r-2.png",
          isIcon: true,
        },
      ],
      show: false,
    };
  },
  components: {
    itemMenu,
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 5;
}
.right-menu {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 365px;
  height: 100%;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 3;
}
.humburger {
  display: flex;
  width: 60px;
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  justify-content: center;
  z-index: 6;
}
.humburger:hover {
  box-shadow: 0 0 10px 5px #eee;
}
.humburger i {
  align-self: center;
  color: #0023ff;
}
.active {
  background: #7888f8;
}
ul {
  display: flex;
  padding: 0;
  flex-direction: column;
  margin: 0;
  justify-content: flex-end;
  padding-top: 200px;
}
@media screen and (max-width: 960px) {
  .right-menu {
    width: 50%;
  }
}
@media screen and (max-width: 760px) {
  .right-menu {
    width: 80%;
  }
  ul {
    padding-top: 100px;
  }
}
@media screen and (max-width: 460px) {
  .right-menu {
    width: 100%;
  }
}
</style>
