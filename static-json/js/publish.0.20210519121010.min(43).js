webpackJsonp(["footer/publish/target"],{"/kUO":function(e,c,d){var f=d("L6QX");window.nn.footercategories=function(){var c=null,d=[],e=[],g=[],k=function(){d.forEach(function(a){var b=a.querySelector(f.SELECTORS.accordionHead);a=a.querySelector(f.SELECTORS.accordionBody);e.push(b);g.push(a);b&&b.addEventListener("click",h,!1)})},h=function(a){var b=e.indexOf(a.currentTarget);a=d[b];b=g[b];a.classList.contains(f.CLASSES.accordionExpanded)?l(a,b):m(a,b)},m=function(a,b){b.style.height=b.scrollHeight+
"px";requestAnimationFrame(function(){a.classList.add(f.CLASSES.accordionExpanded)})},l=function(a,b){b.addEventListener("transitionend",function n(){b.style.height=null;b.removeEventListener("transitionend",n)},!1);a.classList.remove(f.CLASSES.accordionExpanded)},p=function(){d.forEach(function(a){(a=a.querySelector(f.SELECTORS.accordionHead))&&a.removeEventListener("click",h)})};return{init:function(a){c=a[0];c&&(d=Array.from(c.querySelectorAll(f.SELECTORS.accordion)));k()},destroy:function(){p()}}}},
L6QX:function(e,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.SELECTORS=c.CLASSES=c.EVENTS_NAMESPACE=void 0;e=d("akNE");c.EVENTS_NAMESPACE=".aem--footerCategories";d=c.CLASSES={accordion:"aem--footerCategories__accordion",accordionExpanded:"aem--footerCategories__accordion--expanded",accordionHead:"aem--footerCategories__accordion-head",accordionBody:"aem--footerCategories__accordion-body"};c.SELECTORS=(0,e.createSelectorsFromClasses)(d)},bd66eb9cea:function(e,c,d){e.exports=d("/kUO")}},
["bd66eb9cea"]);