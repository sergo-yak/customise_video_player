webpackJsonp(["globalsvgloader/publish/target"],{"8b0128f8df":function(c,a,d){c.exports=d("HxDO")},HxDO:function(c,a,d){c=d("Tt/b");var f=d("To4t");window.nn[c.MODULE_NAME]=function(){var a=void 0,b=function(b){(0,f.GETRequest)(b,function(b){a.innerHTML=b})};return{init:function(c,d){a=c[0];b(d.svgSourceUrl)},destroy:function(){}}}},To4t:function(c,a,d){function f(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0,d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"GET",e=
new XMLHttpRequest;e.onload=function(){200===e.status?b(e.response):b(null,e.statusText)};e.open(d,a,c);e.onerror=function(){b(null,"unknown_error")};return e}Object.defineProperty(a,"__esModule",{value:!0});a.GETRequest=function(a,b){f(a,b,!0,"GET").send(null)}},"Tt/b":function(c,a,d){Object.defineProperty(a,"__esModule",{value:!0});a.MODULE_NAME="globalsvgloader"}},["8b0128f8df"]);