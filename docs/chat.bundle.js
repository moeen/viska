(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(t,e){t.exports.forEachSync=function(t,e){return new Promise((function(n,r){var s=0;!function i(o){if(o>=t.length)return n(t);var c=e(t[o],o);return s+=1,c instanceof Promise&&c.then((function(){return i(s)})).catch(r),i(s)}(0)}))},t.exports.minifyStr=function(t,e){return t.length<=e?t:"".concat(t.substr(0,Math.ceil(e/2))).concat(t.substr(t.length-Math.floor(e/2)))},t.exports.strToNumber=function(t,e){for(var n=1,r=0;r<t.length;r++)n=Math.imul(n,t.charCodeAt(r));var s=(Math.cos(n)+1)/2,i=Math.floor(s*e)-1;return i<0&&i++,Math.floor(s*e)},t.exports.copyToClipboard=function(t){var e=document.createElement("input");return e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.value=t,e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),setTimeout((function(){e.remove()})),!0}},4:function(t,e,n){"use strict";n.r(e);var r=n(12),s=n(35),i=n.n(s);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(t,e){var n=t?"".concat(t.toUpperCase(),"-").concat(Object(r.minifyStr)(e,10)):"unknown";return{type:t,xid:e,name:n,avatar:"".concat("/hazy-chat","/avatars/").concat(Object(r.strToNumber)(n,50),".png")}},u={data:function(){return{user:a(),sid:void 0,server:void 0,chats:[]}},methods:{init:function(t){this.server=i()(t,{autoConnect:!1}),this.server.on("connect",this._onConnectionStateChange.bind(this,!0)),this.server.on("disconnect",this._onConnectionStateChange.bind(this,!1)),this.server.on("newMessage",this._onNewMessage)},login:function(t,e){var n=this;return new Promise((function(r,s){n.server.open(),n.$once("connect",(function(){n.server.emit("login",{type:t,data:e},(function(e,i){e?(n.server.close(),s()):(n.sid=n.server.id,n.user=a(t,i),console.log(n.user),n._loadChats(),n.$emit("login",n.auth),r())}))}))}))},logout:function(){this.user=a(),this._clearChats(),this.server.close(),this.$emit("logout")},addRandomChat:function(){var t=this;return new Promise((function(e,n){var r=t.chats.map((function(t){return{xid:t.user.xid,type:t.user.type}}));t.server.emit("findRandomUser",r,(function(r,s){if(r||!s)n();else{var i=t._upsertChat(s.type,s.xid);t._saveChats(),e(i)}}))}))},sendMessage:function(t,e){var n=this;return new Promise((function(r,s){n.server.emit("sendMessage",{user:t.user,body:e},(function(i){i?s():(t.messages.push({from:"me",body:e}),n._saveChats(),r())}))}))},getChat:function(t){var e=t.type,n=t.xid;return this._upsertChat(e,n)},refreshChat:function(t){var e=this;return new Promise((function(n,r){e.server.emit("getUserStatus",t.user,(function(e,s){e?r():(t.isOnline=s,n(s))}))}))},_onNewMessage:function(t){var e=t.user,n=e.type,r=e.xid,s=t.body,i=this._upsertChat(n,r);i.isOnline=!0,i.messages.push({from:"its",body:s}),this._saveChats(),this.$emit("newMessage",{user:a(n,r),body:s})},_saveChats:function(){var t=this.chats.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{isOnline:null})}));localStorage.setItem("".concat(JSON.stringify(this.user),":chats"),JSON.stringify(t))},_loadChats:function(){var t=localStorage.getItem("".concat(JSON.stringify(this.user),":chats"));t&&(this.chats=JSON.parse(t))},_clearChats:function(){localStorage.removeItem("".concat(JSON.stringify(this.user),":chats")),this.chats=[]},_onConnectionStateChange:function(t){!0===t?(this.sid=this.server.id,this.$emit("connect",this.sid)):(this.sid=void 0,this.$emit("disconnect"))},_upsertChat:function(t,e){var n=this.chats.find((function(n){return n.user.type===t&&n.user.xid===e}));return n||(n={user:a(t,e),isOnline:null,messages:[]},this.chats.unshift(n)),n}}};e.default=u},60:function(t,e){}}]);