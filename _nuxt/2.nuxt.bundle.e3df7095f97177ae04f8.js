webpackJsonp([2],{100:function(t,e,i){i(122);var n=i(2)(i(77),i(110),"data-v-74f355b7",null);t.exports=n.exports},106:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container nopadding"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[t._m(0),i("div",{staticClass:"container-flex products"},t._l(t.products,function(e,n){return i("itemComponent",{key:e.id,attrs:{info:e,cart:t.cart}})}))]),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("h3",[t._v("products")]),i("h3",[t._v("living room")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"more"},[t._v("show more products")])])}]}},110:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-flex"},[i("div",{staticClass:"cart-block"},[t.inCart?t._e():i("i",{staticClass:"fa fa-cart-plus fw cart",on:{click:t.addToCart}}),t.inCart?i("i",{staticClass:"fa fa-trash fw cart",on:{click:t.removeFromCart}}):t._e(),i("div",{staticClass:"count"},[t.inCart?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"text",placeholder:"count",value:"1"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}}),t.inCart?i("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"text",placeholder:"count",value:"1",disabled:"disabled"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}}):t._e()]),i("span",[t._v(" "+t._s(t.info.price*t.count)),i("i",{staticClass:"fa fa-rouble fw"})])]),i("div",{staticClass:"img",style:"background: url("+t.info.img+") center center no-repeat; background-size: contain"}),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[i("nuxt-link",{attrs:{to:{name:"product-id",params:{id:t.info.id}}}},[i("h4",[t._v(t._s(t.info.name))])])],1),i("span",[t._v(t._s(t.info.text))]),i("div",{staticClass:"price"},[i("i",{staticClass:"fa fa-rouble fw"}),t._v(t._s(t.info.price))])])])},staticRenderFns:[]}},118:function(t,e,i){var n=i(87);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(11)("3742217c",n,!0)},122:function(t,e,i){var n=i(91);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(11)("ee602688",n,!0)},69:function(t,e,i){i(118);var n=i(2)(i(80),i(106),null,null);t.exports=n.exports},77:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["info","cart"],data:function(){return{count:1}},computed:{inCart:function(){var t=this,e=this.cart.find(function(e){return e.id===t.info.id});return!!e&&(this.count=e.count,!0)}},methods:{addToCart:function(){this.info.count=this.count,this.$store.dispatch("cart/onAddToCart",this.info)},removeFromCart:function(){this.$store.dispatch("cart/onRemoveFromCart",this.info)}}}},80:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(100),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={layout:"main",data:function(){return{products:[{id:1,name:"red seat",price:45,text:"lorem ipsum dolor sit amet",img:"/img/red-seat.png"},{id:2,name:"whit table",price:350,text:"lorem ipsum dolor sit amet",img:"/img/white-table.png"},{id:3,name:"blue seat",price:45,text:"lorem ipsum dolor sit amet",img:"/img/blue-seat.png"},{id:4,name:"modern bed",price:350,text:"lorem ipsum dolor sit amet",img:"/img/modern-bed.png"},{id:5,name:"dark seat",price:45,text:"lorem ipsum dolor sit amet",img:"/img/dark-seat.png"}]}},computed:{cart:function(){return this.$store.getters["cart/getProducts"]}},components:{itemComponent:a.default}}},87:function(t,e,i){e=t.exports=i(10)(!1),e.push([t.i,".header{display:-ms-flexbox;display:flex;padding:50px 0;-ms-flex-pack:justify;justify-content:space-between}.header h3{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.products .item-flex:nth-child(odd){width:25%;-ms-flex-direction:column;flex-direction:column;padding:15px}.products .item-flex:nth-child(4n+2){width:74%}.products .item-flex:nth-child(4n+4){width:48%}.products .item-flex:nth-child(4n+2) .img{width:65%}.products .item-flex:nth-child(4n+4) .info,.products .item-flex:nth-child(5n+2) .info{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;padding:15px}.products .item-flex:nth-child(4n+4) .img{width:50%}.more{display:-ms-flexbox;display:flex;color:#0023ff;font-weight:700;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;padding:50px 0}@media screen and (max-width:960px){.products{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}.products .item-flex{width:49%!important}.products .item-flex:nth-child(4n+2),.products .item-flex:nth-child(4n+4){-ms-flex-direction:column;flex-direction:column}}@media screen and (max-width:660px){.products{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.products .item-flex{width:80%!important;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}}@media screen and (max-width:400px){.products .item-flex{width:96%!important;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}}",""])},91:function(t,e,i){e=t.exports=i(10)(!1),e.push([t.i,".img[data-v-74f355b7]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;min-height:250px}.img img[data-v-74f355b7]{width:100%;max-width:200px}span[data-v-74f355b7]{color:#a8a8a8}.price[data-v-74f355b7]{padding:15px 0;font-weight:700;color:#0023ff;font-size:16px}.cart[data-v-74f355b7]{font-weight:700;cursor:pointer;color:#0724ff}.cart-block[data-v-74f355b7]{display:-ms-flexbox;display:flex;width:100%;background:transparent;position:absolute;left:0;top:0;padding:20px;transition:.5s}.item-flex[data-v-74f355b7]{position:relative;-ms-flex-pack:start;justify-content:flex-start}.count[data-v-74f355b7],i[data-v-74f355b7]{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.count[data-v-74f355b7]{display:none}.cart-block span[data-v-74f355b7]{display:none;font-weight:700}.cart-block:hover .count[data-v-74f355b7],.cart-block:hover span[data-v-74f355b7]{display:block}.cart-block[data-v-74f355b7]:hover{background:#fff;box-shadow:4px 4px 20px rgba(0,0,0,.2)}input[type=text][data-v-74f355b7]{border:1px solid transparent;border-bottom-color:#dcd9d9;outline:none;background:transparent;width:100%;font-family:Open Sans Condensed,sans-serif;text-transform:uppercase;font-size:14px!important;transition:.5s;margin-left:15px}input[type=text][data-v-74f355b7]:focus{border-bottom-color:#7887f7}",""])}});