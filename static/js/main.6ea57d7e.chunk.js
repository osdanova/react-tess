(this["webpackJsonpreact-tess"]=this["webpackJsonpreact-tess"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(6),s=n.n(i),a=(n(11),n.p+"static/media/logo.6ce24c58.svg"),l=(n(12),n(2)),o=n(3),d=n.n(o),u=n(5),j=n(0);function b(e,t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(d.a.mark((function e(t,n){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x(t,n));case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return"https://drops.warframestat.us/data/relics/"+e+"/"+t+".json"}var O=function(e){var t=e.setRelic,n=Object(r.useState)("Lith"),c=Object(l.a)(n,2),i=c[0],s=c[1],a=Object(r.useState)("R1"),o=Object(l.a)(a,2),v=o[0],x=o[1];return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){O.apply(this,arguments)}(i,v)},children:[Object(j.jsx)("label",{children:"Tier: "}),Object(j.jsxs)("select",{value:i,onChange:function(e){return s(e.target.value)},children:[Object(j.jsx)("option",{value:"Lith",children:"Lith"}),Object(j.jsx)("option",{value:"Meso",children:"Meso"}),Object(j.jsx)("option",{value:"Neo",children:"Neo"}),Object(j.jsx)("option",{value:"Axi",children:"Axi"})]}),Object(j.jsx)("label",{children:"     Name: "}),Object(j.jsx)("textarea",{style:{height:15},value:v,onChange:function(e){return x(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"submit",value:"Fetch data",style:{height:"40px",borderRadius:"5px"}})]})});function O(){return O=Object(u.a)(d.a.mark((function e(n,r){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=n&&null!=r){e.next=3;break}return console.log("Invalid input: Tier: "+n+", Name: "+r),e.abrupt("return");case 3:return console.log("Fetching data..."),e.next=6,b(n,r);case 6:c=e.sent,console.log("Relic fetched: "+(null===c||void 0===c?void 0:c.name)),t(c);case 9:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}};function h(e){var t=null===e||void 0===e?void 0:e.reward;return Object(j.jsxs)("div",{children:["[",null===t||void 0===t?void 0:t.chance,"%] ",null===t||void 0===t?void 0:t.rarity,": ",null===t||void 0===t?void 0:t.itemName]})}function p(e){var t=null===e||void 0===e?void 0:e.rewardList;return null==t?Object(j.jsx)("div",{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{reward:t[0]}),Object(j.jsx)(h,{reward:t[1]}),Object(j.jsx)(h,{reward:t[2]}),Object(j.jsx)(h,{reward:t[3]}),Object(j.jsx)(h,{reward:t[4]}),Object(j.jsx)(h,{reward:t[5]})]})}var f=function(e){var t,n,r,c,i=e.relic;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:["Relic: ",null===i||void 0===i?void 0:i.tier," ",null===i||void 0===i?void 0:i.name]}),Object(j.jsx)("br",{}),"INTACT",Object(j.jsx)(p,{rewardList:null===i||void 0===i||null===(t=i.rewards)||void 0===t?void 0:t.Intact}),Object(j.jsx)("br",{}),"EXCEPTIONAL",Object(j.jsx)(p,{rewardList:null===i||void 0===i||null===(n=i.rewards)||void 0===n?void 0:n.Exceptional}),Object(j.jsx)("br",{}),"FLAWLESS",Object(j.jsx)(p,{rewardList:null===i||void 0===i||null===(r=i.rewards)||void 0===r?void 0:r.Flawless}),Object(j.jsx)("br",{}),"RADIANT",Object(j.jsx)(p,{rewardList:null===i||void 0===i||null===(c=i.rewards)||void 0===c?void 0:c.Radiant})]})},w=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{style:{display:"inline-block",color:"white",background:"DimGrey",borderRadius:"25px",padding:"30px"},children:[Object(j.jsx)(O,{setRelic:c}),Object(j.jsx)("br",{}),Object(j.jsx)(f,{relic:n})]})};var g=function(){return Object(j.jsxs)("div",{className:"App",style:{display:"grid",placeItems:"center",backgroundColor:"DarkSlateGrey"},children:[Object(j.jsx)("img",{src:a,alt:"logo",width:"100",height:"100"}),Object(j.jsx)("br",{}),Object(j.jsx)(w,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.6ea57d7e.chunk.js.map