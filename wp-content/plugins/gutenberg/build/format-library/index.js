window.wp=window.wp||{},window.wp.formatLibrary=function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=422)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},133:function(e,t,n){"use strict";var r=n(6),c=n(15),o=n(0);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.icon,n=e.size,i=void 0===n?24:n,l=Object(c.a)(e,["icon","size"]);return Object(o.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:i,height:i},l))}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(45);function c(e,t){if(null==e)return{};var n,c,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},18:function(e,t){e.exports=window.wp.keycodes},195:function(e,t,n){"use strict";var r=n(0),c=n(7),o=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(c.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}));t.a=o},2:function(e,t){e.exports=window.lodash},22:function(e,t){e.exports=window.wp.richText},220:function(e,t,n){"use strict";var r=n(0),c=n(7),o=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(c.Path,{d:"M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"}));t.a=o},222:function(e,t,n){"use strict";var r=n(0),c=n(7),o=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(c.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));t.a=o},25:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},28:function(e,t){e.exports=window.wp.url},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(25);function c(e,t){if(e){if("string"==typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},290:function(e,t,n){"use strict";var r=n(0),c=n(7),o=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(c.Path,{d:"M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"}));t.a=o},3:function(e,t){e.exports=window.wp.components},304:function(e,t,n){"use strict";var r=n(0),c=n(7),o=Object(r.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(c.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"}));t.a=o},305:function(e,t,n){"use strict";var r=n(0),c=n(7),o=Object(r.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(r.createElement)(c.Path,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"}));t.a=o},38:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},380:function(e,t,n){"use strict";var r=n(0),c=n(7),o=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(c.Path,{d:"M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z"}));t.a=o},39:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},4:function(e,t){e.exports=window.wp.data},422:function(e,t,n){"use strict";n.r(t);var r=n(15),c=n(22),o=n(0),a=n(1),i=n(5),l=n(7),u=Object(o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(l.Path,{d:"M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"})),s=Object(a.__)("Bold"),b={name:"core/bold",title:s,tagName:"strong",className:null,edit:function(e){var t=e.isActive,n=e.value,r=e.onChange,a=e.onFocus;function l(){r(Object(c.toggleFormat)(n,{type:"core/bold"}))}return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.RichTextShortcut,{type:"primary",character:"b",onUse:l}),Object(o.createElement)(i.RichTextToolbarButton,{name:"bold",icon:u,title:s,onClick:function(){l(),a()},isActive:t,shortcutType:"primary",shortcutCharacter:"b"}),Object(o.createElement)(i.__unstableRichTextInputEvent,{inputType:"formatBold",onInput:l}))}},m=n(305),p=Object(a.__)("Inline Code"),O={name:"core/code",title:p,tagName:"code",className:null,__unstableInputRule:function(e){var t=e,n=t.start,r=t.text;if("`"!==r.slice(n-1,n))return e;var o=r.slice(0,n-1).lastIndexOf("`");if(-1===o)return e;var a=o,i=n-2;return a===i?e:(e=Object(c.remove)(e,a,a+1),e=Object(c.remove)(e,i,i+1),e=Object(c.applyFormat)(e,{type:"core/code"},a,i))},edit:function(e){var t=e.value,n=e.onChange,r=e.onFocus,a=e.isActive;return Object(o.createElement)(i.RichTextToolbarButton,{icon:m.a,title:p,onClick:function(){n(Object(c.toggleFormat)(t,{type:"core/code"})),r()},isActive:a})}},f=n(6),j=n(9),v=n(3),h=n(18),d=n(220);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=["image"],E=Object(a.__)("Inline image"),x={name:"core/image",title:E,keywords:[Object(a.__)("photo"),Object(a.__)("media")],object:!0,tagName:"img",className:null,attributes:{className:"class",style:"style",url:"src",alt:"alt"},edit:function(e){var t=e.value,n=e.onChange,r=e.onFocus,a=e.isObjectActive,l=e.activeObjectAttributes,u=e.contentRef,s=Object(o.useState)(!1),b=Object(j.a)(s,2),m=b[0],p=b[1];function O(){p(!1)}return Object(o.createElement)(i.MediaUploadCheck,null,Object(o.createElement)(i.RichTextToolbarButton,{icon:Object(o.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(v.Path,{d:"M4 18.5h16V17H4v1.5zM16 13v1.5h4V13h-4zM5.1 15h7.8c.6 0 1.1-.5 1.1-1.1V6.1c0-.6-.5-1.1-1.1-1.1H5.1C4.5 5 4 5.5 4 6.1v7.8c0 .6.5 1.1 1.1 1.1zm.4-8.5h7V10l-1-1c-.3-.3-.8-.3-1 0l-1.6 1.5-1.2-.7c-.3-.2-.6-.2-.9 0l-1.3 1V6.5zm0 6.1l1.8-1.3 1.3.8c.3.2.7.2.9-.1l1.5-1.4 1.5 1.4v1.5h-7v-.9z"})),title:E,onClick:function(){p(!0)},isActive:a}),m&&Object(o.createElement)(i.MediaUpload,{allowedTypes:w,onSelect:function(e){var o=e.id,a=e.url,i=e.alt,l=e.width;O(),n(Object(c.insertObject)(t,{type:"core/image",attributes:{className:"wp-image-".concat(o),style:"width: ".concat(Math.min(l,150),"px;"),url:a,alt:i}})),r()},onClose:O,render:function(e){return(0,e.open)(),null}}),a&&Object(o.createElement)(k,{value:t,onChange:n,activeObjectAttributes:l,contentRef:u}))}};function _(e){e.stopPropagation()}function C(e){[h.LEFT,h.DOWN,h.RIGHT,h.UP,h.BACKSPACE,h.ENTER].indexOf(e.keyCode)>-1&&e.stopPropagation()}function k(e){var t=e.value,n=e.onChange,r=e.activeObjectAttributes,i=e.contentRef,l=r.style,u=Object(o.useState)(l.replace(/\D/g,"")),s=Object(j.a)(u,2),b=s[0],m=s[1],p=Object(c.useAnchorRef)({ref:i,value:t,settings:x});return Object(o.createElement)(v.Popover,{position:"bottom center",focusOnMount:!1,anchorRef:p},Object(o.createElement)("form",{className:"block-editor-format-toolbar__image-container-content",onKeyPress:_,onKeyDown:C,onSubmit:function(e){var c=t.replacements.slice();c[t.start]={type:"core/image",attributes:y(y({},r),{},{style:"width: ".concat(b,"px;")})},n(y(y({},t),{},{replacements:c})),e.preventDefault()}},Object(o.createElement)(v.TextControl,{className:"block-editor-format-toolbar__image-container-value",type:"number",label:Object(a.__)("Width"),value:b,min:1,onChange:function(e){return m(e)}}),Object(o.createElement)(v.Button,{icon:d.a,label:Object(a.__)("Apply"),type:"submit"})))}var P=Object(o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(l.Path,{d:"M12.5 5L10 19h1.9l2.5-14z"})),S=Object(a.__)("Italic"),T={name:"core/italic",title:S,tagName:"em",className:null,edit:function(e){var t=e.isActive,n=e.value,r=e.onChange,a=e.onFocus;function l(){r(Object(c.toggleFormat)(n,{type:"core/italic"}))}return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.RichTextShortcut,{type:"primary",character:"i",onUse:l}),Object(o.createElement)(i.RichTextToolbarButton,{name:"italic",icon:P,title:S,onClick:function(){l(),a()},isActive:t,shortcutType:"primary",shortcutCharacter:"i"}),Object(o.createElement)(i.__unstableRichTextInputEvent,{inputType:"formatItalic",onInput:l}))}},A=n(28),F=n(76),R=n(222),N=n(195),M=n(51),V=n(2);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=Object(v.withSpokenMessages)((function(e){var t=e.isActive,n=e.activeAttributes,r=e.addingLink,l=e.value,u=e.onChange,s=e.speak,b=e.stopAddingLink,m=e.contentRef,p=Object(o.useMemo)(V.uniqueId,[r]),O=Object(o.useState)(),f=Object(j.a)(O,2),h=f[0],d=f[1],g=B({url:n.url,type:n.type,id:n.id,opensInNewTab:"_blank"===n.target},h),y=Object(c.useAnchorRef)({ref:m,value:l,settings:L});return Object(o.createElement)(v.Popover,{key:p,anchorRef:y,focusOnMount:!!r&&"firstElement",onClose:b,position:"bottom center"},Object(o.createElement)(i.__experimentalLinkControl,{value:g,onChange:function(e){e=B(B({},h),e);var n=g.opensInNewTab!==e.opensInNewTab&&g.url===e.url,r=n&&void 0===e.url;if(d(r?e:void 0),!r){var o=Object(A.prependHTTP)(e.url),i=function(e){var t=e.type,n=e.id,r=e.opensInNewWindow,c={type:"core/link",attributes:{url:e.url}};return t&&(c.attributes.type=t),n&&(c.attributes.id=n),r&&(c.attributes.target="_blank",c.attributes.rel="noreferrer noopener"),c}({url:o,type:e.type,id:void 0!==e.id&&null!==e.id?String(e.id):void 0,opensInNewWindow:e.opensInNewTab});if(Object(c.isCollapsed)(l)&&!t){var m=e.title||o,p=Object(c.applyFormat)(Object(c.create)({text:m}),i,0,m.length);u(Object(c.insert)(l,p))}else{var O=Object(c.applyFormat)(l,i);O.start=O.end,O.activeFormats=[],u(O)}n||b(),function(e){if(!e)return!1;var t=e.trim();if(!t)return!1;if(/^\S+:/.test(t)){var n=Object(A.getProtocol)(t);if(!Object(A.isValidProtocol)(n))return!1;if(Object(V.startsWith)(n,"http")&&!/^https?:\/\/[^\/\s]/i.test(t))return!1;var r=Object(A.getAuthority)(t);if(!Object(A.isValidAuthority)(r))return!1;var c=Object(A.getPath)(t);if(c&&!Object(A.isValidPath)(c))return!1;var o=Object(A.getQueryString)(t);if(o&&!Object(A.isValidQueryString)(o))return!1;var a=Object(A.getFragment)(t);if(a&&!Object(A.isValidFragment)(a))return!1}return!(Object(V.startsWith)(t,"#")&&!Object(A.isValidFragment)(t))}(o)?s(t?Object(a.__)("Link edited."):Object(a.__)("Link inserted."),"assertive"):s(Object(a.__)("Warning: the link has been inserted but may have errors. Please test it."),"assertive")}},forceIsEditingLink:r}))})),I=Object(a.__)("Link"),L={name:"core/link",title:I,tagName:"a",className:null,attributes:{url:"href",type:"data-type",id:"data-id",target:"target"},__unstablePasteRule:function(e,t){var n=t.html,r=t.plainText;if(Object(c.isCollapsed)(e))return e;var o=(n||r).replace(/<[^>]+>/g,"").trim();return Object(A.isURL)(o)?(window.console.log("Created link:\n\n",o),Object(c.applyFormat)(e,{type:"core/link",attributes:{url:Object(F.decodeEntities)(o)}})):e},edit:function(e){var t=e.isActive,n=e.activeAttributes,r=e.value,l=e.onChange,u=e.onFocus,s=e.contentRef,b=Object(o.useState)(!1),m=Object(j.a)(b,2),p=m[0],O=m[1];function f(){var e=Object(c.getTextContent)(Object(c.slice)(r));e&&Object(A.isURL)(e)?l(Object(c.applyFormat)(r,{type:"core/link",attributes:{url:e}})):e&&Object(A.isEmail)(e)?l(Object(c.applyFormat)(r,{type:"core/link",attributes:{url:"mailto:".concat(e)}})):O(!0)}function v(){l(Object(c.removeFormat)(r,"core/link")),Object(M.speak)(Object(a.__)("Link removed."),"assertive")}return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.RichTextShortcut,{type:"primary",character:"k",onUse:f}),Object(o.createElement)(i.RichTextShortcut,{type:"primaryShift",character:"k",onUse:v}),t&&Object(o.createElement)(i.RichTextToolbarButton,{name:"link",icon:R.a,title:Object(a.__)("Unlink"),onClick:v,isActive:t,shortcutType:"primaryShift",shortcutCharacter:"k"}),!t&&Object(o.createElement)(i.RichTextToolbarButton,{name:"link",icon:N.a,title:I,onClick:f,isActive:t,shortcutType:"primary",shortcutCharacter:"k"}),(p||t)&&Object(o.createElement)(H,{addingLink:p,stopAddingLink:function(){O(!1),u()},isActive:t,activeAttributes:n,value:r,onChange:l,contentRef:s}))}},U=n(290),D=Object(a.__)("Strikethrough"),G={name:"core/strikethrough",title:D,tagName:"s",className:null,edit:function(e){var t=e.isActive,n=e.value,r=e.onChange,a=e.onFocus;return Object(o.createElement)(i.RichTextToolbarButton,{icon:U.a,title:D,onClick:function(){r(Object(c.toggleFormat)(n,{type:"core/strikethrough"})),a()},isActive:t})}},W={name:"core/underline",title:Object(a.__)("Underline"),tagName:"span",className:null,attributes:{style:"style"},edit:function(e){var t=e.value,n=e.onChange,r=function(){n(Object(c.toggleFormat)(t,{type:"core/underline",attributes:{style:"text-decoration: underline;"}}))};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.RichTextShortcut,{type:"primary",character:"u",onUse:r}),Object(o.createElement)(i.__unstableRichTextInputEvent,{inputType:"formatUnderline",onInput:r}))}},K=n(133),Q=n(380),$=n(4);function q(e,t,n){var r=Object(c.getActiveFormat)(t,e);if(r){var o=r.attributes.style;if(o)return o.replace(new RegExp("^color:\\s*"),"");var a=r.attributes.class;if(a){var l=a.replace(/.*has-([^\s]*)-color.*/,"$1");return Object(i.getColorObjectByAttributeValues)(n,l).color}}}var J=function(e){var t=e.name,n=e.value,r=e.onChange,a=Object($.useSelect)((function(e){var t=e("core/block-editor").getSettings;return Object(V.get)(t(),["colors"],[])})),l=Object(o.useCallback)((function(e){if(e){var o=Object(i.getColorObjectByColorValue)(a,e);r(Object(c.applyFormat)(n,{type:t,attributes:o?{class:Object(i.getColorClassName)("color",o.slug)}:{style:"color:".concat(e)}}))}else r(Object(c.removeFormat)(n,t))}),[a,r]),u=Object(o.useMemo)((function(){return q(t,n,a)}),[t,n,a]);return Object(o.createElement)(i.ColorPalette,{value:u,onChange:l})};function X(e){var t=e.name,n=e.value,r=e.onChange,a=e.onClose,l=e.contentRef,u=Object(c.useAnchorRef)({ref:l,value:n,settings:ee});return Object(o.createElement)(i.URLPopover,{value:n,onClose:a,className:"components-inline-color-popover",anchorRef:u},Object(o.createElement)(J,{name:t,value:n,onChange:r}))}var Y=Object(a.__)("Text Color"),Z=[],ee={name:"core/text-color",title:Y,tagName:"span",className:"has-inline-color",attributes:{style:"style",class:"class"},edit:function(e){var t=e.value,n=e.onChange,r=e.isActive,a=e.activeAttributes,l=e.contentRef,u=Object(i.__experimentalUseEditorFeature)("color.custom"),s=Object(i.__experimentalUseEditorFeature)("color.palette")||Z,b=Object(o.useState)(!1),m=Object(j.a)(b,2),p=m[0],O=m[1],f=Object(o.useCallback)((function(){return O(!0)}),[O]),v=Object(o.useCallback)((function(){return O(!1)}),[O]),h=Object(o.useMemo)((function(){var e=q("core/text-color",t,s);if(e)return{backgroundColor:e}}),[t,s]),d=!Object(V.isEmpty)(s)||!u;return d||r?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.RichTextToolbarButton,{key:r?"text-color":"text-color-not-active",className:"format-library-text-color-button",name:r?"text-color":void 0,icon:Object(o.createElement)(o.Fragment,null,Object(o.createElement)(K.a,{icon:Q.a}),r&&Object(o.createElement)("span",{className:"format-library-text-color-button__indicator",style:h})),title:Y,onClick:d?f:function(){return n(Object(c.removeFormat)(t,"core/text-color"))}}),p&&Object(o.createElement)(X,{name:"core/text-color",onClose:v,activeAttributes:a,value:t,onChange:n,contentRef:l})):null}},te=Object(o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(l.Path,{d:"M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"})),ne=Object(a.__)("Subscript"),re={name:"core/subscript",title:ne,tagName:"sub",className:null,edit:function(e){var t=e.isActive,n=e.value,r=e.onChange,a=e.onFocus;return Object(o.createElement)(i.RichTextToolbarButton,{icon:te,title:ne,onClick:function(){r(Object(c.toggleFormat)(n,{type:"core/subscript"})),a()},isActive:t})}},ce=Object(o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(l.Path,{d:"M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"})),oe=Object(a.__)("Superscript"),ae={name:"core/superscript",title:oe,tagName:"sup",className:null,edit:function(e){var t=e.isActive,n=e.value,r=e.onChange,a=e.onFocus;return Object(o.createElement)(i.RichTextToolbarButton,{icon:ce,title:oe,onClick:function(){r(Object(c.toggleFormat)(n,{type:"core/superscript"})),a()},isActive:t})}},ie=n(304),le=Object(a.__)("Keyboard Input");[b,O,x,T,L,G,W,ee,re,ae,{name:"core/keyboard",title:le,tagName:"kbd",className:null,edit:function(e){var t=e.isActive,n=e.value,r=e.onChange,a=e.onFocus;return Object(o.createElement)(i.RichTextToolbarButton,{icon:ie.a,title:le,onClick:function(){r(Object(c.toggleFormat)(n,{type:"core/keyboard"})),a()},isActive:t})}}].forEach((function(e){var t=e.name,n=Object(r.a)(e,["name"]);return Object(c.registerFormatType)(t,n)}))},45:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},5:function(e,t){e.exports=window.wp.blockEditor},51:function(e,t){e.exports=window.wp.a11y},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},7:function(e,t){e.exports=window.wp.primitives},76:function(e,t){e.exports=window.wp.htmlEntities},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(38),c=n(29),o=n(39);function a(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){c=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(e,t)||Object(c.a)(e,t)||Object(o.a)()}}});