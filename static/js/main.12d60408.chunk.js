(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=(a(15),a(1)),o=a(2),m=a(4),s=a(3),u=a(5),h=(a(16),a(8)),d=a.n(h);var p=function(){return r.a.createElement("div",{className:"menu",id:"Menu"},r.a.createElement("a",{href:"#home"},"Home"),r.a.createElement("a",{href:"#profile"},"Profile"),r.a.createElement("a",{href:"#projects"},"Projects"))};var b=function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"title"},"Portfolio"))},v=a(9),E="".concat("/resume")+"/images/project/",j=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.info,t=(e.url,e.thumbnail),a=e.name,n=e.date,c=e.id,i=e.role,l=e.technic;return r.a.createElement("div",{className:"chip chip-".concat(c)},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("span",null,t?r.a.createElement("img",{src:"".concat(E).concat(t,".PNG")}):r.a.createElement("i",null))),r.a.createElement("div",{className:"data"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"\ud504\ub85c\uc81d\ud2b8\uba85"),r.a.createElement("span",{className:"name"},a)),r.a.createElement("li",null,r.a.createElement("strong",null,"\uc77c\uc815"),r.a.createElement("span",{className:"date"},n)),r.a.createElement("li",null,r.a.createElement("strong",null,"\uc5ed\ud560"),r.a.createElement("span",{className:"role"},i)),r.a.createElement("li",null,r.a.createElement("strong",null,"\uc8fc\uc0ac\uc6a9 \uae30\uc220"),r.a.createElement("span",{className:"technic"},l))))))}}]),t}(n.Component);j.defaultProps={info:{id:0,url:"",thumbnail:"",name:"",date:"",role:"",technic:""}};var f=j,y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data.map((function(e){return r.a.createElement(f,{key:e.id,info:e})}));return r.a.createElement("div",{className:"list"},e)}}]),t}(n.Component);y.defaultProps={data:[]};var O=y;function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[{id:0,thumbnail:"",name:"\ub0b4\ubd80 \ud504\ub85c\uc81d\ud2b8",date:"2019 ~",role:"\uad6c\ucd95 \uc9c0\uc6d0",technic:"React, Vue, Scss"},{id:1,thumbnail:"\ucc44\ub110\uc560\ud130\ubbf8",name:"Atomy Channel",url:"http://ch.atomy.com",date:"2017.01.23 ~ ",role:"\uad6c\ucd95",technic:""},{id:2,thumbnail:"\uc560\ud130\ubbf8\ub7f0",name:"Atomy Run",url:"http://www.atomyrun.com/",date:"2017.01.23 ~ ",role:"\uad6c\ucd95",technic:""},{id:3,thumbnail:"\uc560\ud130\ubbf8\uacf5\uae30\uccad\uc815\uae30",name:"Atomy \uacf5\uae30\uccad\uc815\uae30",url:"http://www.atomyair.com/",date:"2017.01.23 ~ ",role:"\uad6c\ucd95",technic:""},{id:4,thumbnail:"\uc560\ud130\ubbf8",name:"Atomy mobile global",url:"http://m.atomy.com/kr/m",date:"2017.01.23 ~ ",role:"\uc6b4\uc601",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:5,thumbnail:"uplus5g",name:"LG U+ 5G \ubc18\uc751\ud615",url:"https://www.uplus5g.co.kr/#/",date:"2019.",role:"\uad6c\ucd95",technic:"Html, Scss (animation), Vue"},{id:6,thumbnail:"\uc544\uc6b0\ub514",name:"Audi Approved \ubc18\uc751\ud615",url:"https://approved.audi.co.kr/",date:"2018.06.01 ~",role:"",technic:"html,css(animation), jQuery"},{id:7,thumbnail:"\uc140\ud504\ubdf0\ud2f0",name:"Self Beauty Mobile",date:"2016.10.31 ~ 2016.12.14",url:"https://www.selfbeauty.com/index.do",role:"\uac1c\uc120",technic:"css(animation), react"},{id:8,thumbnail:"",name:"\uc0bc\uc131 ConnectAuto",date:"2016.05.25 ~ 2016.07.15",role:"",technic:"html, css(animation)"},{id:9,thumbnail:"",name:"\ud604\ub300 AE Configurator",date:"2016.04.15 ~ 2016.07.08",role:"",technic:"html, css"},{id:10,thumbnail:"",name:"Kia K7, Cazenda",date:" ",role:"",technic:"html,css(animation)"},{id:11,thumbnail:"",name:"Kia Mohave",date:" ",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:12,thumbnail:"",name:"Kia Niro",date:" ",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:13,thumbnail:"",name:"Kia Morning",date:" ",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:14,thumbnail:"",name:"Kia Stonic",date:" ",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:15,thumbnail:"",name:"EBSi",date:"2014.12.22 ~ 2015.11.05",role:"\uc6b4\uc601",technic:"html, css"},{id:16,thumbnail:"",name:"HILIFE \uc190\ud574\uc0ac\uc815 ",date:"2014.08.05 ~ 2014.11.07",role:"\uc811\uadfc\uc131 \ub9ac\ub274\uc5bc",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:17,thumbnail:"",name:"SBS \uc18c\uce58\uc62c\ub9bc\ud53d",date:"2013.12.02 ~ 2014.02.07",role:"\uc6f9, \ubaa8\ubc14\uc77c \uad6c\ucd95",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:18,thumbnail:"",name:"SBS \ube0c\ub77c\uc9c8 \uc6d4\ub4dc\ucef5",date:"2014.04.14 ~ 2014.06.14",role:"\ubaa8\ubc14\uc77c \uad6c\ucd95",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:19,thumbnail:"",name:"\ub86f\ub370 \uc288\ud37c",date:"2013.03.05 ~ 2013.04.26",role:"\uc6f9\uc811\uadfc\uc131 \uac1c\uc120",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:20,thumbnail:"",name:"\uacbd\uae30\ub300\ud559\uad50 \uc6d0\uaca9\uad50\uc721\uc6d0",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:21,thumbnail:"",name:"Smart School PC S/W \uac1c\ubc1c",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:22,thumbnail:"",name:"Ahnlab Mall",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:23,thumbnail:"",name:"SK \ud574\ud53c\uc624\ud1a0\uba64\ubc84\uc2a4",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:24,thumbnail:"",name:"Samsung TV A-store ",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:25,thumbnail:"",name:"Samsung N.com",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:26,thumbnail:"",name:"\ub85c\ub808\uc54c \ud30c\ub9ac",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:27,thumbnail:"",name:"\uc544\uc2dc\uc544\ub098 \uae00\ub85c\ubc8c",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:28,thumbnail:"",name:"LG U+ \ubaa8\ubc14\uc77c \uace0\uac1d\uc13c\ud130",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:29,thumbnail:"",name:"LG U+ \uae00\ub85c\ubc8c\ucf5c",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"},{id:30,thumbnail:"",name:"\uc625\uc158 \ub3c4\uc11c\ud1b5\ud569\ubab0",date:"",role:"",technic:"html,css(animation), bootstrap, javascript, jQuery, react, vue, AEM \ub4f1"}]},a.handleCreate=function(e){var t=a.state.projects;a.setState({projects:t.concat(g({id:a.id++},e))})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{data:this.state.projects}))}}]),t}(n.Component);var M=function(){return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"keyword"},r.a.createElement("sup",null,"MIND"),r.a.createElement("h2",null,"CHANGE"),r.a.createElement("h2",{className:"chance"},"CHANCE")),r.a.createElement("div",{className:"slogan"},r.a.createElement("p",null,"\ub9c8\uc778\ub4dc\uc758 \ubcc0\ud654\ub97c \uac16\uc9c0 \uc54a\ub294\ub2e4\uba74 \uae30\ud68c\ub294 \uc624\uc9c0 \uc54a\ub294\ub2e4 "),r.a.createElement("p",null,"\uac00\uc7a5 \uc798 \ud560 \uc218 \uc788\ub294 \uc77c\uc744, \uac00\uc7a5 \uc990\uac81\uac8c \ub77c\ub294 \uc2e0\ub150\uc744 \ubc14\ud0d5\uc73c\ub85c \uacbd\ud5d8\uc758 \uacc4\ub2e8\uc744 \ud1b5\ud574 \uc2dc\ud589\ucc29\uc624\ub97c \uacaa\uc73c\uba70  \ub178\ub825\ub9cc\ud07c \ube5b\ub098\ub294 \uc778\uc0dd\uc774 \ub41c\ub2e4\ub294 \ubbff\uc74c\uc744 \uac16\uace0 \uc788\ub294 \uc0ac\ub78c")))},N=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onLeave",value:function(e,t,a){console.log("Leaving section "+e.index)}},{key:"afterLoad",value:function(e,t,a){console.log("After load: "+t.index)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement(p,null)),r.a.createElement(d.a,{anchors:["home","profile","projects"],scrollOverflow:!0,onLeave:this.onLeave.bind(this),afterLoad:this.afterLoad.bind(this),render:function(e){e.state;var t=e.fullpageApi;return r.a.createElement("div",{id:"fullpage-wrapper"},r.a.createElement("div",{className:"section section-home"},r.a.createElement(b,null)),r.a.createElement("div",{className:"section section-profile"},r.a.createElement(M,null)),r.a.createElement("div",{className:"section section-projects"},r.a.createElement(w,null),r.a.createElement("button",{onClick:function(){return t.moveTo(1,0)}},"Move top")))}}))}}]),t}(r.a.Component);var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.12d60408.chunk.js.map