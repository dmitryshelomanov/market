<template lang="pug">
    .left-menu
        ul
            li
                img(src="/market/img/logo.png", alt="")
            li(aria-label="home", data-microtip-position="right", role="tooltip")
                nuxt-link(:to="{name: 'index'}" exact)
                    i.fa.fa-home.fw
            li(aria-label="search" data-microtip-position="right" role="tooltip")
                nuxt-link(:to="{name: 'search'}")
                     i.fa.fa-search.fw
        ul
            li
                img(src="/market/img/in.png", alt="")
</template>

<style scoped>
.left-menu {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  background: #fff;
  flex-direction: column;
  z-index: 3;
  opacity: 0.5;
  transition: 0.5s;
}
.left-menu:hover {
  opacity: 1;
  width: 100px;
}
.left-menu:hover i {
  font-size: 20px;
}
ul {
  display: flex;
  flex-direction: column;
  padding: 0;
}
ul:first-child {
  height: 80%;
}
ul li {
  display: flex;
  list-style: none;
  justify-content: center;
}
ul:first-child li {
  padding: 20px 0;
}
ul:first-child li:first-child {
  padding-bottom: 100px;
}
ul li img {
  width: 25px;
  height: 25px;
}
i {
  color: #e7e7e7;
  cursor: pointer;
  transition: 0.5s;
}
@media screen and (max-width: 960px) {
  .left-menu {
    width: 100%;
    height: 40px;
    top: calc(100% - 40px);
    flex-direction: row;
  }
  ul {
    flex-direction: row;
  }
  ul:first-child {
    width: 70%;
    height: 40px;
  }
  ul {
    padding: 0 !important;
    margin: 0;
    justify-content: space-around;
  }
  ul li {
    padding: 0 !important;
    align-self: center;
  }
  ul:last-child {
    width: 30%;
    justify-content: center;
  }
  .left-menu:hover {
    opacity: 1;
    width: 100%;
  }
}
@media screen and (max-width: 400px) {
  ul li img {
    width: 15px;
    height: 15px;
  }
}
</style>
