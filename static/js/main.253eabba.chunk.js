(this["webpackJsonpapp-movies"]=this["webpackJsonpapp-movies"]||[]).push([[0],{114:function(e,t,n){},141:function(e,t,n){},153:function(e,t,n){},158:function(e,t,n){},160:function(e,t,n){},180:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(25),o=n.n(r),s=(n(140),n(114),n(192)),i=n(29),l=n(22),j="https://api.themoviedb.org/3",u="e33f37bfeb5b39802d2c095f1753c610",b=n(78),d=n(47),h=n(43),O=n.n(h),m=n(54),v=n(24),p=function(e,t){var n=Object(c.useState)(null),a=Object(v.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(!0),i=Object(v.a)(s,2),l=i[0],j=i[1],u=Object(c.useState)(null),b=Object(v.a)(u,2),d=b[0],h=b[1];return Object(c.useEffect)((function(){(function(){var n=Object(m.a)(O.a.mark((function n(){var c,a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e,t);case 3:return c=n.sent,n.next=6,c.json();case 6:a=n.sent,o(a),j(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),h(n.t0),j(!1);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}})()()}),[e,t]),{result:r,loading:l,error:d}},x=n(199),f=n(197),g=n(60),y=n(82),w=n(122),S=(n(141),n(6)),N=function(){return Object(S.jsx)("div",{className:"loading",children:Object(S.jsx)(w.a,{size:"large"})})},k=(n(153),function(e){var t=e.movie,n=t.poster_path,c=t.id,a=t.title,r="https://image.tmdb.org/t/p/original".concat(n);return Object(S.jsxs)(x.b.Item,{className:"movie-list__movir",children:[Object(S.jsx)(x.b.Item.Meta,{avatar:Object(S.jsx)(f.a,{src:r}),title:Object(S.jsxs)(i.b,{to:"/movie/".concat(c),children:[" ",a]})}),Object(S.jsx)(i.b,{to:"/movie/".concat(c),children:Object(S.jsx)(g.a,{type:"primary",shape:"circle",icon:Object(S.jsx)(y.a,{})})})]})}),_=function(e){var t=e.title,n=e.urlMovieList;return n.Loading||!n.result?Object(S.jsx)(N,{}):Object(S.jsx)(x.b,{className:"movie-list",size:"default",header:Object(S.jsx)("h2",{children:t}),bordered:!0,dataSource:n.result.results,renderItem:function(e){return Object(S.jsx)(k,{movie:e})}})},I=n(195),M=(n(158),function(e){var t=e.movie,n=t.id,c=t.backdrop_path,a=t.title,r=t.overview,o="https://image.tmdb.org/t/p/original".concat(c);return Object(S.jsx)("div",{className:"slider-movies__movie",style:{backgroundImage:'url("'.concat(o,'")')},children:Object(S.jsx)("div",{className:"slider-movies__movie-info",children:Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:a}),Object(S.jsx)("p",{children:r}),Object(S.jsx)(i.b,{to:"/movie/".concat(n),children:Object(S.jsx)(g.a,{type:"primary",className:"boton",children:"More"})})]})})})}),P=function(e){var t=e.newMovies;if(t.loading||!t.result)return Object(S.jsx)(N,{});var n=t.result.results;return Object(S.jsx)(I.a,{autoplay:!0,children:n.map((function(e){return Object(S.jsx)(M,{movie:e},e.id)}))})},C=(n(160),function(){var e="".concat(j,"/movie/now_playing?api_key=").concat(u,"&language=en-ES&page=1"),t=p(e),n="".concat(j,"/movie/popular?api_key=").concat(u,"&language=en-ES&page=1"),c=p(n),a="".concat(j,"/movie/top_rated?api_key=").concat(u,"&language=en-ES&page=1"),r=p(a);return Object(S.jsxs)("div",{children:[Object(S.jsx)(P,{newMovies:t}),Object(S.jsxs)(b.a,{style:{marginBottom:"50px"},children:[Object(S.jsx)(d.a,{xs:24,sm:24,md:12,lg:12,children:Object(S.jsx)(_,{title:"Popular Movies",urlMovieList:c})}),Object(S.jsx)(d.a,{xs:24,sm:24,md:12,lg:12,children:Object(S.jsx)(_,{title:"Top Best Movies",urlMovieList:r})})]})]})}),E=function(){return Object(S.jsxs)("div",{className:"error-container",children:[Object(S.jsx)("div",{className:"error-404"}),Object(S.jsx)("p",{children:"Sorry, the page you visited does not exist."}),Object(S.jsxs)(i.b,{to:"/",children:[" ",Object(S.jsx)(g.a,{type:"primary",children:" Home"})]})]})},L=n(200),Y=n(126),W=n.n(Y),A=n(196),F=n(127),H=n.n(F),T=(n(180),function(e){var t=e.isOpen,n=e.close,a=e.videoKey,r=e.videoPlatform,o=Object(c.useState)(null),s=Object(v.a)(o,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){switch(r){case"YouTube":l("https://youtu.be/".concat(a));break;case"Vimeo":l("https://vimeo.com/".concat(a))}}),[a,r]),Object(S.jsx)(A.a,{className:"modal-video",visible:t,centered:!0,onCancel:n,footer:!1,children:Object(S.jsx)(H.a,{url:i,controls:!0,muted:!0})})}),U=(n(182),function(e){var t=e.movieInfo.result,n=t.backdrop_path,c=t.poster_path,a="https://image.tmdb.org/t/p/original".concat(n);return Object(S.jsx)("div",{className:"movie",style:{backgroundImage:"url('".concat(a,"')")},children:Object(S.jsx)("div",{className:"movie__dark",children:Object(S.jsxs)(b.a,{className:"fila",children:[Object(S.jsx)(d.a,{span:8,offset:3,className:"movie__poster",children:Object(S.jsx)(z,{image:c})}),Object(S.jsx)(d.a,{span:9,className:"movie-info-container",children:Object(S.jsx)(B,{movieInfo:e.movieInfo})})]})})})}),z=function(e){var t,n=e.image;return t=null===n?"https://i.pinimg.com/736x/04/85/5b/04855bae4a3237935ebfc655293400ca.jpg":"https://image.tmdb.org/t/p/original".concat(n),Object(S.jsx)("div",{style:{backgroundImage:"url('".concat(t,"')")},className:"movie-poster-image"})},B=function(e){var t=e.movieInfo.result,n=t.title,a=t.id,r=t.release_date,o=t.overview,s=t.genres,i=Object(c.useState)(!1),l=Object(v.a)(i,2),b=l[0],d=l[1],h="".concat(j,"/movie/").concat(a,"/videos?api_key=").concat(u,"&language=es-US"),O=p(h),m=function(){return d(!0)},x=function(){return d(!1)};return Object(S.jsxs)("div",{className:"movie-info",children:[Object(S.jsxs)("div",{className:"info",children:[Object(S.jsxs)("h1",{children:[n,Object(S.jsx)("span",{children:W()(r,"YYYY-MM-DD").format("YYYY")})]}),function(){if(O.result&&O.result.results.length>0)return Object(S.jsxs)("div",{children:[Object(S.jsx)(g.a,{icon:Object(S.jsx)(L.a,{}),onClick:m,className:"button",children:"trailer"}),Object(S.jsx)(T,{videoKey:O.result.results[0].key,videoPlatform:O.result.results[0].site,isOpen:b,close:x})]})}()]}),Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("h3",{children:"General"}),Object(S.jsx)("p",{children:""===o?"No information":o}),Object(S.jsx)("h3",{children:"Genres"}),Object(S.jsx)("ul",{children:0===s.length?"No information":s.map((function(e){return Object(S.jsx)("li",{children:e.name},e.id)}))})]})]})},D=function(){var e=Object(l.f)().id,t="".concat(j,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"),n=p(t);return n.Loading||!n.result?Object(S.jsx)(N,{}):Object(S.jsx)(U,{movieInfo:n})},K=n(193),G=(n(183),function(e){var t,n=K.a.Meta,c=e.movie,a=c.id,r=c.title,o=c.poster_path;return t=null===o?"https://i.pinimg.com/736x/04/85/5b/04855bae4a3237935ebfc655293400ca.jpg":"https://image.tmdb.org/t/p/original".concat(o),Object(S.jsx)(d.a,{lg:6,className:"centrar",children:Object(S.jsx)(i.b,{to:"/movie/".concat(a),children:Object(S.jsx)(K.a,{className:"card",hoverable:!0,cover:Object(S.jsx)("img",{alt:r,src:t,className:"img-card"}),children:Object(S.jsx)(n,{title:r,className:"title-card"})})})})}),J=function(e){var t=e.url,n=e.loadingState,c=t.results;return c?Object(S.jsx)(b.a,{gutter:[8,32],className:"centrar",children:c.map((function(e){return Object(S.jsx)(G,{movie:e},e.id)}))}):Object(S.jsx)("div",{className:n?null:"hidden",children:Object(S.jsx)(N,{})})},q=n(129),R=(n(184),function(e){var t=e.currentPage,n=e.totalItems,c=e.onChangePage;return Object(S.jsx)(q.a,{current:t,total:n,pageSize:20,onChange:c})}),V=function(){var e=Object(c.useState)(1),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),o=Object(v.a)(r,2),s=o[0],i=o[1],l=Object(c.useState)(!0),b=Object(v.a)(l,2),d=b[0],h=b[1];Object(c.useEffect)((function(){Object(m.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/movie/now_playing?api_key=").concat(u,"&languaje=en-ES&page=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,h(!1),i(c);case 8:case"end":return e.stop()}}),e)})))()}),[n]);return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{style:{minHeight:"calc(100vh - 140px)"},children:[Object(S.jsx)("h1",{children:"New Movies"}),Object(S.jsx)(J,{url:s,loadingState:d}),Object(S.jsx)(R,{currentPage:s.page,totalItems:s.total_results,onChangePage:function(e){return a(e)}})]})})},$=function(){var e=Object(c.useState)(1),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),o=Object(v.a)(r,2),s=o[0],i=o[1],l=Object(c.useState)(!0),b=Object(v.a)(l,2),d=b[0],h=b[1];Object(c.useEffect)((function(){Object(m.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/movie/popular?api_key=").concat(u,"&languaje=en-US&page=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,h(!1),i(c);case 8:case"end":return e.stop()}}),e)})))()}),[n]);return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{style:{minHeight:"74.5vh"},children:[Object(S.jsx)("h1",{children:"Popular Movies"}),Object(S.jsx)(J,{url:s,loadingState:d}),Object(S.jsx)(R,{currentPage:s.page,totalItems:s.total_results,onChangePage:function(e){return a(e)}})]})})},Q=n(194),X=n(201),Z=(n(185),function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),o=Object(v.a)(r,2),s=o[0],i=o[1],l=Object(c.useState)([]),b=Object(v.a)(l,2),d=b[0],h=b[1],p=Object(c.useState)(!0),x=Object(v.a)(p,2),f=x[0],g=x[1];Object(c.useEffect)((function(){Object(m.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/search/movie?api_key=").concat(u,"&languaje=en-ES&query=").concat(n,"&page=").concat(s,"&include_adult=false"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,g(!1),h(c);case 8:case"end":return e.stop()}}),e)})))()}),[s,n]);return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"main-container",children:[Object(S.jsxs)("div",{className:"input-container",children:[Object(S.jsx)("label",{htmlFor:"search",children:"Search Movie"}),Object(S.jsx)(Q.a,{onKeyUp:function(e){a(e.target.value)},size:"large",placeholder:"Type here to search",prefix:Object(S.jsx)(X.a,{})})]}),Object(S.jsx)(J,{url:d,loadingState:f}),Object(S.jsx)(R,{currentPage:d.page,totalItems:d.total_results,onChangePage:function(e){return i(e)}})]})})}),ee=n(198),te=(n(186),function(){return Object(S.jsxs)("div",{className:"menu-top",children:[Object(S.jsx)("div",{className:"menu-top__logo",children:Object(S.jsx)("div",{className:"logo2"})}),Object(S.jsxs)(ee.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{backgroundColor:"#0F7173"},children:[Object(S.jsx)(ee.a.Item,{children:Object(S.jsx)(i.b,{to:"/",children:"Home"})},"1"),Object(S.jsx)(ee.a.Item,{children:Object(S.jsx)(i.b,{to:"/new-movies",children:"New Movies"})},"2"),Object(S.jsx)(ee.a.Item,{children:Object(S.jsx)(i.b,{to:"/popular",children:"Popular"})},"3"),Object(S.jsx)(ee.a.Item,{children:Object(S.jsx)(i.b,{to:"/search",children:"Search"})},"4")]})]})}),ne=(n(187),function(){var e=s.a.Footer;return Object(S.jsx)(e,{className:"footer",children:Object(S.jsx)("p",{children:"Hecho por Mari y Silvi \ud83c\udfac"})})});var ce=function(){var e=s.a.Header,t=s.a.Content;return Object(S.jsx)(s.a,{children:Object(S.jsxs)(i.a,{basename:"/",children:[Object(S.jsx)(e,{className:"header",children:Object(S.jsx)(te,{})}),Object(S.jsx)(t,{style:{minHeight:"fit-content"},children:Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{exact:!0,path:"/",component:C}),Object(S.jsx)(l.a,{exact:!0,path:"/new-movies",component:V}),Object(S.jsx)(l.a,{exact:!0,path:"/popular",component:$}),Object(S.jsx)(l.a,{exact:!0,path:"/search",component:Z}),Object(S.jsx)(l.a,{exact:!0,path:"/movie/:id",component:D}),Object(S.jsx)(l.a,{path:"*",component:E})]})}),Object(S.jsx)(ne,{})]})})},ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(ce,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Movies-proyect-ADA",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Movies-proyect-ADA","/service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):re(t,e)}))}}(),oe()}},[[188,1,2]]]);
//# sourceMappingURL=main.253eabba.chunk.js.map