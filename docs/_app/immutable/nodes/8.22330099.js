import{s as N,n as H}from"../chunks/scheduler.a548ce8a.js";import{S as k,i as y,r as _,s as g,g as f,u as v,c as x,h,j as A,x as u,f as l,v as j,a as c,y as S,d as w,t as b,w as C,k as P}from"../chunks/index.7ae6ccd5.js";import{P as D,a as I}from"../chunks/ProjectDetails.24f4b60f.js";import{P as T}from"../chunks/project_info.38fb4bfa.js";import{V as E}from"../chunks/Video.8bff8b70.js";const U=""+new URL("../assets/2024-09-28_16-22-44_trip_dashboard.b8f3cdda.mp4",import.meta.url).href;function V(m){let t,n="<li>High customization</li> <li>Modular</li>";return{c(){t=f("span"),t.innerHTML=n,this.h()},l(e){t=h(e,"SPAN",{slot:!0,["data-svelte-h"]:!0}),u(t)!=="svelte-1gn6l27"&&(t.innerHTML=n),this.h()},h(){P(t,"slot","strengths")},m(e,a){c(e,t,a)},p:H,d(e){e&&l(t)}}}function q(m){let t,n="<li>Not secure</li> <li>Unstable</li> <li>Complex architecture (two development servers)</li>";return{c(){t=f("span"),t.innerHTML=n,this.h()},l(e){t=h(e,"SPAN",{slot:!0,["data-svelte-h"]:!0}),u(t)!=="svelte-eib6rt"&&(t.innerHTML=n),this.h()},h(){P(t,"slot","weaknesses")},m(e,a){c(e,t,a)},p:H,d(e){e&&l(t)}}}function z(m){let t,n="<li>Editable dashboard component</li> <li>Discovering Angular</li>";return{c(){t=f("span"),t.innerHTML=n,this.h()},l(e){t=h(e,"SPAN",{slot:!0,["data-svelte-h"]:!0}),u(t)!=="svelte-ihv7oj"&&(t.innerHTML=n),this.h()},h(){P(t,"slot","explored")},m(e,a){c(e,t,a)},p:H,d(e){e&&l(t)}}}function O(m){let t,n,e,a,o,p,L="Small demo of the dashboard modification",$,i,d;return t=new D({props:{projectInfo:T.tripDashboard}}),e=new I({props:{projectInfo:T.tripDashboard,$$slots:{explored:[z],weaknesses:[q],strengths:[V]},$$scope:{ctx:m}}}),i=new E({props:{src:U}}),{c(){_(t.$$.fragment),n=g(),_(e.$$.fragment),a=g(),o=f("section"),p=f("h2"),p.textContent=L,$=g(),_(i.$$.fragment)},l(s){v(t.$$.fragment,s),n=x(s),v(e.$$.fragment,s),a=x(s),o=h(s,"SECTION",{});var r=A(o);p=h(r,"H2",{["data-svelte-h"]:!0}),u(p)!=="svelte-y5rwa"&&(p.textContent=L),$=x(r),v(i.$$.fragment,r),r.forEach(l)},m(s,r){j(t,s,r),c(s,n,r),j(e,s,r),c(s,a,r),c(s,o,r),S(o,p),S(o,$),j(i,o,null),d=!0},p(s,[r]){const M={};r&1&&(M.$$scope={dirty:r,ctx:s}),e.$set(M)},i(s){d||(w(t.$$.fragment,s),w(e.$$.fragment,s),w(i.$$.fragment,s),d=!0)},o(s){b(t.$$.fragment,s),b(e.$$.fragment,s),b(i.$$.fragment,s),d=!1},d(s){s&&(l(n),l(a),l(o)),C(t,s),C(e,s),C(i)}}}class K extends k{constructor(t){super(),y(this,t,null,O,N,{})}}export{K as component};