(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);var i=a(3),l=a(4),s=a(6),u=a(5),m=a(7),h=function(e){return r.a.createElement("div",{style:{border:"1px solid black",borderWidth:"2px 0 0 0",paddingTop:"20px"}},e.children)},d=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},b=function(e){var t=e.robots.map(function(e){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name,email:e.email})});return r.a.createElement("div",{className:"card-list"},t)},p=function(e){var t=e.onSearch;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSearch=function(e){a.setState({searchField:e.target.value})},a.state={robots:[],searchField:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"robo-title"},"RoboFriends"),r.a.createElement(p,{onSearch:this.onSearch}),r.a.createElement(h,null,r.a.createElement(b,{robots:n}))):r.a.createElement("h1",null,"Loading...")}}]),t}(r.a.Component);a(15);c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.94cd66d9.chunk.js.map