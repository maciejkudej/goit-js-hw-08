var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(h,t),c?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=i}function h(){var e=m();if(O(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return v?d(n,i-(e-l)):n}(e))}function j(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function w(){var e=m(),n=O(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(v)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:j(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=b.querySelector("input"),S=b.querySelector("textarea");try{y.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,S.value=JSON.parse(localStorage.getItem("feedback-form-state")).message}catch{}let O={email:"",message:""};b.addEventListener("input",t((()=>{O.email=y.value,O.message=S.value,localStorage.setItem("feedback-form-state",JSON.stringify(O)),console.log(y.value)}),500));b.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),b.reset()}),!1);
//# sourceMappingURL=03-feedback.8677ae5d.js.map
