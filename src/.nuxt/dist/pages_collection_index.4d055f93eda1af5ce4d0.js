webpackJsonp([0],{"/Zzg":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.product?a("modal",{staticClass:"collection-modal modal--description",attrs:{isOpened:t.isOpened},on:{close:t.handleClose}},[a("header",{staticClass:"collection-modal__header modal__header"},[a("h3",{staticClass:"collection-modal__title modal__title"},[t._v(t._s(t.product.description.title))])]),t.isOrder?a("section",{staticClass:"modal__body"},[a("div",{staticClass:"modal__content"},[a("main-form",{attrs:{buttons:t.buttons},on:{submit:t.submitHandler}})],1)]):a("section",{staticClass:"collection-modal__body modal__body"},[a("slider",{staticClass:"collection-modal__slider"},t._l(t.product.images,function(e){return a("slide",{key:e,staticClass:"collection-modal__slide"},[a("img",{attrs:{src:t.getImgUrl(e)}})])})),a("div",{staticClass:"collection-modal__content modal__content"},[t._v(t._s(t.product.description.text))]),a("button",{staticClass:"btn-main btn-main--danger",on:{click:function(e){t.isOrder=!0}}},[t._v(t._s(t.$t("buttons.order")))])],1)]):t._e()};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},"0P0x":function(t,e,a){var n={"./bg1.jpg":"udiu","./foto1.jpg":"FNta","./foto2.jpg":"wODb","./foto3.jpg":"J8SP","./logo-news.svg":"FyGp","./logo.png":"JamQ","./logo1.png":"cd2H","./logo3.svg":"qyr6","./next.png":"18Am","./prev.png":"gb8X","./prev.svg":"Loe0","./slider-img.jpg":"pMNF"};function i(t){return a(o(t))}function o(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="0P0x"},"18Am":function(t,e,a){t.exports=a.p+"img/next.3e346fa.png"},"2DAt":function(t,e,a){var n=a("kxFB");(t.exports=a("FZ+f")(!1)).push([t.i,".VueCarousel.slider .slider__arrow{display:block;width:40px;height:45px;background-repeat:no-repeat;background-position:50%}.VueCarousel.slider .slider__arrow--next{background-image:url("+n(a("18Am"))+")}.VueCarousel.slider .slider__arrow--prev{background-image:url("+n(a("gb8X"))+")}@media only screen and (max-width:460px){.VueCarousel.slider .VueCarousel-navigation-button{-webkit-transform:translateY(-50%);transform:translateY(-50%);padding:0}.VueCarousel.slider .VueCarousel-navigation-next{right:0}.VueCarousel.slider .VueCarousel-navigation-prev{left:0}}",""])},"2FXE":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("g5bo"),i=a("VU/8")(n.a,null,!1,null,null,null);i.options.__file="pages/collection/index.vue",e.default=i.exports},"3yED":function(t,e,a){var n=a("2DAt");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("rjj0").default)("132caea8",n,!1,{sourceMap:!1})},"4gw7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section collection"},[a("div",{staticClass:"container"},[a("div",{staticClass:"collection__content"},[a("div",{staticClass:"btn-group collection__button-bar"},t._l(t.tabs,function(e){return a("button",{key:"tab-"+e.key,class:["btn-tab",{"is-active":t.activeTab===e.key}],on:{click:function(a){t.activeTab=e.key}}},[t._v(t._s(e.text.toUpperCase()))])})),a("div",{staticClass:"collection__container"},[a("transition-group",{attrs:{name:"collection",mode:"out-in"}},t._l(t.tabs,function(e){return t.activeTab===e.key?a("collection-block",{key:"block-"+e.key,attrs:{tab:e.key},on:{click:function(e){t.isModalShown=!0}},model:{value:t.activeProduct,callback:function(e){t.activeProduct=e},expression:"activeProduct"}}):t._e()}))],1)])]),a("collection-modal",{attrs:{isOpened:t.isModalShown,product:t.activeProduct},on:{closeModal:t.handleClose}})],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},"4h/Q":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".collection .container{min-height:100vh}.collection__title{margin:20px 0 0;text-align:center}.collection__container{padding:45px 0 0}.collection__block{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-transition:all .4s;transition:all .4s;max-width:750px;margin:0 auto}.collection__button-bar{padding:20px;text-align:center}.collection__wrap{position:relative;width:250px;height:250px}.collection-product{position:absolute;top:0;left:0;width:100%;height:100%;margin:10px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;cursor:pointer}.collection-product__info{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:rgba(0,0,0,.5);color:#fff;line-height:100%;font-weight:700;opacity:0;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-transition:all .3s;transition:all .3s;z-index:2}.collection-product:hover .collection-product__info{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.collection-product.is-active{-webkit-transform:scale(1.1);transform:scale(1.1);z-index:1}.collection-product__img{max-width:100%}.collection-modal .modal{width:600px}.collection-modal__body{padding:32px 0 0;padding:2rem 0 0}.collection-modal__slide{margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.collection-enter-active{opacity:0;-webkit-transform:translateX(-40%);transform:translateX(-40%)}.collection-leave-active{opacity:0;-webkit-transform:translateX(40%);transform:translateX(40%)}@media only screen and (max-width:460px){.collection .btn-group{padding:20px 0}.collection__container{padding-top:0}.collection-modal .modal{min-width:auto}.collection-modal .modal__close{top:7px;right:5px}}@media only screen and (max-width:370px){.btn-tab{width:80px;font-size:14px}}",""])},"52Kd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[t.isOpened?a("div",{staticClass:"overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[a("div",{staticClass:"modal"},[t._t("default"),a("button",{staticClass:"btn-default modal__close",attrs:{title:t.$t("buttons.close")},on:{click:t.close}})],2)]):t._e()])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},"6apJ":function(t,e,a){"use strict";var n=a("qpss"),i=a("B7Vr"),o=!1;var r=function(t){o||a("ebDl")},l=a("VU/8")(n.a,i.a,!1,r,null,null);l.options.__file="components/Field/Field.vue",e.a=l.exports},"8yfR":function(t,e,a){"use strict";var n=a("TDbV"),i=a("v7ri"),o=a("Epn/");e.a={name:"CollectionModal",components:{Modal:n.a,Slider:i.a,MainForm:o.a},props:{isOpened:{type:Boolean,default:!1},product:{type:Object,default:function(){return{description:{title:"",text:""},images:[]}}}},data:function(){return{isOrder:!1}},computed:{buttons:function(){return[{text:this.$t("buttons.back"),handler:this.returnHandle}]}},methods:{handleClose:function(){this.isOrder=!1,this.$emit("closeModal")},returnHandle:function(){this.isOrder=!1},getImgUrl:function(t){return a("0P0x")("./"+t)},submitHandler:function(t){this.$router.push("thanks")}}}},"9SQm":function(t,e,a){var n=a("MO0C");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("rjj0").default)("52b50ba8",n,!1,{sourceMap:!1})},ARHx:function(t,e,a){"use strict";var n=a("yMMj"),i=a("jWLa");e.a={name:"Collection",layout:"aside",components:{CollectionModal:n.a,CollectionBlock:i.a},data:function(){return{activeTab:"man",activeProduct:{description:{title:"",text:""},images:[]},isModalShown:!1}},computed:{tabs:function(){return[{key:"man",text:this.$t("collection.man")},{key:"woman",text:this.$t("collection.woman")},{key:"kids",text:this.$t("collection.kids")}]}},methods:{handleClose:function(){this.activeProduct={description:{title:"",text:""},images:[]},this.isModalShown=!1}}}},B7Vr:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"textarea"===t.type?a("div",{class:["text-field",{invalid:!!t.errorMsg}]},[a("textarea",{directives:[{name:"validate",rawName:"v-validate",value:t.rule,expression:"rule"}],staticClass:"text-field__textarea",attrs:{id:t.type,name:t.name},on:{change:function(e){t.$emit("change",e.target.value)},blur:t.handleBlur}}),a("label",{class:["text-field__label",{"is-active":!!t.value}],attrs:{for:t.id}},[t.icon?a("fa",{staticClass:"text-field__icon",attrs:{icon:[t.icon.prefix,t.icon.class]}}):t._e(),t._t("default")],2),t.errorMsg?a("div",{staticClass:"field__error"},[t._v("* "+t._s(t.errorMsg))]):t._e()]):a("div",{class:["field",{invalid:!!t.errorMsg}]},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.rule,expression:"rule"}],class:["field__input",{"is-active":!!t.value}],attrs:{id:t.id,type:t.type,name:t.name},on:{change:function(e){t.$emit("change",e.target.value)},blur:t.handleBlur}}),a("label",{staticClass:"field__label",attrs:{for:t.id}},[t._t("default")],2),t.icon?a("fa",{staticClass:"field__icon",attrs:{icon:[t.icon.prefix,t.icon.class]}}):t._e(),t.errorMsg?a("div",{staticClass:"field__error"},[t._v("* "+t._s(t.errorMsg))]):t._e()],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},BT55:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitHandle(e)}}},[t._l(t.fieldsArray,function(e){return a("field",{key:e.name,attrs:{name:e.name,type:e.type,rule:e.rule,icon:e.icon},on:{blur:t.handleValidation},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"field.value"}},[t._v(t._s(e.placeholder))])}),a("div",{staticClass:"btn-group"},[t._l(t.buttons,function(e){return a("button",{key:e.text,staticClass:"btn-main btn-main--danger",on:{click:e.handler}},[t._v(t._s(e.text))])}),a("button",{ref:"submitBtn",staticClass:"btn-main btn-main--danger",attrs:{type:"submit"}},[t._v(t._s(t.$t("buttons.submit")))])],2)],2)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},"Epn/":function(t,e,a){"use strict";var n=a("EuyM");e.a=n.a},EuyM:function(t,e,a){"use strict";var n=a("PnZK"),i=a("BT55"),o=!1;var r=function(t){o||a("vSv8")},l=a("VU/8")(n.a,i.a,!1,r,null,null);l.options.__file="components/MainForm/MainForm.vue",e.a=l.exports},FNta:function(t,e,a){t.exports=a.p+"img/foto1.b77325a.jpg"},FuFL:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".field{position:relative}.field:not(:last-child){margin-bottom:30px}.field__input{width:100%;padding:5px 20px 5px 30px;border:none;border-bottom:2px solid #ccc}.field__input.is-active+label,.field__input:focus+label{left:0;top:-5px;-webkit-transform:translateY(-100%);transform:translateY(-100%);font-size:12px}.field__input:focus{outline:none;border-bottom-color:#dd5145}.field__input:focus+label,.field__input:focus~.field__icon{color:#dd5145}.field__label{left:30px;pointer-events:none;-webkit-transition:all .3s;transition:all .3s}.field__icon,.field__label{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.field__icon{left:0;font-size:20px}.field__error{position:absolute;bottom:-5px;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%);color:red;font-size:12px}.field.invalid{color:red}.field.invalid:not(:last-child){margin-bottom:40px}.field.invalid .field__input{border-color:red}.text-field{position:relative;border-top:10px solid transparent}.text-field__label{position:absolute;top:15px;left:20px;-webkit-transition:all .3s;transition:all .3s;font-size:18px;pointer-events:none}.text-field__label.is-active{top:-25px;left:0;font-size:14px}.text-field__icon{margin-right:10px}.text-field__textarea{width:100%;min-height:200px;padding:15px 20px;resize:none;border-radius:10px}.text-field__textarea:focus{outline:none;border-color:#dd5145}.text-field__textarea:focus+label{top:-25px;left:0;font-size:14px;color:#dd5145}.text-field.invalid{color:red}.text-field.invalid:not(:last-child){margin-bottom:40px}.text-field.invalid .text-field__textarea{border-color:red}",""])},FyGp:function(t,e,a){t.exports=a.p+"img/logo-news.109174c.svg"},J8SP:function(t,e,a){t.exports=a.p+"img/foto3.a98b4db.jpg"},JamQ:function(t,e,a){t.exports=a.p+"img/logo.9591899.png"},KqSO:function(t,e,a){"use strict";var n=a("ARHx"),i=a("4gw7"),o=!1;var r=function(t){o||a("WAzF")},l=a("VU/8")(n.a,i.a,!1,r,null,null);l.options.__file="components/Collection/Collection.vue",e.a=l.exports},Loe0:function(t,e,a){t.exports=a.p+"img/prev.e9c8372.svg"},MO0C:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.overlay{position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.5);-webkit-transition:opacity .3s;transition:opacity .3s;z-index:10}.modal{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);min-width:400px;min-height:200px;background-color:#fff;border-radius:15px;-webkit-transition:all .3s;transition:all .3s;z-index:11}.modal__header{padding:10px 20px;background-color:#007acc;color:#fff;text-align:center;border-radius:15px 15px 0 0}.modal__title{margin:0}.modal__content{padding:20px}.modal__close{position:absolute;top:5px;right:-40px;width:25px;height:25px;cursor:pointer;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.modal__close:after,.modal__close:before{content:"";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:3px;height:100%;background-color:#fafafa;border-radius:2px;-webkit-transition:all .3s;transition:all .3s}.modal__close:before{-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.modal__close:after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.modal__close:hover{-webkit-transform:rotate(180deg) scale(1.1);transform:rotate(180deg) scale(1.1)}.modal__close:hover:after,.modal__close:hover:before{background-color:#fff;-webkit-box-shadow:0 0 2px #fff;box-shadow:0 0 2px #fff}.modal-enter,.modal-leave-active{opacity:0}.modal-enter .modal,.modal-leave-active .modal{-webkit-transform:translate(-50%,-50%) scale(1.1);transform:translate(-50%,-50%) scale(1.1)}@media only screen and (max-width:460px){.modal--description .modal{width:95%;min-width:0}.modal--description .modal__close{top:10px;right:10px;width:20px;height:20px}.modal--galery .modal{width:95%}}',""])},OqSk:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("no-ssr",[e("carousel",{staticClass:"slider",attrs:{perPage:this.slidesToShow,navigationEnabled:!0,paginationEnabled:!1,navigationNextLabel:"<span class='slider__arrow slider__arrow--next' />",navigationPrevLabel:"<span class='slider__arrow slider__arrow--prev' />",loop:!0}},[this._t("default")],2)],1)],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},PnZK:function(t,e,a){"use strict";var n=a("gRE1"),i=a.n(n),o=a("qzan");e.a={name:"MainForm",components:{Field:o.a},props:{reqFields:{type:Array,default:function(){return["name","email","phone"]}},buttons:{type:Array,default:function(){return[]}}},data:function(){return{formFields:{name:{rule:"required",placeholder:this.$t("placeholders.name"),name:"name",type:"text",icon:{prefix:"far",class:"user"},value:"",isValid:!1},email:{rule:"required|email",placeholder:this.$t("placeholders.mail"),name:"email",type:"email",icon:{prefix:"far",class:"envelope"},value:"",isValid:!1},phone:{rule:"required|numeric",placeholder:this.$t("placeholders.phone"),name:"phone",type:"tel",value:"",icon:{prefix:"fas",class:"mobile-alt"},isValid:!1},message:{rule:"required",placeholder:this.$t("placeholders.message"),name:"message",type:"textarea",value:"",icon:{prefix:"far",class:"comments"},isValid:!1}}}},computed:{fieldsArray:function(){var t=this;return i()(this.formFields).filter(function(e){return t.reqFields.includes(e.name)})}},methods:{submitHandle:function(){this.fieldsArray.some(function(t){return!t.isValid})?this.$refs.submitBtn.classList.add("shake-anim"):this.$emit("submit",this.formFields)},handleValidation:function(t,e){this.formFields[t].isValid=e}}}},TDbV:function(t,e,a){"use strict";var n=a("ZxgR");e.a=n.a},TmV0:function(t,e,a){a("fZOM"),t.exports=a("FeBl").Object.values},UTVj:function(t,e,a){"use strict";e.a={name:"Slider",props:{slidesToShow:{type:Number,default:1}}}},VZje:function(t,e,a){"use strict";var n=a("Dd8w"),i=a.n(n),o=a("NYxO");e.a={name:"CollectionBlock",model:{prop:"activeProduct",event:"click"},props:{tab:String,activeProduct:{type:Object,default:function(){return{}}}},computed:i()({},Object(o.mapGetters)(["man","woman","kids"]),{collection:function(){return this[""+this.tab]}}),methods:{getImgUrl:function(t){return a("0P0x")("./"+t)}}}},WAzF:function(t,e,a){var n=a("4h/Q");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("rjj0").default)("a7ba2f70",n,!1,{sourceMap:!1})},ZxgR:function(t,e,a){"use strict";var n=a("g3Pw"),i=a("52Kd"),o=!1;var r=function(t){o||a("9SQm")},l=a("VU/8")(n.a,i.a,!1,r,null,null);l.options.__file="components/Modal/Modal.vue",e.a=l.exports},cd2H:function(t,e,a){t.exports=a.p+"img/logo1.2777b6f.png"},ebDl:function(t,e,a){var n=a("FuFL");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("rjj0").default)("dd7672de",n,!1,{sourceMap:!1})},fZOM:function(t,e,a){var n=a("kM2E"),i=a("mbce")(!1);n(n.S,"Object",{values:function(t){return i(t)}})},g3Pw:function(t,e,a){"use strict";e.a={name:"Modal",props:{isOpened:{type:Boolean,default:!1},id:{type:String,default:"modal"}},methods:{close:function(){this.$emit("close",this.id)}}}},g5bo:function(t,e,a){"use strict";var n=a("pSQd");e.a=n.a},gGFD:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collection__block"},t._l(t.collection,function(e){return a("div",{key:e.id,staticClass:"collection__wrap",on:{click:function(a){t.$emit("click",e)}}},[a("div",{class:["collection-product",{"is-active":t.activeProduct.id===e.id}]},[a("img",{staticClass:"collection-product__img",attrs:{src:t.getImgUrl(e.mainImage),alt:e.id}}),a("div",{staticClass:"collection-product__info"},[a("p",{staticClass:"collection-product__text"},[t._v(t._s(t.$t("collection.clickInfo")))])])])])}))};n._withStripped=!0;var i={render:n,staticRenderFns:[]};e.a=i},gRE1:function(t,e,a){t.exports={default:a("TmV0"),__esModule:!0}},gb8X:function(t,e,a){t.exports=a.p+"img/prev.cbc1670.png"},jWLa:function(t,e,a){"use strict";var n=a("VZje"),i=a("gGFD"),o=a("VU/8")(n.a,i.a,!1,null,null,null);o.options.__file="components/Collection/CollectionBlock.vue",e.a=o.exports},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},mbce:function(t,e,a){var n=a("lktj"),i=a("TcQ7"),o=a("NpIQ").f;t.exports=function(t){return function(e){for(var a,r=i(e),l=n(r),s=l.length,c=0,d=[];s>c;)o.call(r,a=l[c++])&&d.push(t?[a,r[a]]:r[a]);return d}}},pMNF:function(t,e,a){t.exports=a.p+"img/slider-img.9fac1d8.jpg"},pSQd:function(t,e,a){"use strict";var n=a("KqSO");e.a=n.a},qpss:function(t,e,a){"use strict";e.a={name:"Field",model:{prop:"value",event:"change"},props:{type:{type:String,default:"text"},id:{type:String,default:"inp"},value:{type:String,default:""},icon:{type:Object},rule:{type:String,default:""},name:{type:String,default:"text"}},data:function(){return{errorMsg:""}},mounted:function(){this.$validator.localize(this.$store.state.i18n.locale)},methods:{handleBlur:function(t){var e=this;this.$validator.validate().then(function(t){if(e.errorMsg="",!t){var a=e.errors.items.find(function(t){return t.field===e.name});e.errorMsg=a.msg}}),this.$emit("blur",this.name,this.fields[this.name].valid)}}}},qyr6:function(t,e,a){t.exports=a.p+"img/logo3.6769eff.svg"},qzan:function(t,e,a){"use strict";var n=a("6apJ");e.a=n.a},rHMQ:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".form__warning{padding:0 0 20px;color:red;font-size:12px}.form .btn-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.form .btn-group .btn-main{margin:0}.form .btn-group .btn-main:not(:last-child){margin-right:20px}.shake-anim{-webkit-animation:shake .3s;animation:shake .3s}@-webkit-keyframes shake{0%{-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}50%{-webkit-transform:translateX(10%);transform:translateX(10%)}75%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes shake{0%{-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}50%{-webkit-transform:translateX(10%);transform:translateX(10%)}75%{-webkit-transform:translateX(-10%);transform:translateX(-10%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}",""])},udiu:function(t,e,a){t.exports=a.p+"img/bg1.7d28adc.jpg"},v7ri:function(t,e,a){"use strict";var n=a("x1Rq");e.a=n.a},vSv8:function(t,e,a){var n=a("rHMQ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("rjj0").default)("f21a4cd8",n,!1,{sourceMap:!1})},wODb:function(t,e,a){t.exports=a.p+"img/foto2.e5eb4b5.jpg"},x1Rq:function(t,e,a){"use strict";var n=a("UTVj"),i=a("OqSk"),o=!1;var r=function(t){o||a("3yED")},l=a("VU/8")(n.a,i.a,!1,r,null,null);l.options.__file="components/Slider/Slider.vue",e.a=l.exports},yMMj:function(t,e,a){"use strict";var n=a("8yfR"),i=a("/Zzg"),o=a("VU/8")(n.a,i.a,!1,null,null,null);o.options.__file="components/Collection/CollectionModal.vue",e.a=o.exports}});