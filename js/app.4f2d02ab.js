(function(t){function a(a){for(var e,o,l=a[0],n=a[1],c=a[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,l=1;l<s.length;l++){var n=s[l];0!==i[n]&&(e=!1)}e&&(r.splice(a--,1),t=o(o.s=s[0]))}return t}var e={},i={app:0},r=[];function o(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,a,s){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(s,e,function(a){return t[a]}.bind(null,e));return s},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=n;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"084b":function(t,a,s){"use strict";s("8be8")},"188f":function(t,a,s){"use strict";s("2325")},"1b19":function(t,a,s){t.exports=s.p+"img/mahmoud2.73e01f38.jpg"},"1eff":function(t,a,s){},2325:function(t,a,s){},3415:function(t,a,s){},4995:function(t,a,s){t.exports=s.p+"img/temblet2.bd79c857.jpg"},"4a0c":function(t,a,s){"use strict";s("c546")},"4a70":function(t,a,s){t.exports=s.p+"img/home607.d3434700.jpg"},"53c0":function(t,a,s){t.exports=s.p+"img/home705.13f29c26.jpg"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("d3b7"),s("159b");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{style:{"--mainColor":t.color},attrs:{id:"app"}},[s("a",{staticClass:"more",attrs:{href:"#"}},[s("button",{staticClass:"s1 s3",on:{click:t.upTop}},[t._v("V")])]),s("div",{staticClass:"nav"}),s("HederMe"),s("backgroundss"),s("router-view"),s("Sied")],1)},r=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-Heder",attrs:{id:"nav"}},[s("div",{staticClass:"Hedr"},[t._m(0),s("div",{staticClass:"icon-div"},[s("span",{staticClass:"icon",on:{click:t.Tagoole}},[s("span"),s("span"),s("span")])]),s("ul",{class:t.toog},[s("li",{},[s("router-link",{attrs:{to:"/",exact:""}},[s("a",{staticClass:"nav-Color",class:{highlight:1==t.selected},attrs:{"aria-current":"page",href:"#"},on:{click:function(a){t.selected=1,t.upTop()}}},[t._v(" Home")])])],1),s("li",{},[s("router-link",{attrs:{to:"/about"}},[s("a",{staticClass:"nav-Color",class:{highlight:2==t.selected},attrs:{"aria-current":"page",href:"#"},on:{click:function(a){t.selected=2,t.upTop()}}},[t._v("About ")])])],1),s("li",{},[s("router-link",{attrs:{to:"/shwo"}},[s("a",{staticClass:"nav-Color",class:{highlight:4==t.selected},attrs:{"aria-current":"page",href:"#"},on:{click:function(a){t.selected=4,t.upTop()}}},[t._v("shwo ")])])],1),s("li",{})]),s("div",{class:t.openSerch},[s("input",{staticClass:"inpou-sach",attrs:{type:"text",placeholder:"serch"}})]),s("div",{staticClass:"butom-al"},[s("button",{staticClass:"b-serch",on:{click:t.TagooleSerch}},[s("i",{staticClass:"fa fa-search"})])])]),t._m(1)])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"brand"},[s("a",{attrs:{href:"/"}},[t._v("Mahmoud")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"asd66"},[s("div",{staticClass:"font"})])}],n={data:function(){return{isDropped:!1,toog:"ul-heder",openSerch:"sied",selected:void 0}},methods:{Tagoole:function(){this.toog="ul-heder "===this.toog?"ToogleIcon ":"ul-heder "},TagooleSerch:function(){this.openSerch="inpou-sach-open"===this.openSerch?"sied":"inpou-sach-open"},dropIt:function(){this.isDropped=!this.isDropped},upTop:function(){window.scrollTo({top:770,behavior:"smooth"})}}},c=n,d=(s("d082"),s("2877")),u=Object(d["a"])(c,o,l,!1,null,null,null),m=u.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"d",style:{"--mainColor":t.color},attrs:{id:"d"}},[s("div",{staticClass:"sied-one",class:t.toog},[s("div",{staticClass:"body-Sied"},[s("ul",{staticClass:"ul",attrs:{"sitch-colors":""}},[s("li",{staticClass:"red",attrs:{"data-color":"red"},on:{click:t.AupdaetColor}}),s("li",{staticClass:"green",attrs:{"data-color":"green"},on:{click:t.AupdaetColor}}),s("li",{staticClass:"yellowgreen",attrs:{"data-color":"yellowgreen "},on:{click:t.AupdaetColor}}),s("li",{staticClass:"orangered",attrs:{"data-color":"orangered"},on:{click:t.AupdaetColor}})])]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal1"}},[t._v(" Sign in or Create ")]),t._m(0),t._m(1),s("div",{staticClass:"A3",on:{click:t.Tagoole}},[s("div",{on:{click:t.Tagoole2}},[s("button",{staticClass:"A1",on:{click:function(t){return t.target.classList.toggle("A2")}}},[t._v(" > ")])])])]),t._m(2)])},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("br"),s("br"),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample1","aria-expanded":"false","aria-controls":"collapseExample"}},[t._v(" Send Text ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"collapse",attrs:{id:"collapseExample1"}},[s("div",{staticClass:"card card-body"},[s("label",{attrs:{for:""}},[t._v("Inter yor Name")]),s("input",{staticClass:"input",attrs:{type:"text"}}),s("br"),s("label",{attrs:{for:""}},[t._v("Inter yor password")]),s("input",{staticClass:"input",attrs:{type:"password"}})]),s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample3","aria-expanded":"false","aria-controls":"collapseExample"}},[t._v(" Send ")])]),s("div",{staticClass:"collapse",attrs:{id:"collapseExample3"}},[s("div",{staticClass:"card card-body"},[s("p",[t._v("There is no database at the moment")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"exampleModal1",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Sign in")]),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),s("div",{staticClass:"modal-body"},[s("label",{attrs:{for:""}},[t._v("Inter yor Name")]),s("input",{staticClass:"input",attrs:{type:"text"}}),s("br"),s("label",{attrs:{for:""}},[t._v("Inter yor password")]),s("input",{staticClass:"input",attrs:{type:"password"}})]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" Go ")])])])])])}],f={data:function(){return{asden:"add-display-bloc",closeSied:"display-bloc",toog:"sied-one",selected:void 0,color:"red"}},methods:{Tagoole:function(){this.toog="sied-one"===this.toog?"add":"sied-one"},Tagoole2:function(){this.asden="add-display-bloc"===this.asden?"fa-rotate-180":"add-display-bloc"},AupdaetColor:function(t){this.color=t.target.getAttribute("data-color")}}},b=f,h=(s("e9a5"),Object(d["a"])(b,p,v,!1,null,null,null)),C=h.exports,_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"background",attrs:{id:"background"}},[s("div",{staticClass:"background2"},[s("div",{staticClass:"background3"})]),s("div",{staticClass:"landing"},[s("div",{staticClass:"home"},[s("h4",[t._v("theham is "),s("span",[t._v("wordpress theme")])]),s("h2",[t._v("we are creative")]),s("p",[t._v("just buy and enjoy these awesome features")]),s("button",{staticClass:"b1"},[t._v("view now")]),s("button",{staticClass:"b2"},[t._v("view now")])])])])}],w={},x=w,k=(s("a2d9"),Object(d["a"])(x,_,g,!1,null,null,null)),y=k.exports;e["a"].directive(window.onscroll=function(){window.scrollY>=500?document.querySelector(".s3").classList.add("s2"):document.querySelector(".s3").classList.remove("s2")});var E={data:function(){return{color:"#b71540",visible:!1}},name:"App",components:{HederMe:m,backgroundss:y,Sied:C},methods:{upTop:function(){window.scrollTo({top:670,behavior:"smooth"})}}},S=E,N=(s("c659"),Object(d["a"])(S,i,r,!1,null,"137efaaa",null)),L=N.exports,T=s("8c4f"),I=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("a",{staticClass:"more",attrs:{href:"#"}}),s("button",{staticClass:"s1 s3",on:{click:t.upTop}},[t._v("V")]),s("div",{staticClass:"sticy1"},[s("div",{staticClass:"stict2"},[s("HederUnder")],1)])])},q=[],O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hed"},[e("div",{staticClass:"sticy1"},[e("div",{staticClass:"stict2"},[e("div",{staticClass:"containerr-Heder"},[e("ul",{directives:[{name:"bold2",rawName:"v-bold2"}],staticClass:"as"},[e("li",{on:{click:t.scroll4}},[t._v("features")]),e("li",{on:{click:t.scrlopart2}},[t._v("Gallery")]),e("li",{on:{click:t.scrlopart3}},[t._v("Skiles")]),e("li",{on:{click:t.scrlopart4}},[t._v("Cade")]),e("li",{on:{click:t.scrlopart5}},[t._v("End")])])])])]),e("div",{staticClass:"deparet4",attrs:{id:"depa"}},[e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"home",attrs:{id:"home"}},[e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"fas fa-palette fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"fab fa-android fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"fas fa-cog fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"fas fa-pencil-ruler fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"fas fa-mug-hot fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"fas fa-trophy fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"far fa-envelope fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"far fa-folder fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"box"},[e("i",{staticClass:"fas fa-search fa-4x"}),e("p",[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quis et similique quasi, tempora? ")])])])])]),e("div",{staticClass:"part2",attrs:{id:"part2"}},[e("div",{staticClass:"container"},[e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"selse"},[e("h1",[t._v("Gallery")]),t._m(1)])])]),e("div",{staticClass:"part3",attrs:{id:"part3"}},[e("div",{staticClass:"container"},[e("h1",[t._v("Skiles")]),e("div",{staticClass:"B1"},[t._m(2),e("div",{staticClass:"W1"},[e("div",{directives:[{name:"bold3",rawName:"v-bold3"}],staticClass:"w2"})])]),e("div",{staticClass:"B1"},[t._m(3),e("div",{staticClass:"W1"},[e("div",{directives:[{name:"bold6",rawName:"v-bold6"}],staticClass:"w2"})])]),e("div",{staticClass:"B1"},[t._m(4),e("div",{staticClass:"W1"},[e("div",{directives:[{name:"bold7",rawName:"v-bold7"}],staticClass:"w2"})])])])]),e("div",{staticClass:"containerss container row",attrs:{id:"part4"}},[e("div",{staticClass:"titel"},[t._v("Card")]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("bab3"),alt:"Card image cap"}}),t._m(5)]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("e269"),alt:"Card image cap"}}),t._m(6)]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("e269"),alt:"Card image cap"}}),t._m(7)]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("bab3"),alt:"Card image cap"}}),t._m(8)])]),t._m(9),t._m(10)])},$=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"titel"},[s("p",[t._v("creative amazing features")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-bs-ride":"carousel"}},[e("div",{staticClass:"carousel-indicators"},[e("button",{staticClass:"active",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0","aria-current":"true","aria-label":"Slide 1"}}),e("button",{attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}}),e("button",{attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"}})]),e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block w-100",attrs:{src:s("9475"),alt:"..."}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:s("4995"),alt:"..."}})]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block w-100",attrs:{src:s("9de5"),alt:"..."}})])]),e("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"visually-hidden"},[t._v("Previous")])]),e("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"visually-hidden"},[t._v("Next")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Titel"},[s("h3",[t._v("Html")]),s("p",[t._v("80%")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Titel"},[s("h3",[t._v("Css")]),s("p",[t._v("85%")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Titel"},[s("h3",[t._v("js")]),s("p",[t._v("75%")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home12",attrs:{id:"part5"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"titel"},[s("h3",[t._v("latest news")]),s("div",{staticClass:"lant"})]),s("div",{staticClass:"home-heding"},[s("div",{staticClass:"dokan"},[s("h2",{staticClass:"titelss"},[t._v("do"),s("span",[t._v("k")]),t._v("an")]),s("p",[t._v(" Lorem ipsum dolor sit, amet consectetur Porro, atque saepe. Fuga mollitia ut illo fugit repellat eveniet? Ut, maxime. ")]),s("p",{staticClass:"asd5"},[s("span",[t._v("email@")]),t._v(" :mahmoud.com")]),s("p",[s("span",[t._v("phone")]),t._v(":01064280870")]),s("p",[s("span",[t._v("address")]),t._v(" :egypt")]),s("div",{staticClass:"icons"},[s("i",{staticClass:"fab fa-youtube"}),s("i",{staticClass:"fab fa-facebook"}),s("i",{staticClass:"fab fa-twitter"}),s("i",{staticClass:"fab fa-youtube"}),s("i",{staticClass:"fab fa-facebook"}),s("i",{staticClass:"fab fa-twitter"})])]),s("div",{staticClass:"inputs"},[s("div",{staticClass:"bakt"},[s("input",{attrs:{type:"text",required:"",placeholder:"yuor name"}}),s("input",{attrs:{type:"text",required:"",placeholder:"yuor email"}})]),s("div",{staticClass:"bakt"},[s("input",{attrs:{type:"text",required:"",placeholder:"subject"}}),s("input",{attrs:{type:"text",required:"",placeholder:"url"}})]),s("div",{staticClass:"bakt"},[s("input",{staticClass:"end",attrs:{type:"text",required:"",placeholder:"your mess"}})])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"end-under"},[s("div",{staticClass:"eng"},[s("h2",[t._v("Designed by")]),s("p",[t._v("p/mahmoud montaser helmy")])])])}],j={methods:{scroll4:function(){var t=document.getElementById("depa");t.scrollIntoView({behavior:"smooth"})},scrlopart2:function(){var t=document.getElementById("part2");t.scrollIntoView({behavior:"smooth"})},scrlopart3:function(){var t=document.getElementById("part3");t.scrollIntoView({behavior:"smooth"})},scrlopart4:function(){var t=document.getElementById("part4");t.scrollIntoView({behavior:"smooth"})},scrlopart5:function(){var t=document.getElementById("part5");t.scrollIntoView({behavior:"smooth"})}}},P=new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("Heder-Un1"),a.unobserve(t.target))}))}));e["a"].directive("bold2",{bind:function(t){t.classList.add("Heder-Un2"),P.observe(t)}});var D=new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("Heder-Un1"),a.unobserve(t.target))}))}));e["a"].directive("bold3",{bind:function(t){t.classList.add("Heder-Un2"),D.observe(t)}});var H=new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("add1"),a.unobserve(t.target))}))}));e["a"].directive("bold6",{bind:function(t){t.classList.add("add2"),H.observe(t)}});var A=new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("add3"),a.unobserve(t.target))}))}));e["a"].directive("bold7",{bind:function(t){t.classList.add("add4"),A.observe(t)}});var M=j,G=(s("4a0c"),Object(d["a"])(M,O,$,!1,null,"8c45c730",null)),B=G.exports,U={name:"Home",components:{HederUnder:B},data:function(){return{soly:"s1"}},methods:{upTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},V=U,J=(s("ddf7"),Object(d["a"])(V,I,q,!1,null,"0f769a81",null)),Y=J.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("div",{staticClass:"container"},[e("h3",[t._v("Enter yor task")]),e("form",{attrs:{action:""}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"data-v-d69d26f2",attrs:{type:"text",placeholder:"Enter Your Text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwored,expression:"passwored"}],attrs:{type:"passwored",placeholder:"Enter your Text"},domProps:{value:t.passwored},on:{input:function(a){a.target.composing||(t.passwored=a.target.value)}}}),e("br"),e("button",{staticClass:"btn btn-primary",on:{click:function(a){return a.preventDefault(),t.ADDTaseks()}}},[t._v(" Add ")]),e("button",{staticClass:"btn btn-primary",on:{click:function(a){return a.preventDefault(),t.Re()}}},[t._v("ReData")])]),e("div",{staticClass:"list"},t._l(t.skeles,(function(a,s){return e("div",{key:s,staticClass:"item-list"},[e("div",[t._v(t._s(a.oneName))]),e("div",[t._v(t._s(a.TwoPass))])])})),0)]),e("div",{staticClass:"movie__actions-text"},[t._v("TisTing")]),e("div",{staticClass:"sied1"},[e("div",{staticClass:"sied"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row flex-nowrap"},[e("div",{staticClass:"sied45 col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark"},[e("div",{staticClass:"d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"},[t._m(0),t._m(1),e("hr"),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"dropdown pb-4"},[t._m(2),t._m(3)])])]),e("div",{staticClass:"col py-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"container"},[e("div",{staticClass:"home-hiding"},[e("div",{staticClass:"debart2"},[e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"cared1"},[e("img",{attrs:{src:s("4a70"),alt:""}}),e("h3",[t._v("chekin")]),e("p",[t._v(" Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. ")]),e("button",{staticClass:"sd"},[t._v("Done")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"cared1"},[e("img",{directives:[{name:"bold",rawName:"v-bold"}],attrs:{src:s("6f1c"),alt:""}}),e("h3",[t._v("chekin")]),e("p",[t._v(" Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. ")]),e("button",{staticClass:"sd"},[t._v("Done")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"cared1"},[e("img",{attrs:{src:s("6f1c"),alt:""}}),e("h3",[t._v("chekin")]),e("p",[t._v(" Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. ")]),e("button",{staticClass:"sd"},[t._v("Done")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"cared1"},[e("img",{attrs:{src:s("6f1c"),alt:""}}),e("h3",[t._v("chekin")]),e("p",[t._v(" Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. ")]),e("button",{staticClass:"sd"},[t._v("Done")])]),e("div",{directives:[{name:"bold2",rawName:"v-bold2"}],staticClass:"cared1"},[e("img",{attrs:{src:s("53c0"),alt:""}}),e("h3",[t._v("chekin")]),e("p",[t._v(" Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. ")]),e("button",[t._v("Done")])]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"cared1"},[e("img",{attrs:{src:s("c7ea"),alt:""}}),e("h3",[t._v("chekin")]),e("p",[t._v(" Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. Lorem ipsum dolor, ratione. ")]),e("button",[t._v("Done")])])])])])])])])])])])])},W=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none",attrs:{href:"/"}},[s("span",{staticClass:"fs-5 d-none d-sm-inline"},[t._v("Menu")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start",attrs:{id:"menu"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link align-middle px-0",attrs:{href:"#"}},[s("i",{staticClass:"fs-4 bi-house"}),s("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Home")])])]),s("li",[s("a",{staticClass:"nav-link px-0 align-middle",attrs:{href:"#submenu1","data-bs-toggle":"collapse"}},[s("i",{staticClass:"fs-4 bi-speedometer2"}),s("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Dashboard")])]),s("ul",{staticClass:"collapse show nav flex-column ms-1",attrs:{id:"submenu1","data-bs-parent":"#menu"}},[s("li",{staticClass:"w-100"},[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Item")]),t._v(" 1 ")])]),s("li",[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Item")]),t._v(" 2 ")])])])]),s("li",[s("a",{staticClass:"nav-link px-0 align-middle",attrs:{href:"#"}},[s("i",{staticClass:"fs-4 bi-table"}),s("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Orders")])])]),s("li",[s("a",{staticClass:"nav-link px-0 align-middle",attrs:{href:"#submenu2","data-bs-toggle":"collapse"}},[s("i",{staticClass:"fs-4 bi-bootstrap"}),s("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Bootstrap")])]),s("ul",{staticClass:"collapse nav flex-column ms-1",attrs:{id:"submenu2","data-bs-parent":"#menu"}},[s("li",{staticClass:"w-100"},[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Item")]),t._v(" 1")])]),s("li",[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Item")]),t._v(" 2")])])])]),s("li",[s("a",{staticClass:"nav-link px-0 align-middle",attrs:{href:"#submenu3","data-bs-toggle":"collapse"}},[s("i",{staticClass:"fs-4 bi-grid"}),s("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Products")])]),s("ul",{staticClass:"collapse nav flex-column ms-1",attrs:{id:"submenu3","data-bs-parent":"#menu"}},[s("li",{staticClass:"w-100"},[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Product")]),t._v(" 1")])]),s("li",[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Product")]),t._v(" 2")])]),s("li",[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Product")]),t._v(" 3")])]),s("li",[s("a",{staticClass:"nav-link px-0",attrs:{href:"#"}},[s("span",{staticClass:"d-none d-sm-inline"},[t._v("Product")]),t._v(" 4")])])])]),s("li",[s("a",{staticClass:"nav-link px-0 align-middle",attrs:{href:"#"}},[s("i",{staticClass:"fs-4 bi-people"}),s("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Customers")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"d-flex align-items-center text-white text-decoration-none dropdown-toggle",attrs:{href:"#",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e("img",{staticClass:"rounded-circle",attrs:{src:s("9475"),alt:"hugenerd",width:"30",height:"30"}}),e("span",{staticClass:"d-none d-sm-inline mx-1"},[t._v("loser")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow"},[s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("New project...")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Settings")])]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Profile")])]),s("li",[s("hr",{staticClass:"dropdown-divider"})]),s("li",[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Sign out")])])])}],z=(s("b0c0"),s("e9c4"),{data:function(){return{name:"",passwored:"",skeles:[],toog:"sied"}},methods:{ADDTaseks:function(){this.skeles.push({oneName:this.name,TwoPass:this.passwored,done:!1}),localStorage.setItem("asd",JSON.stringify(this.skeles)),this.name="",this.passwored="",console.log(this.skeles)},Re:function(){var t=window.localStorage.getItem("asd");t&&(this.skeles=JSON.parse(t))}},name:"about"}),F=z,K=(s("084b"),Object(d["a"])(F,R,W,!1,null,"64c06580",null)),Q=K.exports,X=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"our-help form"},[s("form",{attrs:{action:""}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(a){a.target.composing||(t.text=a.target.value)}}}),s("button",{staticClass:"bnt",on:{click:function(a){return a.preventDefault(),t.addTaskes()}}},[t._v("Add")])]),t._l(t.skiles,(function(a,e){return s("div",{key:e,staticClass:"list"},[s("div",{staticClass:"skl"},[t._v(t._s(a.oneText))])])})),s("button",{on:{click:t.Tagoole}},[t._v("stineg")]),s("div",{class:t.toog})],2)},Z=[],tt={data:function(){return{pageName:"Help",text:"",skiles:[],toog:"unsied"}},methods:{Tagoole:function(){this.toog="sied"===this.toog?"unsied":"sied"}}},at=tt,st=(s("188f"),Object(d["a"])(at,X,Z,!1,null,"1f0b49f6",null)),et=st.exports,it=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"asd"},[e("titssrr"),e("div"),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"collapse",attrs:{id:"collapseExample"}},[e("div",{staticClass:"card card-body"},[e("form",{attrs:{action:""}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tasktext,expression:"tasktext"}],staticClass:"m-1",attrs:{type:"text ",placeholder:"inpot yor link imag"},domProps:{value:t.tasktext},on:{input:function(a){a.target.composing||(t.tasktext=a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.two,expression:"two"}],staticClass:"m-1",attrs:{type:"text",placeholder:"inpot yor pargrahp"},domProps:{value:t.two},on:{input:function(a){a.target.composing||(t.two=a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tree,expression:"tree"}],staticClass:"m-1",attrs:{type:"text",placeholder:"inpot yor button Name"},domProps:{value:t.tree},on:{input:function(a){a.target.composing||(t.tree=a.target.value)}}}),e("br"),e("div",{staticClass:"bout"},[e("button",{staticClass:"btn btn-dark asden",attrs:{disabled:!t.tasktext},on:{click:function(a){return a.preventDefault(),t.addTask.apply(null,arguments)}}},[t._v(" add task ")]),t.tasks.length>1?e("button",{staticClass:"btn btn-outline-danger text-right asden",on:{click:function(a){return a.preventDefault(),t.deletall.apply(null,arguments)}}},[t._v(" delete all ")]):t._e()])])])]),e("div",{staticClass:"row"},t._l(t.tasks,(function(a,s){return e("div",{key:s,staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:a.words,alt:"..."}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.two))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.tasks.titel_text))]),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v(t._s(a.tree))]),e("button",{staticClass:"btn btn-danger m-1 p-1",on:{click:function(a){return t.deleteTask(s)}}},[t._v(" delete ")])])])})),0),e("div",{staticClass:"row"},[e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("c7ea"),alt:"Card image cap"}}),t._m(1)]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("1b19"),alt:"Card image cap"}}),t._m(2)]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("9475"),alt:"Card image cap"}}),t._m(3)]),e("div",{directives:[{name:"bold",rawName:"v-bold"}],staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:s("6119"),alt:"Card image cap"}}),t._m(4)])])])],1)},rt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"}},[t._v(" Create New Card ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),s("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Go somewhere")])])}],ot=(s("a434"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"bottom-right",on:{click:t.scrollTop}},[t._t("default")],2)}),lt=[],nt={data:function(){return{visible:!1}},methods:{scrollTop:function(){var t=this;this.intervalId=setInterval((function(){0===window.pageYOffset&&clearInterval(t.intervalId),window.scroll(0,window.pageYOffset-50)}),20)},scrollListener:function(){this.visible=window.scrollY>150}},mounted:function(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollListener)}},ct=nt,dt=(s("82ac"),Object(d["a"])(ct,ot,lt,!1,null,"5a634016",null)),ut=dt.exports,mt={name:"shwo-asd",components:{titssrr:ut},data:function(){return{tasks:[],tasktext:"",two:"",tree:""}},methods:{addTask:function(){this.tasks.push({words:this.tasktext,two:this.two,tree:this.tree,done:!1}),this.tasktext="",this.two="",this.tree="",localStorage.setItem("asd",JSON.stringify(this.tasks)),console.log(this.tasks),console.log(this.tasks.length)},reddata:function(){var t=window.localStorage.getItem("asd");t&&(this.tasks=JSON.parse(t))},deleteTask:function(t){this.tasks.splice(t,1)},deletall:function(){this.tasks=[],this.tasktext=""}},mounted:function(){this.reddata()}},pt=mt,vt=(s("6c33"),Object(d["a"])(pt,it,rt,!1,null,"3ba6f904",null)),ft=vt.exports;e["a"].use(T["a"]);var bt=[{path:"/",name:"Home",component:Y},{path:"/helpe",name:"helpe",component:et},{path:"/about",name:"About",component:Q},{path:"/shwo",name:"shwo-asd",component:ft}],ht=new T["a"]({mode:"history",base:"/",routes:bt}),Ct=ht,_t=s("2f62");e["a"].use(_t["a"]);var gt=new _t["a"].Store({state:{},mutations:{},actions:{},modules:{}});s("7b17"),s("ab8b"),s("b107"),s("f5df1"),s("1157"),s("15f5"),s("7051");e["a"].config.productionTip=!1;var wt=new IntersectionObserver((function(t,a){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("enter"),a.unobserve(t.target))}))}));a["default"]={bind:function(t){t.classList.add("before-enter"),wt.observe(t)}};e["a"].directive("bold",{bind:function(t){t.classList.add("before-enter"),wt.observe(t)}}),new e["a"]({router:Ct,store:gt,render:function(t){return t(L)}}).$mount("#app")},5829:function(t,a,s){},6119:function(t,a,s){t.exports=s.p+"img/mahmoud4.bc4be962.jpg"},"6c33":function(t,a,s){"use strict";s("7d54")},"6f1c":function(t,a,s){t.exports=s.p+"img/home704.3aac1eba.jpg"},"7d54":function(t,a,s){},"7fc6":function(t,a,s){},"82ac":function(t,a,s){"use strict";s("5829")},"8be8":function(t,a,s){},9475:function(t,a,s){t.exports=s.p+"img/mahmoud3.0144cfbf.jpg"},"9de5":function(t,a,s){t.exports=s.p+"img/home103.7708e26c.jpg"},a2d9:function(t,a,s){"use strict";s("ae01")},ae01:function(t,a,s){},b107:function(t,a,s){},bab3:function(t,a,s){t.exports=s.p+"img/803.2fcb4bb1.jpeg"},c546:function(t,a,s){},c659:function(t,a,s){"use strict";s("1eff")},c7ea:function(t,a,s){t.exports=s.p+"img/mahmoud1.f7d4c764.jpg"},d082:function(t,a,s){"use strict";s("7fc6")},ddf7:function(t,a,s){"use strict";s("ea8d")},e269:function(t,a,s){t.exports=s.p+"img/802.fb657a35.jpeg"},e9a5:function(t,a,s){"use strict";s("3415")},ea8d:function(t,a,s){}});
//# sourceMappingURL=app.4f2d02ab.js.map