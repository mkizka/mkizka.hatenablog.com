"use strict";(()=>{var at=Object.create;var rt=Object.defineProperty;var ut=Object.getOwnPropertyDescriptor;var dt=Object.getOwnPropertyNames;var ft=Object.getPrototypeOf,ct=Object.prototype.hasOwnProperty;var B=(r,i)=>()=>(i||r((i={exports:{}}).exports,i),i.exports);var lt=(r,i,d,y)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of dt(i))!ct.call(r,c)&&c!==d&&rt(r,c,{get:()=>i[c],enumerable:!(y=ut(i,c))||y.enumerable});return r};var V=(r,i,d)=>(d=r!=null?at(ft(r)):{},lt(i||!r||!r.__esModule?rt(d,"default",{value:r,enumerable:!0}):d,r));var G=B((R,Q)=>{(function(r,i){typeof R=="object"&&typeof Q<"u"?Q.exports=i():typeof define=="function"&&define.amd?define(i):(r=typeof globalThis<"u"?globalThis:r||self).dayjs=i()})(R,function(){"use strict";var r=1e3,i=6e4,d=36e5,y="millisecond",c="second",b="minute",T="hour",h="day",D="week",p="month",I="quarter",Y="year",w="date",j="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,J={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},W=function(u,n,t){var s=String(u);return!s||s.length>=n?u:""+Array(n+1-s.length).join(t)+u},C={s:W,z:function(u){var n=-u.utcOffset(),t=Math.abs(n),s=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+W(s,2,"0")+":"+W(e,2,"0")},m:function u(n,t){if(n.date()<t.date())return-u(t,n);var s=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(s,p),a=t-e<0,o=n.clone().add(s+(a?-1:1),p);return+(-(s+(t-e)/(a?e-o:o-e))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(u){return{M:p,y:Y,w:D,d:h,D:w,h:T,m:b,s:c,ms:y,Q:I}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(u){return u===void 0}},_="en",v={};v[_]=J;var N=function(u){return u instanceof z},O=function u(n,t,s){var e;if(!n)return _;if(typeof n=="string"){var a=n.toLowerCase();v[a]&&(e=a),t&&(v[a]=t,e=a);var o=n.split("-");if(!e&&o.length>1)return u(o[0])}else{var f=n.name;v[f]=n,e=f}return!s&&e&&(_=e),e||!s&&_},M=function(u,n){if(N(u))return u.clone();var t=typeof n=="object"?n:{};return t.date=u,t.args=arguments,new z(t)},l=C;l.l=O,l.i=N,l.w=function(u,n){return M(u,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var z=function(){function u(t){this.$L=O(t.locale,null,!0),this.parse(t)}var n=u.prototype;return n.parse=function(t){this.$d=function(s){var e=s.date,a=s.utc;if(e===null)return new Date(NaN);if(l.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(A);if(o){var f=o[2]-1||0,$=(o[7]||"0").substring(0,3);return a?new Date(Date.UTC(o[1],f,o[3]||1,o[4]||0,o[5]||0,o[6]||0,$)):new Date(o[1],f,o[3]||1,o[4]||0,o[5]||0,o[6]||0,$)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return l},n.isValid=function(){return this.$d.toString()!==j},n.isSame=function(t,s){var e=M(t);return this.startOf(s)<=e&&e<=this.endOf(s)},n.isAfter=function(t,s){return M(t)<this.startOf(s)},n.isBefore=function(t,s){return this.endOf(s)<M(t)},n.$g=function(t,s,e){return l.u(t)?this[s]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,s){var e=this,a=!!l.u(s)||s,o=l.p(t),f=function(x,S){var k=l.w(e.$u?Date.UTC(e.$y,S,x):new Date(e.$y,S,x),e);return a?k:k.endOf(h)},$=function(x,S){return l.w(e.toDate()[x].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(S)),e)},m=this.$W,g=this.$M,H=this.$D,L="set"+(this.$u?"UTC":"");switch(o){case Y:return a?f(1,0):f(31,11);case p:return a?f(1,g):f(0,g+1);case D:var P=this.$locale().weekStart||0,q=(m<P?m+7:m)-P;return f(a?H-q:H+(6-q),g);case h:case w:return $(L+"Hours",0);case T:return $(L+"Minutes",1);case b:return $(L+"Seconds",2);case c:return $(L+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,s){var e,a=l.p(t),o="set"+(this.$u?"UTC":""),f=(e={},e[h]=o+"Date",e[w]=o+"Date",e[p]=o+"Month",e[Y]=o+"FullYear",e[T]=o+"Hours",e[b]=o+"Minutes",e[c]=o+"Seconds",e[y]=o+"Milliseconds",e)[a],$=a===h?this.$D+(s-this.$W):s;if(a===p||a===Y){var m=this.clone().set(w,1);m.$d[f]($),m.init(),this.$d=m.set(w,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},n.set=function(t,s){return this.clone().$set(t,s)},n.get=function(t){return this[l.p(t)]()},n.add=function(t,s){var e,a=this;t=Number(t);var o=l.p(s),f=function(g){var H=M(a);return l.w(H.date(H.date()+Math.round(g*t)),a)};if(o===p)return this.set(p,this.$M+t);if(o===Y)return this.set(Y,this.$y+t);if(o===h)return f(1);if(o===D)return f(7);var $=(e={},e[b]=i,e[T]=d,e[c]=r,e)[o]||1,m=this.$d.getTime()+t*$;return l.w(m,this)},n.subtract=function(t,s){return this.add(-1*t,s)},n.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||j;var a=t||"YYYY-MM-DDTHH:mm:ssZ",o=l.z(this),f=this.$H,$=this.$m,m=this.$M,g=e.weekdays,H=e.months,L=function(S,k,Z,F){return S&&(S[k]||S(s,a))||Z[k].slice(0,F)},P=function(S){return l.s(f%12||12,S,"0")},q=e.meridiem||function(S,k,Z){var F=S<12?"AM":"PM";return Z?F.toLowerCase():F},x={YY:String(this.$y).slice(-2),YYYY:this.$y,M:m+1,MM:l.s(m+1,2,"0"),MMM:L(e.monthsShort,m,H,3),MMMM:L(H,m),D:this.$D,DD:l.s(this.$D,2,"0"),d:String(this.$W),dd:L(e.weekdaysMin,this.$W,g,2),ddd:L(e.weekdaysShort,this.$W,g,3),dddd:g[this.$W],H:String(f),HH:l.s(f,2,"0"),h:P(1),hh:P(2),a:q(f,$,!0),A:q(f,$,!1),m:String($),mm:l.s($,2,"0"),s:String(this.$s),ss:l.s(this.$s,2,"0"),SSS:l.s(this.$ms,3,"0"),Z:o};return a.replace(E,function(S,k){return k||x[S]||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,s,e){var a,o=l.p(s),f=M(t),$=(f.utcOffset()-this.utcOffset())*i,m=this-f,g=l.m(this,f);return g=(a={},a[Y]=g/12,a[p]=g,a[I]=g/3,a[D]=(m-$)/6048e5,a[h]=(m-$)/864e5,a[T]=m/d,a[b]=m/i,a[c]=m/r,a)[o]||m,e?g:l.a(g)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return v[this.$L]},n.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),a=O(t,s,!0);return a&&(e.$L=a),e},n.clone=function(){return l.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},u}(),nt=z.prototype;return M.prototype=nt,[["$ms",y],["$s",c],["$m",b],["$H",T],["$W",h],["$M",p],["$y",Y],["$D",w]].forEach(function(u){nt[u[1]]=function(n){return this.$g(n,u[0],u[1])}}),M.extend=function(u,n){return u.$i||(u(n,z,M),u.$i=!0),M},M.locale=O,M.isDayjs=N,M.unix=function(u){return M(1e3*u)},M.en=v[_],M.Ls=v,M.p={},M})});var it=B((K,X)=>{(function(r,i){typeof K=="object"&&typeof X<"u"?X.exports=i():typeof define=="function"&&define.amd?define(i):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_plugin_relativeTime=i()})(K,function(){"use strict";return function(r,i,d){r=r||{};var y=i.prototype,c={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function b(h,D,p,I){return y.fromToBase(h,D,p,I)}d.en.relativeTime=c,y.fromToBase=function(h,D,p,I,Y){for(var w,j,A,E=p.$locale().relativeTime||c,J=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],W=J.length,C=0;C<W;C+=1){var _=J[C];_.d&&(w=I?d(h).diff(p,_.d,!0):p.diff(h,_.d,!0));var v=(r.rounding||Math.round)(Math.abs(w));if(A=w>0,v<=_.r||!_.r){v<=1&&C>0&&(_=J[C-1]);var N=E[_.l];Y&&(v=Y(""+v)),j=typeof N=="string"?N.replace("%d",v):N(v,D,_.l,A);break}}if(D)return j;var O=A?E.future:E.past;return typeof O=="function"?O(j):O.replace("%s",j)},y.to=function(h,D){return b(h,D,this,!0)},y.from=function(h,D){return b(h,D,this)};var T=function(h){return h.$u?d.utc():d()};y.toNow=function(h){return this.to(T(this),h)},y.fromNow=function(h){return this.from(T(this),h)}}})});var st=B((tt,et)=>{(function(r,i){typeof tt=="object"&&typeof et<"u"?et.exports=i(G()):typeof define=="function"&&define.amd?define(["dayjs"],i):(r=typeof globalThis<"u"?globalThis:r||self).dayjs_locale_ja=i(r.dayjs)})(tt,function(r){"use strict";function i(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var d=i(r),y={name:"ja",weekdays:"\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),weekdaysShort:"\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),weekdaysMin:"\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),ordinal:function(c){return c+"\u65E5"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5E74M\u6708D\u65E5",LLL:"YYYY\u5E74M\u6708D\u65E5 HH:mm",LLLL:"YYYY\u5E74M\u6708D\u65E5 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY\u5E74M\u6708D\u65E5",lll:"YYYY\u5E74M\u6708D\u65E5 HH:mm",llll:"YYYY\u5E74M\u6708D\u65E5(ddd) HH:mm"},meridiem:function(c){return c<12?"\u5348\u524D":"\u5348\u5F8C"},relativeTime:{future:"%s\u5F8C",past:"%s\u524D",s:"\u6570\u79D2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65E5",dd:"%d\u65E5",M:"1\u30F6\u6708",MM:"%d\u30F6\u6708",y:"1\u5E74",yy:"%d\u5E74"}};return d.default.locale(y,null,!0),y})});var U=V(G(),1),ot=V(it(),1),pt=V(st(),1);U.default.locale("ja");U.default.extend(ot.default);function ht(){let r=document.createElement("a");return r.id="commits-link",r.classList.add("entry-category-link"),r.rel="nofollow",r.href=`https://github.com/mkizka/blog/commits/main${location.pathname}.md`,r}function mt(r){let i=document.createElement("img"),d=new URL("https://img.shields.io");return d.pathname=`/badge/${encodeURIComponent(r)}-black`,d.searchParams.set("logo","github"),d.searchParams.set("labelColor","black"),d.searchParams.set("color","ddd"),d.searchParams.set("style","flat-square"),i.src=d.toString(),i}function $t(){let r=document.querySelector('[type="application/ld+json"]'),i=JSON.parse(r.textContent),d=(0,U.default)(i.dateModified).isSame(i.datePublished,"day")?"commits":`commits (${(0,U.default)(i.dateModified).fromNow()}\u306B\u66F4\u65B0)`,y=ht(),c=mt(d);return y.appendChild(c),y}function yt(r){let i=r.parentElement,d=document.createElement("a");d.href=r.src,d.target="_blank",d.appendChild(r),i.appendChild(d)}window.addEventListener("load",()=>{let r=document.querySelector(".entry-categories");r&&r.appendChild($t());let i=document.querySelector(".entry-content");i&&i.querySelectorAll("img").forEach(yt)});})();
