webpackJsonp([1],{"0yah":function(t,e){},AQlQ:function(t,e){},BjtM:function(t,e){},"E/Q+":function(t,e){},G5iw:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("G5iw")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v(this._s(this.city)),e("span",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont search-icon"},[this._v("")]),this._v("请输入城市/景点/游玩主题")])}]};var h=i("VU/8")(d,u,!1,function(t){i("TfJG")},"data-v-488abdb8",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(p,m,!1,function(t){i("e6VG")},"data-v-234d10e3",null).exports,f={name:"HomeIcon",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1,pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var C=i("VU/8")(f,_,!1,function(t){i("Q1we")},"data-v-eebf7c5c",null).exports,y={name:"HomeRecommend",props:{list:Array}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(y,w,!1,function(t){i("E/Q+")},"data-v-6c4d657d",null).exports,b={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var $=i("VU/8")(b,k,!1,function(t){i("AQlQ")},"data-v-cac6e6b0",null).exports,x=i("mtWM"),E=i.n(x),I={name:"Home",components:{HomeHeader:h,HomeSwiper:v,HomeIcons:C,HomeRecommend:g,HomeWeekend:$},computed:c()({},Object(l.c)(["city"])),data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){E.a.get("./static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var L=i("VU/8")(I,S,!1,function(t){i("RUb0")},null,null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont city-back"},[this._v("")])])],1)},staticRenderFns:[]};var A=i("VU/8")({name:"CityHeader"},U,!1,function(t){i("dAIB")},"data-v-82480e14",null).exports,T=i("GQaK"),H={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",timer:null,list:[]}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),computed:{hasNoData:function(){return!this.list.length}},mounted:function(){this.scroll=new T.a(this.$refs.search,{mouseWheel:!0,click:!0,tap:!0})},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100)}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),t.hasNoData?i("li",{staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")]):t._e()],2)])])},staticRenderFns:[]};var V=i("VU/8")(H,R,!1,function(t){i("zVh1")},"data-v-902860ba",null).exports,F={name:"CityList",props:{hot:Array,cities:Object,letter:String},computed:c()({},Object(l.c)({currentCity:"city"})),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new T.a(this.$refs.wrapper,{mouseWheel:!0,click:!0,tap:!0})},watch:{letter:function(){if(this.letter){var t=this.letter.trim(),e=this.$refs[t][0];this.scroll.scrollToElement(e)}}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前位置")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var N=i("VU/8")(F,O,!1,function(t){i("tCqm")},"data-v-36eccc23",null).exports,D={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchstatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleClick:function(t){this.$emit("change",t.target.innerHTML)},handleTouchStart:function(){this.touchstatus=!0},handleTouchMove:function(t){var e=this;this.touchstatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchstatus=!1}}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:[t.handleClick,function(e){return e.preventDefault(),t.handleTouchStart(e)}],touchmove:t.handleTouchMove,touchEnd:t.handleTouchEnd}},[t._v(t._s(e))])}),0)},staticRenderFns:[]};var G={name:"City",components:{CityHeader:A,CitySearch:V,CityList:N,CityAlphabet:i("VU/8")(D,j,!1,function(t){i("YNEh")},"data-v-601b943f",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},methods:{getCitiesInfo:function(){E.a.get("/api/city.json").then(this.handleCitiesInfo)},handleCitiesInfo:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}},handleChange:function(t){this.letter=t}},mounted:function(){this.getCitiesInfo()}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hot:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleChange}})],1)},staticRenderFns:[]};var Q=i("VU/8")(G,M,!1,function(t){i("vExS")},null,null).exports,B={name:"CommonGallery",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGalleryClick:function(){this.$emit("close")}}},W={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGalleryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallery-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var Y=i("VU/8")(B,W,!1,function(t){i("w50L")},"data-v-b5b48d1e",null).exports,P={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var q=i("VU/8")({name:"FadeAnimation"},P,!1,function(t){i("pWUQ")},"data-v-c0727736",null).exports,z={name:"DetailBanner",props:{name:String,bannerImg:String,galleryImg:Array},components:{CommonGallery:Y,FadeAnimation:q},data:function(){return{showGallery:!1}},methods:{handleBannerClick:function(){this.showGallery=!0},handleGalleryClose:function(){this.showGallery=!1}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:this.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.name))]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v(t._s(this.galleryImg.length))])])]),t._v(" "),i("fade-animation",[i("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{imgs:t.galleryImg},on:{close:t.handleGalleryClose}})],1)],1)},staticRenderFns:[]};var K=i("VU/8")(z,J,!1,function(t){i("0yah")},"data-v-03dda0ed",null).exports,X={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){console.log("scroll");var t=document.documentElement.scrollTop||document.body.scrollTop;if(t>60){this.showAbs=!1;var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e}}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var tt=i("VU/8")(X,Z,!1,function(t){i("cmV/")},"data-v-cb6b79c0",null).exports,et={name:"DetailList",props:{list:Array}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",[i("detail-list",{staticClass:"item-children",attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var st={name:"Detail",components:{DetailBanner:K,DetailHeader:tt,DetailList:i("VU/8")(et,it,!1,function(t){i("i2uM")},"data-v-292b33e3",null).exports},data:function(){return{sightName:"",bannerImg:"",galleryImgs:[],categoryList:[],lastSightId:""}},methods:{getDetailInfo:function(){E.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleDetailData)},handleDetailData:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.galleryImgs=e.galleryImgs,this.categoryList=e.categoryList}}},mounted:function(){this.lastSightId=this.$route.params.id,this.getDetailInfo()},activated:function(){this.lastSightId!==this.$route.params.id&&(this.lastSightId=this.$route.params.id,this.getDetailInfo())}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{name:this.sightName,bannerImg:this.bannerImg,galleryImg:this.galleryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"test"},[e("detail-list",{attrs:{list:this.categoryList}})],1)],1)},staticRenderFns:[]};var at=i("VU/8")(st,nt,!1,function(t){i("TROk")},"data-v-0e407cd4",null).exports;s.a.use(r.a);var rt=new r.a({routes:[{path:"/",name:"Home",component:L},{path:"/city",name:"City",component:Q},{path:"/detail/:id",name:"Detail",component:at}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ot=i("v5o6"),ct=i.n(ot),lt=i("F3EI"),dt=i.n(lt),ut="泰安";try{localStorage.city&&(ut=localStorage.city)}catch(t){}var ht={city:ut},pt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var mt=new l.a.Store({state:ht,mutations:pt});i("m0iu"),i("cjdf"),i("BjtM"),i("v2ns");s.a.config.productionTip=!1,ct.a.attach(document.body),s.a.use(dt.a),new s.a({el:"#app",router:rt,store:mt,components:{App:a},template:"<App/>"})},Q1we:function(t,e){},RUb0:function(t,e){},TROk:function(t,e){},TfJG:function(t,e){},YNEh:function(t,e){},cjdf:function(t,e){},"cmV/":function(t,e){},dAIB:function(t,e){},e6VG:function(t,e){},i2uM:function(t,e){},m0iu:function(t,e){},pWUQ:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},tCqm:function(t,e){},v2ns:function(t,e){},vExS:function(t,e){},w50L:function(t,e){},zVh1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ab5f33b515253db0bd2b.js.map