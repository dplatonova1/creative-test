!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=103)}([function(t,n,r){var e=r(1),o=r(23),i=r(4),c=r(40),u=r(44),a=r(71),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,r(55))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(8),o={}.hasOwnProperty;t.exports=function(t,n){return o.call(e(t),n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(12),o=r(11),i=r(13);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(1),o=r(34).f,i=r(6),c=r(19),u=r(20),a=r(58),f=r(64);t.exports=function(t,n){var r,s,l,p,v,d=t.target,h=t.global,g=t.stat;if(r=h?e:g?e[d]||u(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(h?s:d+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(14);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(15),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(12),o=r(36),i=r(3),c=r(18),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports={}},function(t,n,r){var e=r(35),o=r(14);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(5);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(1),o=r(6),i=r(4),c=r(20),u=r(38),a=r(39),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(a=s(r)).source||(a.source=l.join("string"==typeof n?n:""))),t!==e?(f?!v&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,r){var e=r(1),o=r(6);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(1),o=r(20),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(23),o=r(40),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(24),o=r(21);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.11.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e=r(60),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(15),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e,o,i=r(1),c=r(70),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){"use strict";var e=r(18),o=r(11),i=r(13);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){var e=r(5),o=r(51),i=r(0)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(2),o=r(0),i=r(29),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){"use strict";var e,o,i=r(91),c=r(53),u=r(23),a=RegExp.prototype.exec,f=u("native-string-replace",String.prototype.replace),s=a,l=(e=/a/,o=/b*/g,a.call(e,"a"),a.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),p=c.UNSUPPORTED_Y||c.BROKEN_CARET,v=void 0!==/()??/.exec("")[1];(l||v||p)&&(s=function(t){var n,r,e,o,c=this,u=p&&c.sticky,s=i.call(c),d=c.source,h=0,g=t;return u&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),r=new RegExp("^(?:"+d+")",s)),v&&(r=new RegExp("^"+d+"$(?!\\s)",s)),l&&(n=c.lastIndex),e=a.call(u?r:c,g),u?e?(e.input=e.input.slice(h),e[0]=e[0].slice(h),e.index=c.lastIndex,c.lastIndex+=e[0].length):c.lastIndex=0:l&&e&&(c.lastIndex=c.global?e.index+e[0].length:n),v&&e&&e.length>1&&f.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=s},function(t,n,r){var e=r(12),o=r(56),i=r(13),c=r(17),u=r(18),a=r(4),f=r(36),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(2),o=r(10),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(12),o=r(2),i=r(37);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(1),o=r(5),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,r){var e=r(21),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e,o,i,c=r(57),u=r(1),a=r(5),f=r(6),s=r(4),l=r(21),p=r(22),v=r(25),d=u.WeakMap;if(c){var h=l.state||(l.state=new d),g=h.get,y=h.has,x=h.set;e=function(t,n){if(y.call(h,t))throw new TypeError("Object already initialized");return n.facade=t,x.call(h,t,n),n},o=function(t){return g.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var m=p("state");v[m]=!0,e=function(t,n){if(s(t,m))throw new TypeError("Object already initialized");return n.facade=t,f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(4),o=r(17),i=r(62).indexOf,c=r(25);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(43);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(69),o=r(29),i=r(2);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(e?38===o:o>37&&o<41)}))},function(t,n,r){var e=r(15),o=r(14),i=function(t){return function(n,r){var i,c,u=String(o(n)),a=e(r),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){"use strict";var e,o,i,c=r(2),u=r(47),a=r(6),f=r(4),s=r(0),l=r(24),p=s("iterator"),v=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):v=!0);var d=null==e||c((function(){var t={};return e[p].call(t)!==t}));d&&(e={}),l&&!d||f(e,p)||a(e,p,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:v}},function(t,n,r){var e=r(4),o=r(8),i=r(22),c=r(79),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),e(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,r){var e,o=r(3),i=r(80),c=r(28),u=r(25),a=r(82),f=r(37),s=r(22),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;d=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete d.prototype[c[r]];return d()};u[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=d(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(11).f,o=r(4),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(42),o=r(35),i=r(8),c=r(9),u=r(31),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=7==t,v=5==t||l;return function(d,h,g,y){for(var x,m,b=i(d),S=o(b),E=e(h,g,3),O=c(S.length),w=0,A=y||u,_=n?A(d,O):r||p?A(d,0):void 0;O>w;w++)if((v||w in S)&&(m=E(x=S[w],w,b),t))if(n)_[w]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return w;case 2:a.call(_,x)}else switch(t){case 4:return!1;case 7:a.call(_,x)}return l?-1:f||s?s:_}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},function(t,n,r){var e=r(10);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";var e=r(7),o=r(33);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,r){"use strict";var e=r(2);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=e((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=e((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,r){var e=r(7),o=r(65);e({target:"Array",stat:!0,forced:!r(75)((function(t){Array.from(t)}))},{from:o})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(1),o=r(38),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(4),o=r(59),i=r(34),c=r(11);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(26),o=r(61),i=r(63),c=r(3);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(1);t.exports=e},function(t,n,r){var e=r(41),o=r(28).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(17),o=r(9),i=r(27),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){"use strict";var e=r(42),o=r(8),i=r(66),c=r(68),u=r(9),a=r(30),f=r(72);t.exports=function(t){var n,r,s,l,p,v,d=o(t),h="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,x=void 0!==y,m=f(d),b=0;if(x&&(y=e(y,g>2?arguments[2]:void 0,2)),null==m||h==Array&&c(m))for(r=new h(n=u(d.length));n>b;b++)v=x?y(d[b],b):d[b],a(r,b,v);else for(p=(l=m.call(d)).next,r=new h;!(s=p.call(l)).done;b++)v=x?i(l,y,[s.value,b],!0):s.value,a(r,b,v);return r.length=b,r}},function(t,n,r){var e=r(3),o=r(67);t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){throw o(t),n}}},function(t,n,r){var e=r(3);t.exports=function(t){var n=t.return;if(void 0!==n)return e(n.call(t)).value}},function(t,n,r){var e=r(0),o=r(16),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,r){var e=r(10),o=r(1);t.exports="process"==e(o.process)},function(t,n,r){var e=r(26);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(44);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(73),o=r(16),i=r(0)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(74),o=r(10),i=r(0)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){var e={};e[r(0)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(45).charAt,o=r(39),i=r(77),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=u(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){"use strict";var e=r(7),o=r(78),i=r(47),c=r(83),u=r(49),a=r(6),f=r(19),s=r(0),l=r(24),p=r(16),v=r(46),d=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,g=s("iterator"),y=function(){return this};t.exports=function(t,n,r,s,v,x,m){o(r,n,s);var b,S,E,O=function(t){if(t===v&&T)return T;if(!h&&t in _)return _[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},w=n+" Iterator",A=!1,_=t.prototype,j=_[g]||_["@@iterator"]||v&&_[v],T=!h&&j||O(v),P="Array"==n&&_.entries||j;if(P&&(b=i(P.call(new t)),d!==Object.prototype&&b.next&&(l||i(b)===d||(c?c(b,d):"function"!=typeof b[g]&&a(b,g,y)),u(b,w,!0,!0),l&&(p[w]=y))),"values"==v&&j&&"values"!==j.name&&(A=!0,T=function(){return j.call(this)}),l&&!m||_[g]===T||a(_,g,T),p[n]=T,v)if(S={values:O("values"),keys:x?T:O("keys"),entries:O("entries")},m)for(E in S)(h||A||!(E in _))&&f(_,E,S[E]);else e({target:n,proto:!0,forced:h||A},S);return S}},function(t,n,r){"use strict";var e=r(46).IteratorPrototype,o=r(48),i=r(13),c=r(49),u=r(16),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),c(t,f,!1,!0),u[f]=a,t}},function(t,n,r){var e=r(2);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(12),o=r(11),i=r(3),c=r(81);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(41),o=r(28);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(26);t.exports=e("document","documentElement")},function(t,n,r){var e=r(3),o=r(84);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(5);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){var e=r(1),o=r(86),i=r(87),c=r(6);for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(50).forEach,o=r(88)("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){"use strict";var e=r(7),o=r(2),i=r(51),c=r(5),u=r(8),a=r(9),f=r(30),s=r(31),l=r(32),p=r(0),v=r(29),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=l("concat"),y=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!h||!g},{concat:function(t){var n,r,e,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(y(i=-1===n?c:arguments[n])){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,r){"use strict";var e=r(7),o=r(27),i=r(15),c=r(9),u=r(8),a=r(31),f=r(30),s=r(32)("splice"),l=Math.max,p=Math.min;e({target:"Array",proto:!0,forced:!s},{splice:function(t,n){var r,e,s,v,d,h,g=u(this),y=c(g.length),x=o(t,y),m=arguments.length;if(0===m?r=e=0:1===m?(r=0,e=y-x):(r=m-2,e=p(l(i(n),0),y-x)),y+r-e>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=a(g,e),v=0;v<e;v++)(d=x+v)in g&&f(s,v,g[d]);if(s.length=e,r<e){for(v=x;v<y-e;v++)h=v+r,(d=v+e)in g?g[h]=g[d]:delete g[h];for(v=y;v>y-e+r;v--)delete g[v-1]}else if(r>e)for(v=y-e;v>x;v--)h=v+r-1,(d=v+e-1)in g?g[h]=g[d]:delete g[h];for(v=0;v<r;v++)g[v+x]=arguments[v+2];return g.length=y-e+r,s}})},function(t,n,r){"use strict";var e=r(3);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(93),o=r(94),i=r(3),c=r(14),u=r(95),a=r(96),f=r(9),s=r(97),l=r(33),p=r(53).UNSUPPORTED_Y,v=[].push,d=Math.min;e("split",2,(function(t,n,r){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var e=String(c(this)),i=void 0===r?4294967295:r>>>0;if(0===i)return[];if(void 0===t)return[e];if(!o(t))return n.call(e,t,i);for(var u,a,f,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=new RegExp(t.source,p+"g");(u=l.call(h,e))&&!((a=h.lastIndex)>d&&(s.push(e.slice(d,u.index)),u.length>1&&u.index<e.length&&v.apply(s,u.slice(1)),f=u[0].length,d=a,s.length>=i));)h.lastIndex===u.index&&h.lastIndex++;return d===e.length?!f&&h.test("")||s.push(""):s.push(e.slice(d)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:n.call(this,t,r)}:n,[function(n,r){var o=c(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,o){var c=r(e,t,this,o,e!==n);if(c.done)return c.value;var l=i(t),v=String(this),h=u(l,RegExp),g=l.unicode,y=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"g":"y"),x=new h(p?"^(?:"+l.source+")":l,y),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===v.length)return null===s(x,v)?[v]:[];for(var b=0,S=0,E=[];S<v.length;){x.lastIndex=p?0:S;var O,w=s(x,p?v.slice(S):v);if(null===w||(O=d(f(x.lastIndex+(p?S:0)),v.length))===b)S=a(v,S,g);else{if(E.push(v.slice(b,S)),E.length===m)return E;for(var A=1;A<=w.length-1;A++)if(E.push(w[A]),E.length===m)return E;S=b=O}}return E.push(v.slice(b)),E}]}),p)},function(t,n,r){"use strict";r(52);var e=r(19),o=r(2),i=r(0),c=r(6),u=i("species"),a=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),s=i("replace"),l=!!/./[s]&&""===/./[s]("a","$0"),p=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,s){var v=i(t),d=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),h=d&&!o((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return n=!0,null},r[v](""),!n}));if(!d||!h||"replace"===t&&(!a||!f||l)||"split"===t&&!p){var g=/./[v],y=r(v,""[t],(function(t,n,r,e,o){return n.exec===RegExp.prototype.exec?d&&!o?{done:!0,value:g.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:l}),x=y[0],m=y[1];e(String.prototype,t,x),e(RegExp.prototype,v,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}s&&c(RegExp.prototype[v],"sham",!0)}},function(t,n,r){var e=r(5),o=r(10),i=r(0)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){var e=r(3),o=r(43),i=r(0)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},function(t,n,r){"use strict";var e=r(45).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(10),o=r(33);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){"use strict";var e=r(7),o=r(50).map;e({target:"Array",proto:!0,forced:!r(32)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(7),o=r(100),i=r(101);e({target:"Array",proto:!0},{fill:o}),i("fill")},function(t,n,r){"use strict";var e=r(8),o=r(27),i=r(9);t.exports=function(t){for(var n=e(this),r=i(n.length),c=arguments.length,u=o(c>1?arguments[1]:void 0,r),a=c>2?arguments[2]:void 0,f=void 0===a?r:o(a,r);f>u;)n[u++]=t;return n}},function(t,n,r){var e=r(0),o=r(48),i=r(11),c=e("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,n,r){},function(t,n,r){"use strict";r.r(n);r(54),r(76),r(85),r(89),r(90),r(52),r(92),r(98),r(99),r.p,r.p,r.p,r.p,r.p,r.p,r(102);var e,o,i=document.querySelector(".header"),c=document.querySelector(".sidebar"),u=document.querySelector(".lead__items"),a=Array.from(u.children),f=document.querySelector(".switches"),s=(Array.from(f.children),document.querySelectorAll("input")),l=Array.from(s);i.addEventListener("click",(function(t){(t.target.closest(".header__button")||t.target.closest("span"))&&(c.classList.toggle("hidden"),Array.from(t.target.children).forEach((function(t){c.classList.contains("hidden")?t.setAttribute("style","transform: none; opacity: 1"):t.removeAttribute("style","transform: none; opacity: 1")})))})),f.addEventListener("click",(function(t){var n,r;t.target.closest(".slider")&&!t.target.parentNode.parentNode.classList.contains("switch__item-all")&&(n=t.target.previousElementSibling,r=a[l.indexOf(t.target.previousElementSibling)],n.checked?r.classList.add("hidden"):r.classList.remove("hidden")),t.target.parentNode.parentNode.classList.contains("switch__item-all")&&(t.target.previousElementSibling.checked?l.forEach((function(t){t.checked=!0})):l.forEach((function(t){t.checked=!1})))})),e=[1,2,3,4,5],o=3,console.log("Входной массив: [".concat(e,"]\n  k=").concat(o,"\n  Выходной массив: [").concat(e.splice(-o).concat(e),"]")),function(t,n){for(var r=t.split(""),e=n.split(""),o=Array(e.length+1).fill(null).map((function(){return Array(r.length+1).fill(null)})),i=0;i<=r.length;i++)o[0][i]=0;for(var c=0;c<=e.length;c++)o[c][0]=0;for(var u=0,a=0,f=0,s=1;s<=e.length;s++)for(var l=1;l<=r.length;l++)r[l-1]===e[s-1]?o[s][l]=o[s-1][l-1]+1:o[s][l],o[s][l]>u&&(u=o[s][l],f=s,a=l);if(0===u)return"";for(var p="";o[f][a]>0;)p=r[a-1]+p,f--,a--;console.log('Строка А "'.concat(t,'"\n  Строка Б "').concat(n,'"\n  Результат "').concat(p,'"\n    '))}("aababba","abbaabcd")}]);