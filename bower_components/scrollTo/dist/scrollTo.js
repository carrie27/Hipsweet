/**
  * scrollTo
  *
  * @author William Lin
  * @license The MIT License (MIT)
  * https://github.com/ganlanyuan/scrollTo
  */
function runScroll(o,e,t){if(!(0>t)){var n=e-o.scrollTop,l=n/t*10,r,c=function(){o.scrollTop+=l,o.scrollTop!==e&&(runScroll(o,e,t-10),r=!1)};r||(r=!0,window.requestAnimationFrame?window.requestAnimationFrame(c):setTimeout(c,10))}}function scrollTo(o,e){var t=document.body,n=document.documentElement,l=(n||t.parentNode||t).clientHeight,r=Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),c=o+l,i=r-l-1;c>r&&(o=i),o=Math.round(o),runScroll(document.body,o,e),runScroll(document.documentElement,o,e)}