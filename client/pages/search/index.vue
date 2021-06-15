<template lang="pug">
    .container
        .row
            .col-lg-12
                .search
                    input(
                        type="text"
                        v-model="search"
                        @blur="placeholder('blur')"
                        @focus="placeholder('focus')"
                        @keyup.enter="searchItem"
                    )
                .search-flex
                    .search-item
                        .img(style="background: url('/market/img/red-seat.png') center center no-repeat; background-size: contain")
                        .name
                            h4 red seat
                    .search-item
                        .img(style="background: url('/market/img/dark-seat.png') center center no-repeat; background-size: contain")
                        .name
                            h4 dark seat
                .search-result 2 search result
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      search: "text",
    };
  },
  methods: {
    placeholder(param) {
      if (this.search === "text" && param === "focus") {
        this.search = this.search;
      } else if (this.search === "" && param === "blur") {
        this.search = "text";
      }
    },
    searchItem() {},
  },
};
</script>

<style scoped>
.search {
  margin-top: 200px;
}
input[type="text"] {
  border: 1px solid transparent;
  border-bottom-color: #dcd9d9;
  outline: none;
  background: transparent;
  width: 100%;
  font-family: "Open Sans Condensed", sans-serif;
  text-transform: uppercase;
  font-size: 40px !important;
  transition: 0.5s;
}
input[type="text"]:focus {
  border-bottom-color: #7887f7;
}
.search-flex {
  display: flex;
  margin-top: 100px;
  width: 100%;
  justify-content: space-between;
}
.search-item {
  display: flex;
  width: 49%;
  background: #fff;
  min-height: 200px;
  transition: 0.5s;
}
.img {
  width: 50%;
  height: 100%;
}
.search-item .name {
  align-self: center;
}
.search-result {
  padding: 50px 0;
  font-weight: bold;
}
</style>
