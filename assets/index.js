"use strict";(()=>{function o(){let t=document.createElement("a");return t.id="commits-link",t.classList.add("entry-category-link"),t.rel="nofollow",t.href=`https://github.com/mkizka/blog/commits/main${location.pathname}.md`,t}function c(t){let e=document.createElement("img"),n=new URL("https://img.shields.io");return n.pathname=`/badge/${encodeURIComponent(t)}-black`,n.searchParams.set("logo","github"),n.searchParams.set("labelColor","black"),n.searchParams.set("color","ddd"),n.searchParams.set("style","flat-square"),e.src=n.toString(),e}function i(t){let e=Math.ceil((new Date().getTime()-new Date(t).getTime())/1e3);return e<=60?`${e}\u79D2\u524D`:(e=Math.ceil(e/60),e<=60?`${e}\u5206\u524D`:(e=Math.ceil(e/60),e<=24?`${e}\u6642\u9593\u524D`:(e=Math.ceil(e/24),e>=30?"30\u65E5\u4EE5\u4E0A\u524D":`${e}\u65E5\u524D`)))}function l(){let t=document.querySelector('[type="application/ld+json"]'),e=JSON.parse(t.textContent),n=`commits (${i(e.dateModified)}\u306B\u66F4\u65B0)`,a=o(),r=c(n);return a.appendChild(r),a}function s(t){let e=t.parentElement,n=document.createElement("a");n.href=t.src,n.target="_blank",n.appendChild(t),e.appendChild(n)}window.addEventListener("load",()=>{let t=document.querySelector(".entry-categories");t&&t.appendChild(l());let e=document.querySelector(".entry-content");e&&e.querySelectorAll("img").forEach(s)});})();
