(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/gunters.0a246637.PNG"},function(e,a,t){e.exports=t.p+"static/media/painter.b2ed22c4.PNG"},function(e,a,t){e.exports=t.p+"static/media/solar.7096247d.PNG"},function(e,a,t){e.exports=t.p+"static/media/ablast.30413f31.PNG"},function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},,function(e,a,t){},,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),s=(t(19),t(1)),o=t(2),i=t(4),m=t(3),d=t(5),u=(t(21),t(6)),p=t.n(u),b=t(9),v=(t(25),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"helloWorld",value:function(){var e=Object(b.a)(p.a.mark(function e(){var a,t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.stringify({message:"hello my friends!"}),e.next=4,fetch("/helloworld",{method:"POST",headers:{"Content-Type":"application/json"},body:a,mode:"no-cors"});case 4:(t=e.sent).ok&&console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Navbar"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"WebVR Hub"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{className:"nav-item nav-link",href:""},"Home",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-item nav-link",href:""},"Forums"),r.a.createElement("a",{className:"nav-item nav-link",href:""},"Reviews"),r.a.createElement("a",{className:"nav-item nav-link",href:""},"Assets")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Button group with nested dropdown"},r.a.createElement("button",{onClick:function(){return e.helloWorld()},type:"button",className:"btn btn-outline-info"},"Sign-In"),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary"},"Sign-Up"),r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{id:"btnGroupDrop1",type:"button",className:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Profile"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"btnGroupDrop1"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Social"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Apps"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Account")))))))}}]),a}(n.Component)),E=t(10),h=t.n(E),N=t(11),g=t.n(N),f=t(12),y=t.n(f),k=t(13),w=t.n(k),x=(t(27),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={iframeURL:""},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){document.getElementById("library").hidden=!1,document.getElementById("Iframe").hidden=!0}},{key:"enterApp",value:function(e){this.setState({iframeURL:e}),document.getElementById("library").hidden=!0,document.getElementById("Iframe").hidden=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Home"},r.a.createElement("iframe",{id:"Iframe",width:"100%",height:"100%",allowFullScreen:"yes",scrolling:"no",src:this.state.iframeURL}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:"https://backgroundcheckall.com/wp-content/uploads/2017/12/svg-background-images-2.jpg",className:"img-fluid",alt:"Responsive image"}),r.a.createElement("h3",{className:"pl-2 pt-2",style:{color:"white"}},"Categories"),r.a.createElement("nav",{className:"nav flex-column pl-1",style:{color:"white"}},r.a.createElement("a",{className:"nav-link",href:""},"First Person Shooter"),r.a.createElement("a",{className:"nav-link",href:""},"Adventure"),r.a.createElement("a",{className:"nav-link",href:""},"Educational"),r.a.createElement("a",{className:"nav-link",href:""},"Strategy"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{id:"library"},r.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}),r.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"3"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100",src:h.a,alt:"First slide"}),r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("button",{type:"button",className:"btn btn-warning mb-3",onClick:function(){return e.enterApp("https://supermedium.com/gunters-of-oasis-deploy/")}},"Enter App"))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:g.a,alt:"Second slide"}),r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("button",{type:"button",className:"btn btn-warning mb-3",onClick:function(){return e.enterApp("https://aframe.io/a-painter/?url=https://ucarecdn.com/962b242b-87a9-422c-b730-febdc470f203/")}},"Enter App"))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:y.a,alt:"Third slide"}),r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("button",{type:"button",className:"btn btn-warning mb-3",onClick:function(){return e.enterApp("https://chriseddy.github.io/threejs-webvr-solarsystem/")}},"Enter App"))),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100",src:w.a,alt:"Fourth slide"}),r.a.createElement("div",{className:"carousel-caption d-none d-md-block"},r.a.createElement("button",{type:"button",className:"btn btn-warning mb-3",onClick:function(){return e.enterApp("https://aframe.io/a-blast/")}},"Enter App")))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))))),r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:"https://i.ytimg.com/vi/aiU22lKiZbA/maxresdefault.jpg",className:"mx-auto d-block",alt:"app",width:"100%",height:"100%"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSTbqJPj4Zll29R8_35XiWxGA-FIN_gyYxWBD3qC8K4Gxtn9zBg",className:"mx-auto d-block",alt:"app",width:"100%",height:"100%"})),r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgN6pY-b8RqbXeGhmZY8Hsdrco_ggedEoHhlTr0tUTcHRCoX5pxw",className:"mx-auto d-block",alt:"app",width:"100%",height:"100%"})))),r.a.createElement("div",{className:"col-3"})))}}]),a}(n.Component)),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(x,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.01dfe58b.chunk.js.map