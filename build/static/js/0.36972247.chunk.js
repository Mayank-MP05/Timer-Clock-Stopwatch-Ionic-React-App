(this["webpackJsonpmarvel-client"]=this["webpackJsonpmarvel-client"]||[]).push([[0],{183:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(20),a=(n(31),n(45)),i=function(t,e,n,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=o.innerWidth,a=e/n,i=t.velocityX,u=n/2,s=i>=0&&(i>.2||t.deltaX>u),l=(s?1-a:a)*n,d=0;if(l>5){var h=l/Math.abs(i);d=Math.min(h,540)}c(s,a<=0?.01:Object(r.c)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=0.36972247.chunk.js.map