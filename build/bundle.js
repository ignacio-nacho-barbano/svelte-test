var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){t.parentNode.removeChild(t)}let o;function a(t){o=t}const l=[],u=[],d=[],m=[],f=Promise.resolve();let v=!1;function h(t){d.push(t)}const p=new Set;let $=0;function y(){const t=o;do{for(;$<l.length;){const t=l[$];$++,a(t),g(t.$$)}for(a(null),l.length=0,$=0;u.length;)u.pop()();for(let t=0;t<d.length;t+=1){const e=d[t];p.has(e)||(p.add(e),e())}d.length=0}while(l.length);for(;m.length;)m.pop()();v=!1,p.clear(),a(t)}function g(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(h)}}const b=new Set;function _(t,e){-1===t.$$.dirty[0]&&(l.push(t),v||(v=!0,f.then(y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(s,l,u,d,m,f,v,p=[-1]){const $=o;a(s);const g=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:m,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||($?$.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:l.target||$.$$.root};v&&v(g.root);let x=!1;if(g.ctx=u?u(s,l.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return g.ctx&&m(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),x&&_(s,t)),e})):[],g.update(),x=!0,r(g.before_update),g.fragment=!!d&&d(g.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();l.intro&&((k=s.$$.fragment)&&k.i&&(b.delete(k),k.i(w))),function(t,n,s,c){const{fragment:o,on_mount:a,on_destroy:l,after_update:u}=t.$$;o&&o.m(n,s),c||h((()=>{const n=a.map(e).filter(i);l?l.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(h)}(s,l.target,l.anchor,l.customElement),y()}var k,w;a($)}function k(e){let n;return{c(){var t,e,r,i;t="main",n=document.createElement(t),n.innerHTML='<h1 class="svelte-s7irra">Dymium</h1> \n  <div class="dymium-animation-root svelte-s7irra"><div class="circles-container-top svelte-s7irra"><div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div></div> \n    <div class="circles-container-bottom svelte-s7irra"><div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div> \n      <div class="dymium-circle svelte-s7irra"></div></div></div> \n  <div class="overlay-content svelte-s7irra"><h2 class="svelte-s7irra">The future of data security is coming</h2> \n    <a alt="Dymium contact mail" class="dymium-button-link svelte-s7irra" href="mailto:info@dymium.com">Get in touch</a></div>',e=n,r="class",null==(i="svelte-s7irra")?e.removeAttribute(r):e.getAttribute(r)!==i&&e.setAttribute(r,i)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}function w(t,e,n){let{name:r}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name)},[r]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),x(this,t,w,k,s,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
